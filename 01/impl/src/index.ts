const opt: PageInfoOptions = {
  title: true
};

const info: PageInfo = getPageInfo(opt);

const el = document.querySelector('[data-js-result]') as HTMLDivElement;
el.textContent = JSON.stringify(info, null, 2);
