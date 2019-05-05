export const getFirstHeading = (context: HTMLElement): HTMLHeadingElement | undefined => {
  return Array(6)
    .fill('')
    .map((_, idx) => {
      const tag = `h${idx + 1}`;
      const target = context.querySelector(tag) as HTMLHeadingElement;
      return target || undefined;
    })
    .find(item => item !== undefined);
};
