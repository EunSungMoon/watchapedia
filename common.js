export { selector };

let selector = {
  el: selector => document.querySelector(selector),
  elAll: selector => document.querySelectorAll(selector),
  createDom: dom => document.createElement(dom)
}