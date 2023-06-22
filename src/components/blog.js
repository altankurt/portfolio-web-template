document.getElementById("load-more").addEventListener("click", function () {
  const hiddenPosts = document.querySelectorAll(".hidden-post");

  hiddenPosts.forEach(function (post) {
    post.classList.remove("hidden-post");
  });

  this.style.display = "none";
});
