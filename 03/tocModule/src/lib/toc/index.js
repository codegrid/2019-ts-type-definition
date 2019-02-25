import {
  getFirstHeading
} from './lib/getFirstHeading';
import {
  getHeadings
} from './lib/getHeadings';
import {
  assignTocIds
} from './lib/assignTocIds';
import {
  extractTocList
} from './lib/extractTocList';
import {
  makeTocHtml
} from './lib/makeTocHtml';

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

export default Toc;
