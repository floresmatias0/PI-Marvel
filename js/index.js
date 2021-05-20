document.addEventListener("DOMContentLoaded", function(event) {
  const titleWelcome = document.querySelector(".titleWelcome")
  const enterWelcome = document.querySelector(".enterWelcome")
  const marvelName = document.getElementById("marvelName")

  enterWelcome.href = "pages/home.html"
  marvelName.src="assets/images/marvel-title-2.png"

  console.log("DOM fully loaded and parsed");
});
