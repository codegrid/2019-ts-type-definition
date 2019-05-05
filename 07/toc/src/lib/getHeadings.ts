export const getHeadings = (el: Node, _buf?: HTMLHeadingElement[]): HTMLHeadingElement[] => {
  const buf = _buf || [el as HTMLHeadingElement];
  const { nextSibling } = el;
  if (!nextSibling) {
    return buf;
  }
  if (/^H[1-6]$/.test(nextSibling.nodeName)) {
    return getHeadings(nextSibling, [...buf, nextSibling as HTMLHeadingElement]);
  }
  return getHeadings(nextSibling, buf);
};
