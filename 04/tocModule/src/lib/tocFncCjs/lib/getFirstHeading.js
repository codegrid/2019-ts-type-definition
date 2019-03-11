const getFirstHeading = context => {
  return Array(6)
    .fill('')
    .map((_, idx) => {
      const tag = `h${idx + 1}`;
      return context.querySelector(tag);
    })
    .find(item => !!item);
};
module.exports = getFirstHeading;
