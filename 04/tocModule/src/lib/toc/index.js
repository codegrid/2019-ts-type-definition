const getFirstHeading = require('./lib/getFirstHeading');
const getHeadings = require('./lib/getHeadings');
const assignTocIds = require('./lib/assignTocIds');
const extractTocList = require('./lib/extractTocList');
const makeTocHtml = require('./lib/makeTocHtml');

const getTocList = (context) => {
  const firstHeading = getFirstHeading(context);
  const headings = getHeadings(firstHeading);
  assignTocIds(headings);
  return extractTocList(headings);
};

const getTocHtml = (context) => {
  const tocList = getTocList(context);
  return makeTocHtml(tocList);
};

const Toc = {
  getTocList,
  getTocHtml,
};

module.exports = Toc;
