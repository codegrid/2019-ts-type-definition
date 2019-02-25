export interface TocItem {
  id: string;
  title: string;
  level: number;
}
export type TocList = TocItem[];

interface Toc {
  getTocList: (context: HTMLElement) => TocList,
  getTocHtml: (context: HTMLElement) => string,
}

declare const toc: Toc;
export default toc;
