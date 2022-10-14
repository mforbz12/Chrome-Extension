// chrome.runtime.onMessage.addListener((msg, sender) => {
//   if(msg == "toggle"){
//       toggle();
//   }
// });

// SIDE NAV BAR
document.addEventListener("DOMContentLoaded", () => {
  // wait until the page loads before working with HTML elements
  document.addEventListener("click", function (event) {
    //click listener on the document
    document.querySelectorAll(".dropdown-content").forEach(function (el) {
      if (el !== event.target) el.classList.remove("show");
      // close any showing dropdown that isn't the one just clicked
    });
    if (event.target.matches(".dropbtn")) {
      event.target
        .closest(".dropdown")
        .querySelector(".dropdown-content")
        .classList.toggle("show");
    }
    if (event.target.matches(".navdropbtn")) {
      event.target
        .closest(".navdropdown")
        .querySelector(".navdropdown-content")
        .classList.toggle("show");
    }
    if (event.target.matches(".widedropbtn")) {
      event.target
        .closest(".thirdLine")
        .querySelector(".widedropdown-content")
        .classList.toggle("show");
    }
    // if this is a dropdown button being clicked, toggle the show class
  });
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("body").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("body").style.marginLeft = "0";
}

function openButton() {
  document.getElementById("hid").style.visibility = "visible";
}

// if the pop up window is clicked, hide it
// error: constantly pops back up
function closeButton() {
  document.getElementById("hid").style.visibility = "hidden";
}

//////////////////////////

// TIMER
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
    one: 1,
    five: 5,
    ten: 10,
    fifteen: 15,
    twenty: 20,
    twentyFive: 25,
    thirty: 30,
    thirtyFive: 35,
    forty: 40,
    fortyFive: 45,
    fifty: 50,
    fiftyFive: 55,
    sixty: 60,
  };

  // BUTTON- on click stores the time data that the user selects for their timer
  let setButton = document.getElementById("set-btn");

  function setTimer() {
    let numIntervals = document.getElementById("timeDropDown-content");
    numOutput = numIntervals.value; //'ten'
    //if we decide to add hours as an option, uncomment and adjust math
    // let timeIntervals = document.getElementById('timeSelect');
    // timeOutput = timeIntervals.value;
    const countDownDate = new Date().getTime() + time[numOutput] * 60 * 1000;
    // console.log(countDownDate);

    //store number into a variable that gets passed into the countDownDate
    //store the hrs/mins into a variable that gets passed into the countDownDate

    // })

    setButton.removeEventListener("click", setTimer);

    //this will be updated with user provided info
    //this starts our countdown
    const myFunc = setInterval(function () {
      const now = new Date().getTime();
      const timeLeft = countDownDate - now;
      //console.log(timeLeft);

      //   change this time to accurately reflect 5 minutes
      if (timeLeft < 302000 && timeLeft > 299000) {
        alert("You have 5 minutes left on your timer");
      }
      //if timer is at less than 2000
      //the current empty div embodies all the info so if the display is none, we don't see the text at all. can we make the div above but cover the whole page?
      //can we make the text still appear?

      // if the time is less than 1 second, display the pop up window
      if (timeLeft <= 6000) {
        const displayBlocker = document.getElementById("hid");
        openButton();
        // if(openButton === true).disabled = true;
        // displayBlocker.disabled = true;
        // have to set a disable button if the button has been clicked
      }

      // function showIt() {
      //   document.getElementById("hid").style.visibility = "visible";
      // }
      // setTimeout("showIt()", 3000); // after 3 seconds

      /////////////////////////////

      // if (timeLeft < 570000) {
      //   const displayBlocker = document.getElementById("empty");
      //   displayBlocker.style.opacity = "100%";
      // }

      //////////////////////////

      //CALCULATE THE TIME
      const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

      document.getElementById("hours").innerHTML = hours + "h ";
      document.getElementById("mins").innerHTML = minutes + "m ";
      document.getElementById("secs").innerHTML = seconds + "s";
      //console.log('test');

      // if the count down is finished
      // bug: once this reaches 0, it's printing out neg numbers
      if (timeLeft <= 0) {
        clearInterval(
          (document.getElementById("countdown-now").innerHTML = "Time is up!")
        );
      }
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
