const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-button");
const loader = document.querySelector("span");

searchButton.addEventListener("click", () => {
  const userInput = document.querySelector(".user-input").value;
  const url = `https://api.github.com/users/${userInput}`;

  const profileImage = document.createElement("img");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const publicRepos = document.createElement("p");
  const profileLink = document.createElement("a");

  loader.classList.add("loader");

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("User nor found");
      return response.json();
    })
    .then((data) => {
      profileImage.src = `${data.avatar_url}`;
      followers.textContent = `Followers: ${data.followers}`;
      following.textContent = `Following: ${data.following}`;
      publicRepos.textContent = `Public Repos: ${data.public_repos}`;
      profileLink.href = `${data.html_url}`;
      profileLink.textContent = `Go to ${data.login} profile`;

      profileImage.setAttribute("height", "100px");
      profileImage.setAttribute("style", "border-radius: 50%;");

      container.appendChild(profileImage);
      container.appendChild(followers);
      container.appendChild(following);
      container.appendChild(publicRepos);
      container.appendChild(profileLink);
    })
    .catch((error) => console.log(error.message))
    .finally(() => {
      console.log("Process Done");
      loader.classList.remove("loader");
    });
});
