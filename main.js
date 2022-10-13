document.addEventListener("DOMContentLoaded", () => {
  const title = document.createElement("h1");
  //   title.innerText = 'Test';
  document.querySelector("body").appendChild(title);
  const body = document.querySelector("body");
  const form = document.querySelector(".form");

  //information that is accessed by setTimer()
  let numOutput;
  let timeOutput;
  let time = {
    ten: 10,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
  };

  // BUTTON- on click stores the time data that the user selects for their timer
  let setButton = document.getElementById("set-btn");

  function setTimer() {
    let numIntervals = document.getElementById("timedropdown-content");
    numOutput = numIntervals.value; //'ten'
    //if we decide to add hours as an option, uncomment and adjust math
    // let timeIntervals = document.getElementById('timeselect');
    // timeOutput = timeIntervals.value;
    const countDownDate = new Date().getTime() + time[numOutput] * 60 * 1000;
    //console.log(countDownDate)

    //store number into a variable that gets passed into the countDowndat
    //store the hrs/mins into a variable that gets passed into the countdowndate

    // })

    setButton.removeEventListener("click", setTimer);

    //this will be updated with user provided info
    //this starts our countdown
    const myfunc = setInterval(function () {
      const now = new Date().getTime();
      const timeleft = countDownDate - now;
      //console.log(timeleft);

      //   change this time to accurately reflect 5 minutes
      if (timeleft < 590000 && timeleft > 585000) {
        alert("You have 5 minutes left on your timer");
      }
      //if timer is at less than 2000
      //the current empty div embodies all the info so if the display is none, we don't see the text at all. can we make the div above but cover the whole page?
      //can we make the text still appear?
      if (timeleft < 570000) {
        const displayBlocker = document.getElementById("empty");
        displayBlocker.style.opacity = "100%";
      }

      //CALCULATE THE TIME
      const hours = Math.floor(
        (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("mins").innerHTML = minutes + "m ";
      document.getElementById("secs").innerHTML = seconds + "s";
      //console.log('test');
    }, 1000);

    // watch for the input event -> trigger every time the contents of the el inside change

    const startTime = document.getElementById("startTime");
    const valueSpan = document.getElementById("value");

    // START TIME:
    // startTime.addEventListener("input", () => {
    //   valueSpan.innerText = startTime.value;
    // }, false);
  }
  setButton.addEventListener("click", setTimer);
});
