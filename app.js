const feed = document.getElementById("feed");

POSTS.forEach(post => {
  const card = document.createElement("div");
  card.className = "post";

  card.innerHTML = `
    <img src="${post.image}">
    <div class="post-content">
      <h3>@${post.username}</h3>
      <p>${post.caption}</p>
    </div>
  `;

  feed.appendChild(card);
});
