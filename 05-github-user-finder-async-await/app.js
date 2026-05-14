const userInput = document.querySelector("input");
const searchButton = document.querySelector("button");
const displayData = document.querySelector("section");
const username = userInput.value;

searchButton.addEventListener("click", () => {
  async function githubUserFinder() {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      const data = await response.json();
      console.log(data);
      displayData.innerHTML = `
      <h1 class="text-3xl font-bold">Github User Finder</h1>
        <div>
            <input type="text" placeholder="Enter your username" class="border border-gray-300 rounded px-2 py-1">
            <button class="border border-gray-300 rounded px-2 py-1">Search</button>
        </div>
        <img style="border-radius: 50%" src=${data.avatar_url} height="100px" />
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        <p>Public Repo: ${data.public_repos}</p>
        <a href=${data.html_url}>Go to ${data.login} profile</a>`;
    } catch (error) {
      console.error(`Masla hai: ${error}`);
    }
  }
  githubUserFinder();
});
