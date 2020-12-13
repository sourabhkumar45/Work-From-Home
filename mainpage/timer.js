timer();

function timer() {
  var existCondition = setInterval(function () {
    if (
      $("#header_timer").length &&
      $("#remaining_timer").length &&
      $("#elasped_time").length
    ) {
      clearInterval(existCondition);

      let headerTimer = document.getElementById("header_timer");
      let isOn = headerTimer.getAttribute("on");

      const timerStatus = headerTimer.children[0];
      const timerIcon = headerTimer.children[1];

      headerTimer.onclick = function () {
        if (isOn == "false") {
          timerStatus.innerHTML = "Pause Timer";
          timerIcon.className = "fa fa-pause";
          isOn = "true";
          headerTimer.setAttribute("on", "true");

          let remainingTime = document.getElementById("remaining_timer");
          let elaspedTime = document.getElementById("elasped_time");

          console.log(remainingTime);
          const time = remainingTime.textContent.split(":");
          //   console.log(time_string);
          let hours = parseInt(time[0]);
          let mins = parseInt(time[1]);

          const time_elasped = elaspedTime.textContent.split(":");
          //   console.log(time_string);
          let hours_elasped = parseInt(time_elasped[0]);
          let mins_elasped = parseInt(time_elasped[1]);

          console.log(hours, mins);
          console.log(hours_elasped, mins_elasped);

          let countDown = setInterval(function () {
            if ((hours == 0 && mins == 0) || isOn == "false") {
              console.log("Stop timer");
              timerStatus.innerHTML = "Start Timer";
              timerIcon.className = "fa fa-play";
              isOn = "false";
              headerTimer.setAttribute("on", "false");
              clearInterval(countDown);
            } else {
              if (mins > 0) {
                mins -= 1;
              } else {
                hours -= 1;
                mins = 59;
              }

              if (mins_elasped < 59) {
                mins_elasped += 1;
              } else {
                mins_elasped = 0;
                hours_elasped = 1;
              }
              console.log(hours, mins);
              if (hours > 9) {
                if (mins > 9) {
                  remainingTime.innerHTML = `${hours}:${mins}`;
                } else {
                  const mins_string = `0${mins}`;
                  remainingTime.innerHTML = `${hours}:${mins_string}`;
                }
              } else {
                const hours_string = `0${hours}`;
                if (mins > 9) {
                  remainingTime.innerHTML = `${hours_string}:${mins}`;
                } else {
                  const mins_string = `0${mins}`;
                  remainingTime.innerHTML = `${hours_string}:${mins_string}`;
                }
              }
              if (hours_elasped > 9) {
                if (mins_elasped > 9) {
                  elaspedTime.innerHTML = `${hours_elasped}:${mins_elasped}`;
                } else {
                  const mins_string = `0${mins_elasped}`;
                  elaspedTime.innerHTML = `${hours_elasped}:${mins_string}`;
                }
              } else {
                const hours_string = `0${hours_elasped}`;
                if (mins_elasped > 9) {
                  elaspedTime.innerHTML = `${hours_string}:${mins_elasped}`;
                } else {
                  const mins_string = `0${mins_elasped}`;
                  elaspedTime.innerHTML = `${hours_string}:${mins_string}`;
                }
              }
            }
          }, 1000);
        } else {
          timerStatus.innerHTML = "Start Timer";
          timerIcon.className = "fa fa-play";
          isOn = "false";
          headerTimer.setAttribute("on", "false");
        }
      };
    }
  }, 100);
}
