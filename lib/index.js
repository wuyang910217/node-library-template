import { isDev } from './config';
import * as Demo from './demo';

if (isDev) {
  require('dotenv').config();
  Demo.demo1();
  Demo.demo2();
}

export { Demo };
