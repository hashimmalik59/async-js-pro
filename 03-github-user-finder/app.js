const container = document.querySelector(".container");
const searchButton = document.querySelector(".search-button");

searchButton.addEventListener("click", () => {
  const userInput = document.querySelector(".user-input").value;
  const url = `https://api.github.com/users/${userInput}`;

  const profileImage = document.createElement("img");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const publicRepos = document.createElement("p");
  const profileLink = document.createElement("a");

  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("User nor found");
      return response.json();
    })
    .then((data) => {
      console.log(data);
      console.log(data.avatar_url);
      console.log(data.html_url);
      console.log(data.public_repos);
      console.log(data.followers);
      console.log(data.following);

      profileImage.src = `${data.avatar_url}`;
      followers.textContent = `Followers: ${data.followers}`;
      following.textContent = `Following: ${data.following}`;
      publicRepos.textContent = `Public Repos: ${data.public_repos}`;
      profileLink.href = `${data.html_url}`;
      profileLink.textContent = `Go to ${data.login} profile`;

      container.appendChild(profileImage);
      container.appendChild(followers);
      container.appendChild(following);
      container.appendChild(publicRepos);
      container.appendChild(profileLink);
    })
    .catch((error) => console.log(error.message))
    .finally(() => console.log("Process Done"));
});

// searchButton.addEventListener("click", () => {
//   const userInput = document.querySelector(".user-input").value;
//   if (!userInput) return alert("Pehle naam toh likho!"); // Empty check

//   const url = `https://api.github.com/users/${userInput}`;

//   // 1. Purana data saaf karo aur loading dikhao
//   container.innerHTML = "<p>Searching...</p>";

//   fetch(url)
//     .then((response) => {
//       if (!response.ok) throw new Error("User nahi mila!");
//       return response.json();
//     })
//     .then((data) => {
//       // 2. Clear loading and render fresh HTML
//       // InnerHTML use karna asaan hai agar structure complex ho
//       container.innerHTML = `
//         <img src="${data.avatar_url}" style="width: 150px; border-radius: 50%;">
//         <h2>${data.name || data.login}</h2>
//         <p>Followers: ${data.followers} | Following: ${data.following}</p>
//         <p>Public Repos: ${data.public_repos}</p>
//         <a href="${data.html_url}" target="_blank">View GitHub Profile</a>
//       `;
//     })
//     .catch((error) => {
//       // 3. Error ko screen par dikhao, sirf console mein nahi
//       container.innerHTML = `<p style="color: red;">Ghalti: ${error.message}</p>`;
//     })
//     .finally(() => {
//       console.log("Search process finished.");
//     });
// });
