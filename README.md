🌐 English | [Español](README.es.md) | [Português (Brasil)](README.pt_BR.md) | [한국어](README.ko.md)

# 🎮 Mona Mayhem

### Turn GitHub activity into an arcade showdown.

Build a retro-inspired arena where two GitHub contribution graphs go head-to-head. Along the way, use GitHub Copilot to plan, build, theme, and polish the app—one workshop at a time.

[**Start the workshop →**](workshop/00-overview.md) · [Explore the workshop parts ↓](#workshop)

![Mona Mayhem game screenshot](https://github.com/user-attachments/assets/5eca79e2-cb9f-4e93-aa0d-23666ebde3b7)
*The arcade-style contribution battle you'll build.*

## 🕹️ Your mission

Take this Astro starter from a blank arena to a polished GitHub contribution battle. Compare two profiles, bring the game to life, then give it a retro look and feel—all with Copilot as your pair programmer.

Choose your play style:

- **VS Code track** — Chat, Plan Mode, Agent Mode, background agents, and editor-native review loops.
- **CLI track** — `copilot`, `@file` context, `/plan`, autonomous edits, `/fleet`, `/delegate`, and `/review`.

The workshop takes about an hour and is designed for intermediate developers. [Pick a track and get started →](workshop/00-overview.md)

## 📚 Workshop

| Part | Title | Copilot Focus |
|------|-------|---------------|
| [00](workshop/00-overview.md) | Overview | Track selection and learning goals |
| [01](workshop/01-setup.md) | Setup & Context Engineering | Instructions, permissions, and environment setup |
| [02](workshop/02-plan-and-scaffold.md) | Plan & Scaffold | Planning the API and page architecture |
| [03](workshop/03-agent-mode.md) | Build the Game | Agentic implementation and iteration |
| [04](workshop/04-design-vibes.md) | Design-First Theming | Visual design planning and implementation |
| [05](workshop/05-polish.md) | Polish & Parallel Work | Parallelism, reviews, and quality passes |
| [06](workshop/06-bonus.md) | Bonus & Extensions | Open-ended feature ideas and extra Copilot experiments |

## 🚀 Quick Start

1. Click **Use this template** to create your own repository, or fork this one.
2. Clone your repository and choose the [VS Code or CLI track](workshop/00-overview.md).
3. Follow the workshop guide and build your arena step by step.

## 🧰 What you'll need

- GitHub Copilot (Pro, Business, or Enterprise)
- Git
- Node.js
- **VS Code track:** VS Code v1.107+ with the GitHub Copilot extension signed in.
- **CLI track:** GitHub Copilot CLI (`copilot`). Node.js 22+ is needed to install it with npm; Homebrew and WinGet are also options.

## ⚙️ Under the hood

- **Framework**: [Astro](https://astro.build/) v6
- **Runtime**: Node.js with [@astrojs/node](https://docs.astro.build/en/guides/integrations-guide/node/) adapter
- **Font**: Press Start 2P (retro gaming font)
- **API**: GitHub's contribution graph API

## 🚢 Deployment notes

The current GitHub Pages workflow deploys static workshop and documentation content from `docs/` and `workshop/`. It does **not** build or deploy the Astro app in `src/`.

To deploy the Astro app to GitHub Pages, switch Astro to static output, remove the Node adapter, and update the workflow to build and upload `dist/`. For project pages, configure `site` and `base` in `astro.config.mjs`. If you need API routes in production, use a server platform such as Vercel, Netlify, or a Node host.

## 📄 License

MIT
