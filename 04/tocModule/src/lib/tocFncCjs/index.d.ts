declare namespace getToc {
  interface TocItem {
    id: string;
    title: string;
    level: number;
  }
  type TocList = TocItem[];
}
interface Toc {
  getTocList: (context: HTMLElement) => getToc.TocList,
  getTocHtml: (context: HTMLElement) => string,
}
declare const getToc: () => Toc;
export = getToc;
