const { demoFunction } = require('demo-1.js');
const fetch = require('fetch');
const { of, from } = require('rxjs');


of([1, 2, 3, 4]);
// returns an Observable<number[]>
// this observable emits: [1, 2, 3, 4]

from([1, 2, 3, 4]);
// returns an Observable<number>
// this observable emits:
// 1
// 2
// 3
// 4

of(fetch("https://url.here"))
// returns an Observable<Promise<T>>
// emits: Promise<T>

from(fetch('https://url.here'))
// returns an Observable T (T = the T in Promise<T>)
// emits: whatever the promise was going to emit.