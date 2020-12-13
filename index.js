window.onload = function () {
  taskModal();
  breakModal();
  editBreak();
  timer();
  menuClick();

  $(document).on("click", ".main_task .task_week .task", function () {
    $(this).addClass("task--active").siblings().removeClass("task--active ");
  });

  $(document).on("click", ".main_task .task_today .task", function () {
    $(this).toggleClass("task--checked");
  });

  $(document).on("click", ".menu_item", function () {
    $(this)
      .addClass("menu_item--active")
      .siblings()
      .removeClass("menu_item--active");
  });

  $(document).on(
    "click",
    ".schedule .schedule_header .option .option_item",
    function () {
      $(this)
        .addClass("option--active")
        .siblings()
        .removeClass("option--active");
    }
  );
};

function menuClick() {
  var existCondition = setInterval(function () {
    if ($("#dashboardBtn").length) {
      clearInterval(existCondition);
      let dbBtn = document.getElementById("dashboardBtn");

      console.log("dashboard button >>>", dbBtn);

      let scheduleBtn = document.getElementById("scheduleBtn");
      console.log("Schedule button >>>", scheduleBtn);

      let dashboard = document.getElementById("dashboard");
      console.log("dashboard >>>", dashboard);

      let schedule = document.getElementById("schedule");

      dbBtn.onclick = function () {
        dashboard.style.display = "block";
        schedule.style.display = "none";
      };
      scheduleBtn.onclick = function () {
        dashboard.style.display = "none";
        schedule.style.display = "block";
        console.log("Clicked");
      };
    }
  }, 100);
}

function timer() {
  var existCondition = setInterval(function () {
    if ($("#header_timer").length) {
      clearInterval(existCondition);
      let headerTimer = document.getElementById("header_timer");
      let isOn = headerTimer.getAttribute("on");
      console.log(headerTimer);
      console.log(isOn);
      const timerStatus = headerTimer.children[0];
      const timerIcon = headerTimer.children[1];

      console.log(timerStatus);
      console.log(timerIcon);

      headerTimer.onclick = function () {
        if (isOn == "false") {
          timerStatus.innerHTML = "Pause Timer";
          timerIcon.className = "fa fa-pause";
          isOn = "true";
          headerTimer.setAttribute("on", "true");
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
function taskModal() {
  var existCondition = setInterval(function () {
    if ($("#taskBtn").length) {
      if ($("#task_close").length) {
        clearInterval(existCondition);
        //   doTheRestOfTheStuff(parameters);
        // Get the modal
        let modal = document.getElementById("taskModal");
        // console.log("Modal >>>", modal);

        // Get the button that opens the modal
        let btn = document.getElementById("taskBtn");
        // console.log("Task Btn >>>", btn);

        // Get the <span> element that closes the modal
        let span = document.getElementById("task_close");

        // console.log(span);

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
          modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }
  }, 100); // check every 100ms
}

function breakModal() {
  var existCondition = setInterval(function () {
    if ($("#breakBtn").length) {
      if ($("#break_close").length) {
        clearInterval(existCondition);
        //   doTheRestOfTheStuff(parameters);
        // Get the modal
        let modal = document.getElementById("breakModal");
        // console.log("Break Modal >>>", modal);

        // Get the button that opens the modal
        let btn = document.getElementById("breakBtn");
        // console.log("Break Btn >>>", btn);

        // Get the <span> element that closes the modal
        let span = document.getElementById("break_close");

        // console.log(span);

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
          modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }
  }, 100); // check every 100ms
}

function editBreak() {
  var existCondition = setInterval(function () {
    if ($("#break").length) {
      if ($("#break_edit_close").length) {
        clearInterval(existCondition);
        //   doTheRestOfTheStuff(parameters);
        // Get the modal
        let modal = document.getElementById("breakDetail");
        // console.log("Break Modal >>>", modal);

        // Get the button that opens the modal
        let btn = document.getElementById("break");
        // console.log("Break Btn >>>", btn);

        // Get the <span> element that closes the modal
        let span = document.getElementById("break_edit_close");

        // console.log(span);

        // When the user clicks on the button, open the modal
        btn.onclick = function () {
          modal.style.display = "block";
        };

        // When the user clicks on <span> (x), close the modal
        span.onclick = function () {
          modal.style.display = "none";
        };

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
          if (event.target == modal) {
            modal.style.display = "none";
          }
        };
      }
    }
  }, 100); // check every 100ms
}
