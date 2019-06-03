import { isDev } from './config';
import * as Demo from './demo';

if (isDev) {
  require('dotenv').config();
  Demo.sleep();
  Demo.demo();
  Demo.sum(1, 2, 3, 4, 5);
  const demo = new Demo.DemoClass('wuyang');
  demo.hello();
}

export { Demo };
