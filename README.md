# Gridfinity Yo' Drawers!

*Fix yo' drawer, Fix yo' life*

A browser-based tool for planning Gridfinity drawer layouts. Enter your drawer dimensions, see how many grid units fit, get baseplate recommendations based on your printer, and visually arrange bins before you print.

## Features

- **Plan Your Base** — Enter drawer dimensions (mm or inches), select your printer, and see:
  - How many grid units fit
  - Gap/fit quality analysis
  - Baseplate size recommendations sorted by fewest prints needed
  - Visual preview of baseplate layout

- **Layout Your Bins** — Arrange bins on your grid:
  - Common bin sizes (1×1 to 5×5)
  - Custom bin sizes
  - Save/load layouts
  - Print a bin shopping list

- **About Gridfinity** — Quick intro to the system with links to get started

## Usage

Just open `visualizer.html` in a browser. No server or build step required.

Or serve it locally:
```bash
python3 -m http.server 8000
# then open http://localhost:8000/visualizer.html
```

## What is Gridfinity?

Gridfinity is an open-source modular storage system created by [Zack Freedman](https://github.com/zackfreedman) in 2022. Everything is based on a 42mm grid unit—any bin from any designer works with any baseplate.

- [Original GitHub repo](https://github.com/zackfreedman/gridfinity)
- [Zack's introduction video](https://youtu.be/ra_9zU-mnl8)

## License

[PolyForm Noncommercial 1.0.0](LICENSE) — Free for personal, educational, and non-commercial use.

## Credits

Built with [Claude Code](https://claude.ai/code)
