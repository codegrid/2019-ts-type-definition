declare module "2019-ts-type-definition-lib/toc-with-typo-types" {
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

  const toc: Toc;
  export default toc;
}
