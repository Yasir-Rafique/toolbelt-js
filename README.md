# toolbelt-js 🛠️

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Tests](https://img.shields.io/badge/tests-passing-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/lang-TypeScript-blue)]()

A modern, lightweight collection of essential JavaScript utility functions—ready to power up any project. Written in TypeScript, fully tested, and easy to use.

---

## ✨ Features

- 12+ everyday-useful JS utilities
- Clean, modern TypeScript source
- Fully tested (Jest)
- Zero dependencies
- Works in Node.js and browsers

---

## 🚀 Installation

```bash
npm install toolbelt-js
```

## ⚡ Usage

```bash 

import {
  deepClone,
  debounce,
  throttle,
  isEmpty,
  capitalize,
  randomInt,
  formatDate,
  uniqueArray,
  flattenArray,
  chunkArray,
  sleep,
  clamp
} from "toolbelt-js";

// Example:
const arr = [1, 2, 2, 3, 4];
const unique = uniqueArray(arr); // [1, 2, 3, 4]

await sleep(1000); // Pauses for 1 second
console.log(capitalize('hello world')); // "Hello world"
```
- All utilities are tree-shakeable: Only import what you use!
- Works in Node.js, browser (with bundler), and any modern JS runtime.
- No setup required—just import and go.


## 🧰 Utilities

| Utility        | Description                              | Example                                   |
| -------------- | ---------------------------------------- | ----------------------------------------- |
| deepClone      | Deep-copies objects/arrays               | `deepClone({ a: 1 })`                     |
| debounce       | Debounced function (delays execution)    | `debounce(fn, 300)`                       |
| throttle       | Throttled function (rate-limits calls)   | `throttle(fn, 1000)`                      |
| isEmpty        | Checks if a value is empty               | `isEmpty([])`                             |
| capitalize     | Capitalizes first letter of string       | `capitalize('hello')`                     |
| randomInt      | Random int between min & max (inclusive) | `randomInt(1, 10)`                        |
| formatDate     | Formats a Date as string                 | `formatDate(new Date(), "YYYY-MM-DD")`    |
| uniqueArray    | Removes duplicates from array            | `uniqueArray([1, 1, 2])`                  |
| flattenArray   | Flattens deeply nested arrays            | `flattenArray([1, [2, 3]])`               |
| chunkArray     | Splits array into chunks                 | `chunkArray([1,2,3,4], 2)`                |
| sleep          | Async delay for X ms                     | `await sleep(1000)`                       |
| clamp          | Restricts number within range            | `clamp(42, 0, 10)`                        |


## 📖 API Reference

See the source code for inline documentation on each function.

## 🤝 Contributing

Contributions and suggestions are welcome!
Feel free to open issues or pull requests.

1. Fork the repo
2. Create your branch: git checkout -b feature/my-feature
3. Commit your changes: git commit -am 'Add new utility'
4. Push to the branch: git push origin feature/my-feature
5. Open a pull request


## 📄 License

MIT

Made with ❤️ by [Muhammad Yasir Rafique](https://github.com/Yasir-Rafique)



