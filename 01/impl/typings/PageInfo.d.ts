declare const getPageInfo: (opt?: PageInfoOptions) => PageInfo;

interface PageInfoOptions {
  title?: boolean;
  url?: boolean;
}

interface PageInfo {
  title?: string;
  url?: string;
}
