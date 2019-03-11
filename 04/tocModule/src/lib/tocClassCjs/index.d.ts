declare namespace Toc {
  interface TocItem {
    id: string;
    title: string;
    level: number;
  }
  type TocList = TocItem[];
}
declare class Toc {
  getTocList(context: HTMLElement): Toc.TocList
  getTocHtml(context: HTMLElement): string
}
export = Toc;
