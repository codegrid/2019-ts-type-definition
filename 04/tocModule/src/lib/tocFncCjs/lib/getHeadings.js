const getHeadings = (el, _buf) => {
  const buf = _buf || [el];
  const {
    nextSibling
  } = el;
  if (!nextSibling) {
    return buf;
  }
  if (/^H[1-6]$/.test(nextSibling.nodeName)) {
    return getHeadings(nextSibling, [...buf, nextSibling]);
  }
  return getHeadings(nextSibling, buf);
};
module.exports = getHeadings;
