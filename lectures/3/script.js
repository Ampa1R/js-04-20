// Callback

// let a = 0;

// const increment = (x, callback) => {
//     setTimeout(() => {
//         a += x;
//         // console.log(a);
//         callback(a);
//     }, 1000);
// }

// const processResult = (result, callback) => {
//     setTimeout(() => {
//         callback([result]);
//     }, 1000);
// };

// const logResult = (r) => {
//     console.log('Result', r);
// }

// increment(10, (data) => {
//     console.log('increment callback', data);
//     processResult(data, (anotherData) => {
//         console.log('processResult callback', anotherData);
//         logResult(anotherData);
//     });
// });

// console.log('init', a);


// Promises

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve('foo');
//         reject('something bad');
//     }, 1000);
// });

// promise
//     .then((data) => {
//         console.log('Promise fulfilled. Result: ', data);
//     })
//     .catch((err) => {
//         console.log('Promise rejected. Error:', err);
//     });


// let a = 0;

// const increment = (x) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             a += x;
//             resolve(a);
//         }, 1000);
//     });
// }

// const processResult = (result) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject([result]);
//         }, 1000);
//     });
// };

// const logResult = (r) => {
//     console.log('Result', r);
// }


// increment(10)
//     .then(data => {
//         console.log('increment promise resolve', data);
//         return processResult(data);
//     })
//     .then(data => {
//         console.log('processResult promise resolve. Result: ', data);
//         logResult(data);
//     })
//     .catch((err) => {
//         console.log('Promise rejected. Error:', err);
//     });


// AJAX

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const sendRequest = (url) => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    // console.log('200 !==', xhr.status);
                    reject(xhr.status);
                }
            }
        }

        xhr.timeout = 15000;

        xhr.ontimeout = () => {
            console.log('timeout');
        };

        xhr.open('GET', url, true);

        // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.send();
    });
}

sendRequest(`${API}/catalogData.json?page=1&sort=price`)
    .then(data => {
        console.log('sendRequest result:');
        console.log(data);
    }).catch(err => {
        console.log('sendRequest error status:', err);
    });
