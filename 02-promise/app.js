// fetch("https://jsonplaceholder.typicode.com/users/1") // fetch(bring) data from an internet
//   .then((response) => response.json()) // raw data => clean data
//   .then((data) => console.log(data.name)) // log data
//   .catch((error) => console.log(error)) // error if url is worng or internet is off
//   .finally((result) => console.log("Process completed...", result)); // when promise is settled(resolve or reject)

// Weather App
// const weatherReport = fetch("https://jsonplaceholder.typicode.com/posts/1");

// weatherReport
//   .then((response) => {
//     if (!response.ok) throw new Error("Mausam kharab hai");
//     return response.json();
//   })
//   .then((data) => console.log(data.title))
//   .catch((error) => console.error("Masla", error.message))
//   .finally((result) => console.log("Process Done", result.message));

// fetch("https://jsonplaceholder.typicode.com/posts/1");
// then((res) => res.json()) // Bug1: method ko call karna
//   .then((data) => {
//     console.log(data.title);
//   }) // Bug2: close parenthesis
//   .catch((err) => console.log(err.message)); // Bug3: poora object nahi chahiye sirf error message chahiye

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => {
//     if (response.status !== 200) throw new Error("Mausam khaab hai");
//     return response.json();
//   })
//   .then((data) => {
//     if (data.completed) {
//       console.log("Successfully fetched");
//     } else {
//       console.log("Wait...");
//     }
//   })
//   .catch((error) => {
//     console.log("Try Again");
//     console.log("Masla hogaya hai", error.message);
//   })
//   .finally((result) => console.log("Kaam hogaya hai", result.message));

// fetch("https://jsonplaceholder.typicode.com/todos/5")
//   .then((response) => {
//     if (!response.ok) console.log("Response is cleaned");
//     else console.log();
//     return response.json();
//   })
//   .then((data) => {
//     if (data.id <= 5) {
//       console.log("Successfully order");
//       console.log("Sasta order hai", data);
//     }
//   })
//   .catch((error) => console.log("Masla hogaya hai", error))
//   .finally((result) => console.log("Bakery service closed!"));

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then((response) => {
//     if (!response.ok) throw new Error("Not found!");
//     return response.json();
//   })
//   .then((data) => {
//     if (data.username.length > 5) {
//       console.log(data);
//       console.log(`Lamba naam hai, "${data.username}"`);
//     } else console.log(`Chota naam hai, "${data.username}"`);
//   })
//   .catch((error) => console.error("Masla hogaya hai", error.message))
//   .finally(() => console.log("Search finished"));

fetch("https://jsonplaceholder.typicode.com/users/2")
  .then((response) => {
    if (response.status !== 200) {
      throw new Error("User not found");
      console.log("User missing");
      return response.json();
    } else console.log("Successfully user found");
  })
  .then((data) => {
    console.log(`Name: ${data.name} | Email: ${data.email}`);
    if (data.email.endsWith("biz"))
      console.log(`This email is business ${data.email}`);
    else console.log(`This account is personal ${data.email}`);
  })
  .catch((error) => console.error(`Problem ${error.message}`))
  .finally(() => console.log("Result mil gaya hai"));
