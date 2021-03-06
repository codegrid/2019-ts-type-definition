/**
 * CommonJS
 */
// CommonJS object
import toc = require('./lib/toc');
type TocList = toc.TocList;

// CommonJS class
// import Toc = require('./lib/tocClassCjs');
// type TocList = Toc.TocList;
// const toc = new Toc();

// CommonJS function
// import getToc = require('./lib/tocFncCjs');
// type TocList = getToc.TocList;
// const toc = getToc();

const target = document.querySelector('article');
if (target) {
  showTocList(toc.getTocList(target));

  const tocHtml: string = toc.getTocHtml(target);
  showTocMarkup(tocHtml);
  drawToc(tocHtml);
}

function showTocList(tocList: TocList) {
  const result1 = document.querySelector('[data-js-result-1]') as HTMLDivElement;
  result1.textContent = JSON.stringify(tocList, null, 2);
}

function showTocMarkup(markup: string){
  const result2 = document.querySelector('[data-js-result-2]') as HTMLDivElement;
  result2.textContent = markup;
}

function drawToc(markup: string){
  const tocArea = document.querySelector('[data-js-toc]') as HTMLElement;
  tocArea.innerHTML = markup;
}
