const NODE_TYPE = 1;

module.exports = class Element {
  constructor(el) {
    this.el = el;
  }

  get className() {
    return normalizeText(this.el.className);
  }

  get text() {
    return normalizeText(this.el.textContent);
  }

  get tag() {
    return normalizeText(this.el.tagName);
  }

  get isHidden() {
    return this.el.style.display === 'none';
  }

  get title() {
    return normalizeText(this.el.title);
  }

  get href() {
    return normalizeText(this.el.href);
  }

  location(sep = ' > ') {
    let current = this.el;
    let path = [];
    while (current.nodeType === NODE_TYPE) {
      let selector = current.tagName.toLowerCase();
      if (current.id) {
        selector += `#${current.id}`;
      } else if (current.className) {
        selector += `.${current.className.split(' ').join('.')}`;
      }

      path.push(selector);
      current = current.parentNode;
    }

    return path.reverse().join(sep);
  }

  static fromArray(els) {
    return els.map((e) => new Element(e));
  }
};

function normalizeText(val) {
  return val.trim().toLowerCase();
}
