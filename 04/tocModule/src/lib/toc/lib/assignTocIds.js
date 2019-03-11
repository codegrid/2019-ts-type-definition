const assignTocIds = (headings) => {
  return headings.map((heading, idx) => {
    if (!heading.getAttribute('id')) {
      heading.setAttribute('id', `toc-${idx}`);
    }
  });
};
module.exports = assignTocIds;
