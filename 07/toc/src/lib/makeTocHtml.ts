import { TocList } from '../index';

export const makeTocHtml = (tocList: TocList): string => {
  const list = tocList.map(item => {
    const { id, title, level } = item;
    return `<li class="toc-${level}"><a href="#${id}">${title}</a></li>`;
  });
  return `<ul>${list.join('')}</ul>`;
};
