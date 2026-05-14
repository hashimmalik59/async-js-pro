// Likho:
// 1. Promise banao
// 2. 2 seconds mein "Hello" resolve karo
// 3. .then() se "Message: Hello" print karo

// Expected output:
// [2 second wait]
// Message: Hello

// Tu likho code

// const a = new Promise((res, rej) => {
//   setTimeout(() => res("Hello"), 2000);
// });

// a.then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("DONE"));

// Likho:
// 1. Promise banao
// 2. Random number 1-100 generate karo
// 3. Agar >= 50 → resolve("WIN {number}")
// 4. Agar < 50 → reject("LOSE {number}")
// 5. .then() se resolve handle karo
// 6. .catch() se reject handle karo
// 7. .finally() se "Game Over" print karo

// Expected output (example):
// WIN 75
// Game Over
// OR
// LOSE 23
// Game Over

// Tu likho code

// const b = new Promise((res, rej) => {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (num >= 50) setTimeout(() => res(`WIN: ${num}`), 1000);
//   else setTimeout(() => rej(`LOSE: ${num}`), 1000);
// });

// b.then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("DONE"));

// Task 3: API se user data fetch karo

// Likho:
// 1. fetch() use kar: https://jsonplaceholder.typicode.com/users/1
// 2. res.ok check kar (error handling likho)
// 3. res.json() convert kar
// 4. .then() se "User: {name}" print karo
// 5. .catch() se error handle karo
// 6. .finally() se "Request completed" print karo

// Dono URLs test kar:
// https://jsonplaceholder.typicode.com/users/1 (valid)
// https://jsonplaceholder.typicode.com/users/999999 (invalid)

// Tu likho code (dono URLs ke liye)

// Invalid URL
// fetch("https://jsonplaceholder.typicode.com/users/999999")
// Valid URL
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Status is false ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(`User name: ${data.name}`);
//   })
//   .catch((error) => console.error(`Error: ${error.message}`))
//   .finally(() => console.log("Request Fetched"));

// Pehle wala code (Promise):
// const a = new Promise((res, rej) => {
//   setTimeout(() => res("Hello"), 2000);
// });

// a.then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("DONE"));

// Tu likho Async/Await version
// Hint:
// async function() {
//   try {
//     const data = await promise;
//     console.log(data);
//   } catch(error) {
//     console.error(error);
//   } finally {
//     console.log("DONE");
//   }
// }

// async function c() {
//   try {
//     const data = await a;
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   } finally {
//     console.log("DONE");
//   }
// }
// c();

// 1. Promise define karo (2 second resolve)
// 2. Async function banao
// 3. await use kar
// 4. try-catch-finally likho
// 5. Function call karo

// Tu likho complete code + output dikhao

// const x = new Promise((res, rej) => {
//   setTimeout(() => res("Resolved"), 2000);
// });

// async function y() {
//   try {
//     const data = await x;
//     console.log(data);
//   } catch (error) {
//     console.error(`ERROR: ${error}`);
//   } finally {
//     console.log("DONE");
//   }
// }
// y();

// Pehle wale code (Promise):
// const b = new Promise((res, rej) => {
//   const num = Math.floor(Math.random() * 100) + 1;
//   if (num >= 50) setTimeout(() => res(`WIN: ${num}`), 1000);
//   else setTimeout(() => rej(`LOSE: ${num}`), 1000);
// });

// b.then((data) => console.log(data))
//   .catch((error) => console.error(error))
//   .finally(() => console.log("DONE"));

// Tu likho Async/Await version
// 1. Promise define karo (same logic)
// 2. Async function banao
// 3. await + try-catch-finally likho
// 4. Function call karo

// Tu likho code + output (2-3 baar run kar)

// async function x() {
//   try {
//     const data = await b;
//     console.log(data);
//   } catch (error) {
//     console.error(`ERROR: ${error}`);
//   } finally {
//     console.log("DONE");
//   }
// }
// x();

// Pehle wala code (Promise):
// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`Status is false ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(`User name: ${data.name}`);
//   })
//   .catch((error) => console.error(`Error: ${error.message}`))
//   .finally(() => console.log("Request Fetched"));

// Tu likho Async/Await version
// 1. async function banao
// 2. fetch + await likho
// 3. res.ok check karo (throw error)
// 4. res.json() + await likho
// 5. try-catch-finally likho
// 6. Function call karo

// Dono URLs test kar:
// https://jsonplaceholder.typicode.com/users/1 (valid)
// https://jsonplaceholder.typicode.com/users/999999 (invalid)

// Tu likho code + output (dono URLs)

// async function y() {
//   try {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     if (!res.ok) {
//       throw new Error(`Status is false: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log(data);
//     console.log(`User name: ${data.name}`);
//   } catch (error) {
//     console.error(`ERROR: ${error}`);
//   } finally {
//     console.log("DONE");
//   }
// }
// y();

// Promise define karo
// const promise = new Promise((res) => {
//   setTimeout(() => res("AWAITED!"), 3000);
// });

// // Function 1: Bina await (galat)
// async function withoutAwait() {
//   const data = promise; // ❌
//   console.log(data);
// }

// // Function 2: Await ke saath (sahi)
// async function withAwait() {
//   const data = await promise; // ✅
//   console.log(data);
// }

// console.log("Test 1 (without await):");
// withoutAwait();

// console.log("\nTest 2 (with await):");
// withAwait();

// Task:
// 1. Promise banao jo 1 second mein "SUCCESS" resolve kare
// 2. Async function banao
// 3. await use kar data ko capture karo
// 4. console.log se print karo

// Expected output:
// [1 second wait]
// SUCCESS

// Tu likho code

// const abc = new Promise((res, rej) => {
//   setTimeout(() => res("SUCCESS"), 1000);
// });

// async function xyz() {
//   try {
//     const data = await abc;
//     console.log(data);
//   } catch (error) {
//     console.error(`ERROR: ${error}`);
//   } finally {
//     console.log("DONE");
//   }
// }
// xyz();

// Task:
// 1. Promise banao jo 50% success, 50% error
// 2. Random number generate karo
// 3. Agar >= 50 → resolve("WIN {number}")
// 4. Agar < 50 → reject("LOSE {number}")
// 5. Async function mein await likho
// 6. try-catch-finally likho

// Expected output:
// WIN 75
// DONE
// OR
// LOSE 34
// DONE

// Tu likho code

// const num = new Promise((res, rej) => {
//   const randNum = Math.floor(Math.random() * 100) + 1;
//   if (randNum >= 50) setTimeout(() => res(`WIN: ${randNum}`), 2000);
//   else setTimeout(() => rej(`LOSE: ${randNum}`), 2000);
// });

// async function generateNum() {
//   try {
//     const data = await num;
//     console.log(data);
//   } catch (error) {
//     console.error(`ERROR: ${error}`);
//   } finally {
//     console.log("DONE");
//   }
// }
// generateNum();

// Async function
// await fetch() likho
// res.ok check
// await res.json()
// User name print
// try-catch-finally

// Dono URLs test kar:
// https://jsonplaceholder.typicode.com/users/5
// https://jsonplaceholder.typicode.com/users/999

async function fetchAPI() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/55");
    if (!res.ok) {
      throw new Error(`Status is false ${res.status}`);
    }
    const data = await res.json();
    console.log(data);
    console.log(`User name: ${data.name}`);
  } catch (error) {
    console.error(`ERROR: ${error}`);
  } finally {
    console.log("Request Fetched");
  }
}
fetchAPI();

// app.js:317
//  GET https://jsonplaceholder.typicode.com/users/55 404 (Not Found)
// app.js:319
// {}
// app.js:320 User name: undefined
// app.js:324 Request Fetched
//
