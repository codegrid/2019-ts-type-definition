const getFirstHeading = require('./lib/getFirstHeading');
const getHeadings = require('./lib/getHeadings');
const assignTocIds = require('./lib/assignTocIds');
const extractTocList = require('./lib/extractTocList');
const makeTocHtml = require('./lib/makeTocHtml');

class Toc {
  getTocList(context) {
    const firstHeading = getFirstHeading(context);
    const headings = getHeadings(firstHeading);
    assignTocIds(headings);
    return extractTocList(headings);
  }
  getTocHtml(context) {
    const tocList = this.getTocList(context);
    return makeTocHtml(tocList);
  }
}
module.exports = Toc;
