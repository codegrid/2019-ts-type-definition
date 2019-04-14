export const addDrawMethod = toc => {
  Object.assign(toc, {
    draw: selector => {
      const context = document.querySelector(selector.context);
      const target = document.querySelector(selector.target);
      if (context && target) {
        const html = toc.getTocHtml(context);
        target.innerHTML = html;
      }
    }
  });
};
