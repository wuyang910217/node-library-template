import Debug from 'debug';
const debug = Debug('wuyang-demo');

function sleepWrap(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      debug('sleep 5 seconds called---');
      resolve();
    }, time * 1000);
  });
}

export async function sleep() {
  await sleepWrap(5);
}

export function demo() {
  debug('demo called---');
}

export function sum(...num) {
  let res = 0;
  num.map(item => {
    res += item;
  });
  debug('res-----', res);
}

export class DemoClass {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log('hello ', this.name, 'from demo class');
  }
}
