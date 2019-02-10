const opt: PageInfo.Options = {
  title: true
};
const info: PageInfo.Info = window.getPageInfo(opt);

const el = document.querySelector('[data-js-result]') as HTMLDivElement;
el.textContent = JSON.stringify(info, null, 2);
