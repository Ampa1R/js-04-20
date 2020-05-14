// Promises with async/await

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('foo');
//         // reject('something bad');
//     }, 1000);
// });

// async function f() {
//     let res = await promise;
//     console.log(res);
// }

// f();

// promise
//     .then((data) => {
//         console.log('Promise fulfilled. Result: ', data);
//     })
//     .catch((err) => {
//         console.log('Promise rejected. Error:', err);
//     });

// IIFE
// (async () => {
//     try {
//         const data = await promise;
//         const anotherData = await anotherPromise;
//         console.log('Promise fulfilled. Result: ', data);
//         // throw new Error('some error');
//     } catch (err) {
//         console.log('Promise rejected. Error:', err);
//     }
// })();


// Promise.all

// let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve(1);
//         reject('something bad 1');
//     }, 2000);
// });

// let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(2);
//         // reject('something bad 2');
//     }, 100);
// });

// (async () => {
//     try {
//         const [promise1Result, promise2Result] = await Promise.all([
//             promise1,
//             promise2,
//         ]);
//         console.log(promise1Result);
//         console.log(promise2Result);
//     } catch (err) {
//         console.log(err);
//     } finally {
//         console.log('finally');
//     }
// })();


// AJAX with fetch

// const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// const sendRequest = async (url) => {
//     const res = await fetch(url, {
//         method: 'POST',
//     });
//     return res.json();
// }

// sendRequest(`${API}/catalogData.json?page=1&sort=price`)
//     .then(data => {
//         console.log('sendRequest result:');
//         console.log(data);
//     }).catch(err => {
//         console.log('sendRequest error status:', err);
//     });

// reg exp

const r2 = /foo$/;
r2.test('foo'); // true
r2.test('zxcascfoo'); // true
r2.test('zxcasc foo zxc'); // false
RegExp('zxc$').test('zxcasc foo zxc'); // true

'fo2fo2fo2'.match(/fo(1|2)/); // ["fo2"]
'fo2fo2fo2'.match(/fo(1|2)/g) // ["fo2", "fo2", "fo2"]
'Fo2'.match(/fo(1|2)/i); // 'Fo2'
'fo2'.match(/fo(1|2)/); // null

'fo1'.match(/fo(1|2)/); // 1 OR 2
'fo2'.match(/fo(1|2)/g);
'fo3'.match(/fo(1|2)/g); // null

'foo'.match(/fo+/g)// ["foo"]
'foooooo'.match(/fo+/g); // ["foooooo"]
'foo abcdef abcdefgh'.match(/a.+d/g) // ["abcdef abcd"]
'foo abcdef abcdefgh'.match(/a.+?d/g) // ["abcd", "abcd"]

'abcdefgh abcdefghi'.replace(/a.+?f/ig, '0') // "0gh 0ghi"
'abcdefgh abcdefghi'.replace(/a.+?f/ig, '!$&!') // "!abcdef!gh !abcdef!ghi"
