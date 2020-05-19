module.exports = class RawPage {
  constructor(dom) {
    this.dom = dom;
  }

  byId(id) {
    const el = this.doc.getElementById(id);
    if (!el) throw new Error(`There is no element: #${id}`)
    return el
  }

  get doc() {
    return this.dom.window.document;
  }

  $(selector) {
    return this.doc.querySelector(selector);
  }

  $$(selector) {
    return [...this.doc.querySelectorAll(selector)];
  }
};
