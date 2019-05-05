import { TocList } from '../index';

export const extractTocList = (headings: HTMLHeadingElement[]): TocList => {
  return headings.map(heading => {
    const id = heading.getAttribute('id') || '';
    const title = heading.textContent || '';
    const level = Number(heading.tagName.replace(/H(.+)/, '$1'));
    return { id, title, level };
  });
};
