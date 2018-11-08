let cookie = document.getElementById("cookie");
let counter = document.getElementById("counter");
let points = 0;


let clicker = function(e) {
  e.preventDefault; // default behaviour chanceled

  points = points + 1;

  // set counter
  counter.innerHTML = points;

  if(points === 10) {
    document.getElementById("rewardA").classList.remove("hidden");
  }

  // remove class
  cookie.classList.remove("bounce");

  // magic...
  void cookie.offsetWidth;

  // add class
  cookie.classList.add("bounce");
}

cookie.addEventListener("click", clicker);
