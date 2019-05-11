import { isDev } from './config';
import * as Demo from './demo';

if (isDev) {
  require('dotenv').config();
  Demo.sleep();
  Demo.demo();
}

export { Demo };
