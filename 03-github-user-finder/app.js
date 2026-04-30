const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-button");
const loader = document.querySelector("span");
const userInput = document.querySelector(".user-input");
const displayData = document.querySelector(".display-data");

searchButton.addEventListener("click", () => {
  const username = userInput.value;

  const url = `https://api.github.com/users/${username}`;

  if (!username) {
    loader.classList.add("loader");
    loader.textContent = "Invalid Username";
    loader.style.color = "red";
  } else {
    const profileImage = document.createElement("img");
    const followers = document.createElement("p");
    const following = document.createElement("p");
    const publicRepos = document.createElement("p");
    const profileLink = document.createElement("a");
    loader.textContent = "Loading...";
    loader.style.color = "#000";
    displayData.innerHTML = "";
    fetch(url)
      .then((response) => {
        if (!response.ok) throw new Error("User nor found");
        return response.json();
      })
      .then((data) => {
        console.log(data);
        displayData.innerHTML = `
        <img style="border-radius: 50%" src=${data.avatar_url} height="100px" />
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repo: ${data.public_repos}</p>
        <a href=${data.html_url}>Go to ${data.login} profile</a>`;
      })
      .catch((error) => console.log(error.message))
      .finally(() => {
        console.log("Process Done");
        loader.classList.remove("loader");
      });
  }
});
