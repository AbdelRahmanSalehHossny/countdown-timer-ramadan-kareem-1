function countDown() {
  let = refresh = setInterval(() => {
    let futureDate = new Date("Feb 28, 2025, 11:59:59 pm").getTime();
    let nowDate = new Date().getTime();
    let diff = futureDate - nowDate;

    if (diff > 0) {
      let day = Math.floor(diff / 1000 / 60 / 60 / 24);
      let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      let second = Math.floor((diff % (1000 * 60)) / 1000);
      document.querySelector(".days h3").innerHTML = day;
      document.querySelector(".hours h3").innerHTML = hour;
      document.querySelector(".minutes h3").innerHTML = minute;
      document.querySelector(".seconds h3").innerHTML = second;
    } else {
      clearInterval(refresh);
      document.querySelector("h1").style.display = "none";
      document.querySelector(".box div").style.display = "none";
      let box = document.querySelector(".box");
      box.innerHTML = '<h2 class="active">ramadan kareem</h2>';
      box.classList.add("active");
      box.style.fontSize = "40px";
    }
  }, 1000);
}
countDown();
