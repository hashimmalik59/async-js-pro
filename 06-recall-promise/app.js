// Task:
// 1. Promise banao jo 2 seconds mein "Hello" resolve kare
// 2. .then() se print karo: "Message: Hello"

// Expected output:
// [2 seconds wait]
// Message: Hello

// Tu likho code

// const greeting = new Promise((res, rej) => {
//   console.log("WAIT");
//   setTimeout(() => res("Hello"), 2000);
//   //   rej("User not found");
// });

// greeting
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error))
//   .finally(console.log("DONE"));

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data);
//     console.log(`User name: ${data.name}`);
//   })
//   .catch((error) => console.error(error))
//   .finally(console.log("DONE"));

/////////////////////////////

// Task: Error scenario handle karo

// 1. Wrong URL use kar: https://jsonplaceholder.typicode.com/users/999999
// 2. Dekh kya hota hai (error aayega ya data aayega)
// 3. Output dikhao

// Likho code + output

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((res) => {
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error("ERROR", error))
//   .finally(console.log("DONE"));

////////////////////////////

// Task:
// 1. Promise banao jo random number generate kare (0-100)
// 2. Agar number 50 se zyada ho → resolve("Win!")
// 3. Agar 50 se kam ho → reject("Lose!")
// 4. .then() se success handle karo
// 5. .catch() se error handle karo
// 6. .finally() se "Game over" print karo

// Expected output (random):
// Win! aur Game over
// OR
// Lose! aur Game over

// Tu likho code

// const generateNum = new Promise((res, rej) => {
//   console.log("START");
//   const randomNum = Math.floor(Math.random() * 100) + 1;
//   if (randomNum >= 50) res(`WIN ${randomNum}`);
//   else rej(`LOSE ${randomNum}`);
// });

// generateNum
//   .then((win) => console.log(win))
//   .catch((lose) => console.log(lose))
//   .finally(console.log("DONE"));

//////////////////////

// Task: API se user data fetch karo + error handling

// 1. fetch() use kar: https://jsonplaceholder.typicode.com/users/5
// 2. res.ok check kar (error handling)
// 3. .then() se user ka name print karo: "User: {name}"
// 4. .catch() se error print karo
// 5. .finally() se "Request completed" print karo

// Expected output:
// User: Alyson Renner
// Request completed

// Tu likho code

fetch("https://jsonplaceholder.typicode.com/users/5")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`HTTP request is failed due to ${res.status}`);
    }
    return res.json();
  })
  .then((data) => {
    console.log(data);
    console.log(`User name: ${data.name}`);
  })
  .catch((error) => console.error(`ERROR => ${error}`))
  .finally(console.log("Request completed"));
