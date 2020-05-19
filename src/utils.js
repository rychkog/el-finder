const { JSDOM } = require('jsdom');
const fs = require('fs');
const path = require('path');

function loadXml(path) {
  return new JSDOM(fs.readFileSync(path), {
    includeNodeLocations: true,
  });
}

function fullPath(fileName) {
  return path.join(process.cwd(), fileName);
}

module.exports = {
  loadXml,
  fullPath,
};
