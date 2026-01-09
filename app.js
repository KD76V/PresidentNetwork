function likePost(btn){
  if(btn.classList.contains("liked")){
    btn.innerText = "❤️ Like";
    btn.classList.remove("liked");
  }else{
    btn.innerText = "💔 Liked";
    btn.classList.add("liked");
  }
}
