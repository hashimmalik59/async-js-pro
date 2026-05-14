// const ranNum = Math.floor(Math.random() * 10) + 1;
// console.log("START");
// setTimeout(() => {
//   function getUserData(id) {
//     const a = new Promise((res, rej) => {
//       if (id % 2 === 0) {
//         setTimeout(() => {
//           res(`EVEN: ${id}`);
//         }, 2000);
//       } else {
//         setTimeout(() => {
//           rej(`ODD: ${id}`);
//         }, 2000);
//       }
//     });

//     a.then((data) => console.log(data))
//       .catch((error) => console.error(error))
//       .finally((result) => console.log("DONE"));
//   }
//   getUserData(ranNum);
// }, 2000);

// Task: GitHub Profile Fetcher

const userInput = document.querySelector("input");
const userButton = document.querySelector("button");
const displayData = document.querySelector("div");
const errorMessage = document.querySelector(".error-message");

userButton.addEventListener("click", () => {
  console.log("Start");

  const username = userInput.value.trim();
  if (!userInput.value.trim()) {
    errorMessage.classList.remove("hide");
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP FAILED ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        displayData.innerHTML = `
        <p><span>Name:</span> ${data.login}</p>
        <img src='${data.avatar_url}' width='100px' style='border-radius: 50%;'/>
        <p><span>Followers: </span>${data.followers}</p>
        <p><span>Following: </span>${data.following}</p>
        <p><span>Repos: </span>${data.public_repos}</p>
        `;
      })
      .catch((error) => console.error(error.message))
      .finally(() => console.log("Request Finished"));
    setTimeout(() => {
      userInput.value = "";
    }, 2000);
  } else {
    errorMessage.classList.add("hide");
  }
});
