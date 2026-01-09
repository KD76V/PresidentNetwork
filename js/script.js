// --- Demo Users ---
let USERS = [
  {id:1,name:"Alex",pic:"images/alex.png",friends:[2],posts:[]},
  {id:2,name:"Mike",pic:"images/mike.png",friends:[1],posts:[]}
];

let CURRENT_USER = USERS[0];

// --- Feed Render ---
function renderFeed() {
  const feed = document.getElementById("feed");
  feed.innerHTML = "";
  USERS.forEach(u => {
    u.posts.forEach(post => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <strong>${u.name}</strong>
        <p>${post.text}</p>
        ${post.image ? `<img src="${post.image}">` : ""}
        <div class="likes">Likes: ${post.likes}</div>
        <div class="comments">Comments: ${post.comments.length}</div>
        <button onclick="likePost(${u.id},${u.posts.indexOf(post)})">Like</button>
        <button onclick="commentPost(${u.id},${u.posts.indexOf(post)})">Comment</button>
      `;
      feed.appendChild(card);
    });
  });
}

// --- Like & Comment ---
function likePost(uid, pid) {
  USERS.find(u => u.id===uid).posts[pid].likes++;
  renderFeed();
}
function commentPost(uid, pid) {
  const text = prompt("Enter comment:");
  if(text) USERS.find(u=>u.id===uid).posts[pid].comments.push(text);
  renderFeed();
}

// --- Modal ---
const modal = document.getElementById("postModal");
const loginBtn = document.getElementById("loginBtn");
const closeBtn = document.querySelector(".close");
loginBtn.onclick = ()=> modal.style.display="flex";
closeBtn.onclick = ()=> modal.style.display="none";

// --- Submit Post ---
document.getElementById("submitPost").onclick = ()=>{
  const text = document.getElementById("postText").value;
  const file = document.getElementById("postImage").files[0];
  let imgSrc = "";
  if(file){
    imgSrc = URL.createObjectURL(file);
  }
  CURRENT_USER.posts.push({text:text,image:imgSrc,likes:0,comments:[]});
  renderFeed();
  modal.style.display="none";
  document.getElementById("postText").value="";
  document.getElementById("postImage").value="";
}

// --- Init Feed ---
renderFeed();
