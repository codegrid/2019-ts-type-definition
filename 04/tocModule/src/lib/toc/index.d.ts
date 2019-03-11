declare namespace toc {
  interface TocItem {
    id: string;
    title: string;
    level: number;
  }
  type TocList = TocItem[];
}

interface Toc {
  getTocList: (context: HTMLElement) => toc.TocList,
  getTocHtml: (context: HTMLElement) => string,
}

declare const toc: Toc;
export = toc;

/**
 * 以下のようにも書ける
 */
// declare namespace toc {
//   interface TocItem {
//     id: string;
//     title: string;
//     level: number;
//   }
//   type TocList = TocItem[];
//   const getTocList: (context: HTMLElement) => TocList;
//   const getTocHtml: (context: HTMLElement) => string;
// }
// export = toc;
