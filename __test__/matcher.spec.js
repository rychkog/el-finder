const { loadXml, fullPath } = require('../src/utils');
const { match } = require('../src/matcher');
const Page = require('../src/page');
const Element = require('../src/element');

const paths = {
  sample1: fullPath('__test__/files/sample-1-evil-gemini.html'),
  sample2: fullPath('__test__/files/sample-2-container-and-clone.html'),
  sample3: fullPath('__test__/files/sample-3-the-escape.html'),
  sample4: fullPath('__test__/files/sample-4-the-mash.html'),
};

describe('Matcher', () => {
  let originPage;
  let originElement;
  beforeAll(() => {
    originPage = new Page(loadXml(__dirname + '/files/sample-0-origin.html'));
    originElement = new Element(originPage.byId('make-everything-ok-button'));
  });

  it('it should find a target in "sample-1-evil-gemini.html"', () => {
    const samplePage = new Page(loadXml(paths.sample1));
    const candidates = Element.fromArray(samplePage.$$(originElement.tag));

    const { matched } = match(originElement, candidates);

    expect(matched.location()).toBe(
      'html > body > div#wrapper > div#page-wrapper > div.row > div.col-lg-8 > div.panel.panel-default > div.panel-body > a.btn.btn-success'
    );
  });

  it('it should find a target in "sample-2-container-and-clone.html"', () => {
    const samplePage = new Page(loadXml(paths.sample2));
    const candidates = Element.fromArray(samplePage.$$(originElement.tag));

    const { matched } = match(originElement, candidates);

    expect(matched.location()).toBe(
      'html > body > div#wrapper > div#page-wrapper > div.row > div.col-lg-8 > div.panel.panel-default > div.panel-body > div.some-container > a.btn.test-link-ok'
    );
  });

  it('it should find a target in "sample-3-the-escape.html"', () => {
    const samplePage = new Page(loadXml(paths.sample3));
    const candidates = Element.fromArray(samplePage.$$(originElement.tag));

    const { matched } = match(originElement, candidates);

    expect(matched.location()).toBe(
      'html > body > div#wrapper > div#page-wrapper > div.row > div.col-lg-8 > div.panel.panel-default > div.panel-footer > a.btn.btn-success'
    );
  });

  it('it should find a target in "sample-4-the-mash"', () => {
    const samplePage = new Page(loadXml(paths.sample4));
    const candidates = Element.fromArray(samplePage.$$(originElement.tag));

    const { matched } = match(originElement, candidates);

    expect(matched.location()).toBe(
      'html > body > div#wrapper > div#page-wrapper > div.row > div.col-lg-8 > div.panel.panel-default > div.panel-footer > a.btn.btn-success'
    );
  });
});
