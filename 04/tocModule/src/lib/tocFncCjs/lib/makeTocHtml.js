const makeTocHtml = tocList => {
  const list = tocList.map(item => {
    const { id, title, level } = item;
    return `<li class="toc-${level}"><a href="#${id}">${title}</a></li>`;
  });
  return `<ul>${list.join('')}</ul>`;
};
module.exports = makeTocHtml;
