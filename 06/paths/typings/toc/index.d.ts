interface TocItem {
  id: string;
  title: string;
  level: number;
}
export type TocList = TocItem[];

export interface Toc {
  // メソッド名を正しく修正
  getTocList: (context: HTMLElement) => TocList,
  getTocHtml: (context: HTMLElement) => string,
}

declare const toc: Toc;
export default toc;
