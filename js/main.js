function countDown() {
    let = refresh = setInterval(() => {
      let futureDate = new Date("Feb 28, 2025, 11:59:59").getTime();
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
  }
  countDown();