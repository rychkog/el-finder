const { loadXml } = require('./utils');
const { match } = require('./matcher');
const Page = require('./page');
const Element = require('./element');

function main() {
  const [
    originPath,
    samplePath,
    originId = 'make-everything-ok-button',
  ] = process.argv.slice(2);

  const originPage = new Page(loadXml(originPath));
  const originElement = new Element(originPage.byId(originId));

  const samplePage = new Page(loadXml(samplePath));
  const similarElements = Element.fromArray(samplePage.$$(originElement.tag));

  const { matched } = match(originElement, similarElements);
  console.log(matched ? matched.location() : 'No match found');
}

main();
