// Renders README.md from index.json. `--check` fails when README.md is stale or an entry is malformed.
import { readFileSync, writeFileSync } from 'node:fs';

const index = JSON.parse(readFileSync(new URL('../index.json', import.meta.url), 'utf8'));
const seen = new Set();

function row(item) {
  if (!item.name || !item.description || !item.repo === !item.url) {
    throw new Error(`Entry needs a name, a description and exactly one of repo or url: ${JSON.stringify(item)}`);
  }
  if (item.repo && !/^portpowered\/[A-Za-z0-9._-]+$/.test(item.repo)) throw new Error(`Repos must be under portpowered: ${item.repo}`);
  const url = item.repo ? `https://github.com/${item.repo}` : item.url;
  if (!url.startsWith('https://')) throw new Error(`Links must use https: ${url}`);
  if (seen.has(url)) throw new Error(`Duplicate link: ${url}`);
  seen.add(url);
  return `| [${item.name}](${url}) | ${item.description} |`;
}

const lines = [`# ${index.title}`, '', index.summary, '', '<!-- Generated from index.json by scripts/render.mjs. Do not edit by hand. -->', ''];
for (const section of index.sections) {
  lines.push(`## ${section.title}`, '', '| Name | Description |', '| --- | --- |', ...section.items.map(row), '');
}
lines.push(
  '## Contributing',
  '',
  'Add or update an entry in `index.json`, run `node scripts/render.mjs`, and commit both files. CI fails when `README.md` is out of date or a link is broken.',
  '',
);
const readme = lines.join('\n');

if (process.argv.includes('--check')) {
  if (readFileSync(new URL('../README.md', import.meta.url), 'utf8') !== readme) {
    console.error('README.md is stale. Run: node scripts/render.mjs');
    process.exit(1);
  }
  console.log(`index.json valid (${seen.size} links); README.md is current.`);
} else {
  writeFileSync(new URL('../README.md', import.meta.url), readme);
}
