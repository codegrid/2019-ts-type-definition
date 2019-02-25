declare global {
  interface Window {
    getPageInfo: (opt?: PageInfo.Options) => PageInfo.Info;
  }
}

export declare namespace PageInfo {
  interface Options {
    title?: boolean;
    url?: boolean;
  }
  interface Info {
    title?: string;
    url?: string;
  }
}
