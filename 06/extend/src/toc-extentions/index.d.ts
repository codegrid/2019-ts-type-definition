import { Toc } from "2019-ts-type-definition-lib/toc";

declare module "2019-ts-type-definition-lib/toc" {
  interface Toc {
    draw: (selector: {context: string, target: string}) => void
  }
}
export declare const addDrawMethod: (toc: Toc) => void
