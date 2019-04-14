import toc from '2019-ts-type-definition-lib/toc';
import { addDrawMethod } from './toc-extentions';

addDrawMethod(toc);

toc.draw({
  context: 'article',
  target: '[data-js-toc]'
});
