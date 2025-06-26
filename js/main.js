function countDown() {
  let = refresh = setInterval(() => {
    let futureDate = new Date("Feb 17, 2026, 23:59:59").getTime();
    let nowDate = new Date().getTime();
    let diff = futureDate - nowDate;

    let day = Math.floor(diff / 1000 / 60 / 60 / 24);
    let hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minute = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let second = Math.floor((diff % (1000 * 60)) / 1000);
    document.querySelector(".days h3").innerHTML = day;
    document.querySelector(".hours h3").innerHTML = hour;
    document.querySelector(".minutes h3").innerHTML = minute;
    document.querySelector(".seconds h3").innerHTML = second;
  }, 1000);
  if (diff < 0) {
    clearInterval(refresh);
    document.querySelector("h1").style.display = "none";
    document.querySelector(".box div").style.display = "none";
    let box = document.querySelector(".box");
    box.innerHTML = "<h1>ramadan kareem</h1>";
    box.style.color = "#fff";
  }
}
countDown();
