# Port OS index

Everything Port OS publishes: the product, plugins and skills, reference data, device integration libraries, and the tooling we build with. Port OS connects AI to your devices.

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
| [pytile](https://github.com/portpowered/pytile) | Fork of bachya/pytile, a Python API for Tile trackers. |
| [go-third-party-template](https://github.com/portpowered/go-third-party-template) | Template for new Go wrappers of third-party APIs. |
| [awesome-smart-home](https://github.com/portpowered/awesome-smart-home) | A curated list of smart home integration libraries. |

## Developer tooling

| Name | Description |
| --- | --- |
| [openapi-linter](https://github.com/portpowered/openapi-linter) | OpenAPI linting with YAML rule packs and Go check APIs. |
| [markdown-linter](https://github.com/portpowered/markdown-linter) | Configurable Markdown linting with rule packs and a Go extension API. |
| [api-docs-website-github-action](https://github.com/portpowered/api-docs-website-github-action) | GitHub Action that turns an OpenAPI or AsyncAPI document into a static site. |
| [cask](https://github.com/portpowered/cask) | Homebrew casks. |

## Agents and runtimes

| Name | Description |
| --- | --- |
| [go-stream-processor](https://github.com/portpowered/go-stream-processor) | Embedded Go stream processing with DAG pipelines, backpressure and checkpoints. |
| [go-agent-harness](https://github.com/portpowered/go-agent-harness) | Realtime speech-to-speech agent harness for the terminal and WebMCP. |
| [you-agent-factory](https://github.com/portpowered/you-agent-factory) | Agent factory workflow engine. |
| [you-agent-factory-docs](https://github.com/portpowered/you-agent-factory-docs) | Documentation for the agent factory. |
| [go-ai-text-classifier](https://github.com/portpowered/go-ai-text-classifier) | Go text classification with AI models. |

## WebMCP experiments

| Name | Description |
| --- | --- |
| [webmcp-calendar](https://github.com/portpowered/webmcp-calendar) | A calendar for WebMCP. |
| [webmcp-3d-model](https://github.com/portpowered/webmcp-3d-model) | A 3D model viewer for WebMCP. |
| [display-text-tv-webmcp](https://github.com/portpowered/display-text-tv-webmcp) | A static WebMCP site for displaying text on your TV. |
| [anki-web-mcp](https://github.com/portpowered/anki-web-mcp) | An Anki website that supports AI usage through WebMCP. |

## Learning

| Name | Description |
| --- | --- |
| [learn-agent-factories](https://github.com/portpowered/learn-agent-factories) | Building agent factories, from zero to hero. |
| [awesome-agent-factories](https://github.com/portpowered/awesome-agent-factories) | A curated list of agent factories. |
| [ai-model-reference](https://github.com/portpowered/ai-model-reference) | A large reference of AI model concepts, papers and models. |
| [checklists](https://github.com/portpowered/checklists) | A big book of checklists. |

## Contributing

Add or update an entry in `index.json`, run `node scripts/render.mjs`, and commit both files. CI fails when `README.md` is out of date or a link is broken.
