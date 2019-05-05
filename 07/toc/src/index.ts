import { getFirstHeading } from './lib/getFirstHeading';
import { getHeadings } from './lib/getHeadings';
import { assignTocIds } from './lib/assignTocIds';
import { extractTocList } from './lib/extractTocList';
import { makeTocHtml } from './lib/makeTocHtml';

export interface TocItem {
  id: string;
  title: string;
  level: number;
}

export type TocList = TocItem[]

export const getTocList = (context: HTMLElement): TocList => {
  const firstHeading = getFirstHeading(context);
  if (!firstHeading) {
    return [];
  }
  const headings = getHeadings(firstHeading);
  assignTocIds(headings);
  return extractTocList(headings);
};

export const getTocHtml = (context: HTMLElement): string => {
  const tocList = getTocList(context);
  return makeTocHtml(tocList);
};

export default {
  getTocList,
  getTocHtml
}
