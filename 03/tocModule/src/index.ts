import toc, { TocList } from './lib/toc';

const target = document.querySelector('article');
if (target) {
  const tocList: TocList = toc.getTocList(target);
  const result1 = document.querySelector('[data-js-result-1]') as HTMLDivElement;
  result1.textContent = JSON.stringify(tocList, null, 2);

  const tocHtml: string = toc.getTocHtml(target);
  const result2 = document.querySelector('[data-js-result-2]') as HTMLDivElement;
  result2.textContent = tocHtml;

  const tocArea = document.querySelector('[data-js-toc]') as HTMLElement;
  tocArea.innerHTML = tocHtml;
}
