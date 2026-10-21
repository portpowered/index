# Port OS index

An index for Port OS: an MCP cloud API that lets you connect AI to devices.

Connect AI such as Claude, Muse and ChatGPT directly to device providers such as Roborock, Ring, Sonos and many more. Use it directly from your chat agent or CLI.

<!-- Generated from index.json by scripts/render.mjs. Do not edit by hand. -->

## Port OS

| Name | Description |
| --- | --- |
| [Website](https://portoperatingsystem.com) | Connect your devices and AI clients. |
| [Documentation](https://portoperatingsystem.com/docs/) | Guides, concepts and the capability reference. |
| [External resources](https://portoperatingsystem.com/docs/reference/external-resources/) | Libraries, repositories, packages, skills and endpoints built against Port OS. |
| [HTTP API reference](https://portoperatingsystem.com/api/) | Every Port OS REST operation, with examples. |
| [MCP server](https://api.portoperatingsystem.com/mcp) | Streamable HTTP MCP endpoint for AI clients (OAuth sign-in required). |
| [llms.txt](https://portoperatingsystem.com/llms.txt) | Machine-readable entry point for agents. |

## Plugins and skills

| Name | Description |
| --- | --- |
| [portos-plugin](https://github.com/portpowered/portos-plugin) | The Port OS plugin for Claude and other AI clients: the hosted MCP connection plus skills. |
| [portos-docs](https://github.com/portpowered/portos-docs) | Customer guides and agent skills; the source for the docs site and the plugin skills. |

## Reference data

| Name | Description |
| --- | --- |
| [portos-reference-data](https://github.com/portpowered/portos-reference-data) | Public OpenAPI schema, capability catalog and agent documentation release assets. |
| [@portpowered/reference-data](https://www.npmjs.com/package/@portpowered/reference-data) | The reference data as an npm package (`npm i @portpowered/reference-data@next`). |
| [github.com/portpowered/portos-reference-data](https://pkg.go.dev/github.com/portpowered/portos-reference-data) | The same reference data as a Go module. |

## Device integration libraries

| Name | Description |
| --- | --- |
| [go-alexa](https://github.com/portpowered/go-alexa) | Unofficial Go wrapper for Alexa APIs. |
| [go-august-lock](https://github.com/portpowered/go-august-lock) | Go client for the unofficial August and Yale lock APIs. |
| [go-google-nest-sdm](https://github.com/portpowered/go-google-nest-sdm) | Go client for Google Nest Smart Device Management. |
| [go-icloud](https://github.com/portpowered/go-icloud) | Go library for iCloud files, photos and Find My. |
| [go-philips](https://github.com/portpowered/go-philips) | Go client for Philips lighting APIs. |
| [go-ring](https://github.com/portpowered/go-ring) | Go library for Ring doorbells: auth, video streams and controls. |
| [go-roborock](https://github.com/portpowered/go-roborock) | Go client for Roborock vacuums. |
| [go-sonos](https://github.com/portpowered/go-sonos) | Go client for Sonos APIs. |
| [go-tile](https://github.com/portpowered/go-tile) | Go client for the unofficial Tile API. |
| [go-tplink](https://github.com/portpowered/go-tplink) | Go library for TP-Link cloud APIs. |
| [go-tuya](https://github.com/portpowered/go-tuya) | Go library for Tuya devices. |
| [go-third-party-template](https://github.com/portpowered/go-third-party-template) | Template for new Go wrappers of third-party APIs. |

## Developer tooling

| Name | Description |
| --- | --- |
| [openapi-linter](https://github.com/portpowered/openapi-linter) | OpenAPI linting with YAML rule packs and Go check APIs. |
| [markdown-linter](https://github.com/portpowered/markdown-linter) | Configurable Markdown linting with rule packs and a Go extension API. |
| [api-docs-website-github-action](https://github.com/portpowered/api-docs-website-github-action) | GitHub Action that turns an OpenAPI or AsyncAPI document into a static site. |
| [cask](https://github.com/portpowered/cask) | Homebrew casks. |

## Contributing

Add or update an entry in `index.json`, run `node scripts/render.mjs`, and commit both files. CI fails when `README.md` is out of date or a link is broken.
