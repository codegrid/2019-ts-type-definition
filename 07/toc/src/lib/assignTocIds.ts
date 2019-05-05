export const assignTocIds = (headings: HTMLHeadingElement[]) => {
  return headings.map((heading, idx) => {
    if (!heading.getAttribute('id')) {
      heading.setAttribute('id', `toc-${idx}`);
    }
  });
};
