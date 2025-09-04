# 📦 RFDSort

![](https://raw.githubusercontent.com/michaelsboost/RFDSort/main/imgs/screenshot.png)

## 🌟 Overview
**RFDSort** is a **quick visual lookup tool** for the **UPS Rockford Air Hub (6119N)**. It helps reduce missorts by letting you **tap a state or a belt** to instantly see **chutes, ZIP ranges, destinations (slick), pull times, and wave**—with a **shift selector** for **Sunrise / Day / Twilight / Night** and a built-in **menu dialog** for About/License/Version.

[![MIT License](https://img.shields.io/github/license/michaelsboost/RFDSort)](LICENSE) [![GitHub Stars](https://img.shields.io/github/stars/michaelsboost/RFDSort)](https://github.com/michaelsboost/RFDSort/stargazers) [![GitHub Issues](https://img.shields.io/github/issues/michaelsboost/RFDSort)](https://github.com/michaelsboost/RFDSort/issues) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/michaelsboost/RFDSort/pulls)

> 🛠️ **Built with kodeWeave**
>
> Developed using **[kodeWeave](https://michaelsboost.com/kodeweave)** and powered by **Pico.css** + **TailwindCSS** + **Alpine.js**.

---

## 🚀 Launch
If hosted, access here: **https://michaelsboost.com/RFDSort/**  
(Or open `index.html` locally—see **Getting Started**.)

---

## ⚠️ Safety & Affiliation
- **Not affiliated with or endorsed by UPS.**
- **Do not use while driving or operating equipment.** Use only when **stationary** and safe.
- Intended for **personal reference and training**.

---

## 🛠️ Key Features

### 🔎 Two-way Lookup
- **State → Belts:** Pick a state and see all matching **chutes, ZIP ranges, destination (slick), pull, wave**.
- **Belt → States:** Tap a belt in the sidebar to see all **states** feeding it.

### ⏱️ Shift / Sort Switching
- **Sunrise / Day / Twilight / Night** selector.
- Loads **rules** based on selected shift.
- Night rules preloaded; others are easy to extend.

### 🧭 Clean UI for the Floor
- **Large tap targets** and **compact cards** for quick scanning.
- **Left belt rail** with clear color coding and highlight ring for context.
- **Menu dialog** with About, Version, and License.

### 🌓 Theme Toggle
- **Light/Dark/Auto** theme via `<html data-theme="…">`.
- **Auto** follows system preference; choice saved in `localStorage`.

### 📦 Simple Data Model
- Rules live in `rulesByShift`:
  ```js
  rulesByShift = {
    sunrise: [ /* { state, zips, chute, dest, pull, wave } */ ],
    day:     [ /* ... */ ],
    twilight:[ /* ... */ ],
    night:   [ /* current rules */ ]
  }
  ```
- `chute` accepts a **string or array** (for multi-chute rules).

---

## ⚡ Getting Started

### **1️⃣ Install & Run Locally**
```sh
# Clone the repository
git clone https://github.com/michaelsboost/RFDSort.git
cd RFDSort

# Install dependencies
npm install

# Build CSS bundle
npm run build

# Start local server
npm run serve
```

### **2️⃣ Dependencies**
- Alpine.js (lightweight reactive framework)
- TailwindCSS (utility-first CSS framework)
- PostCSS + plugins (autoprefixer, cssnano, imports)
- Rollup (bundler)
- http-server (for local dev testing)

---

## 🧩 Configuration

### App Identity
- Name/version/logo shown in the About dialog:
  ```js
  name: 'RFDSort',
  version: 'v0.0.1',
  logo: 'data:image/svg+xml;base64,...'
  ```

### Theme
- Stored as `theme` (`'light' | 'dark' | 'auto'`) in `localStorage`.
- Applied to `<html data-theme="...">`.

### Adding/Editing Rules
- Extend any shift in `rulesByShift`:
  ```js
  { 
    state: 'CA',
    zips: ['900-928'],
    chute: ['Blue Blue', 'White Brown'], // or 'Blue Blue'
    dest: 'ONT',
    pull: '201/221',
    wave: '1st'
  }
  ```

---

## 🤝 Contributing
1. Fork the repo  
2. Create a feature branch: `git checkout -b feature/add-sunrise-rules`  
3. Commit your changes: `git commit -m "Add Sunrise shift rules"`  
4. Push the branch: `git push origin feature/add-sunrise-rules`  
5. Open a Pull Request 🎉

---

## 📜 License
Licensed under the **MIT License**. See [LICENSE](LICENSE).

**Author:** [Michael Schwartz](https://michaelsboost.com/)

---

## ☕ Support
If RFDSort helps your workflow, consider supporting:

- 🎨 Graphic Design Course: https://michaelsboost.com/graphicdesign  
- 🛒 Store: https://michaelsboost.com/store  
- ☕ Buy me a coffee: http://ko-fi.com/michaelsboost  
- 👕 T-Shirts: https://michaelsboost.com/gear  
- 🖼️ Art Prints: https://deviantart.com/michaelsboost/prints  
- 💰 PayPal: https://michaelsboost.com/donate  
- 💵 Cash App: https://cash.me/$michaelsboost
