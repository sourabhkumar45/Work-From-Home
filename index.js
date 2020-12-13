window.onload = function () {
  taskModal();
  breakModal();
  editBreak();
  menuClick();
  setWorkTime();

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
      // console.log("dashboard button >>>", dbBtn);

      let scheduleBtn = document.getElementById("scheduleBtn");
      // console.log("Schedule button >>>", scheduleBtn);

      let dashboard = document.getElementById("dashboard");
      // console.log("dashboard >>>", dashboard);

      let schedule = document.getElementById("schedule");

      dbBtn.onclick = function () {
        dashboard.style.display = "block";
        schedule.style.display = "none";
      };
      scheduleBtn.onclick = function () {
        dashboard.style.display = "none";
        schedule.style.display = "block";
      };
    }
  }, 100);
}

//
function taskModal() {
  var existCondition = setInterval(function () {
    if (
      $("#taskBtn").length &&
      $("#add_task_saveBtn").length &&
      $("#task_close").length
    ) {
      clearInterval(existCondition);
      //   doTheRestOfTheStuff(parameters);
      // Get the modal
      let modal = document.getElementById("taskModal");
      // console.log("Break Modal >>>", modal);

      // Get the button that opens the modal
      let btn = document.getElementById("taskBtn");
      // console.log("Break Btn >>>", btn);

      // Get the <span> element that closes the modal
      let span = document.getElementById("task_close");
      let saveBtn = document.getElementById("add_task_saveBtn");
      // console.log("save Btn >>>", saveBtn);

      // console.log(span);

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };
      saveBtn.onclick = () => {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 100); // check every 100ms
}

function breakModal() {
  var existCondition = setInterval(function () {
    if (
      $("#breakBtn").length &&
      $("#add_break_saveBtn").length &&
      $("#break_close").length
    ) {
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
      let saveBtn = document.getElementById("add_break_saveBtn");
      // console.log("save Btn >>>", saveBtn);

      // console.log(span);

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };
      saveBtn.onclick = () => {
        modal.style.display = "none";
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 100); // check every 100ms
}

function editBreak() {
  var existCondition = setInterval(function () {
    if ($("#break").length && $("#break_edit_close").length) {
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
  }, 100); // check every 100ms
}

function setWorkTime() {
  var existCondition = setInterval(function () {
    if (
      $("#header_set_timer").length &&
      $("#setTimeBtn").length &&
      $("#workTime_close").length
    ) {
      clearInterval(existCondition);
      //   doTheRestOfTheStuff(parameters);
      // Get the modal
      let modal = document.getElementById("setWorkTime");
      // console.log("Break Modal >>>", modal);

      // Get the button that opens the modal
      let btn = document.getElementById("header_set_timer");
      // console.log("Break Btn >>>", btn);

      // Get the <span> element that closes the modal
      let span = document.getElementById("workTime_close");
      let saveBtn = document.getElementById("setTimeBtn");
      // console.log("save Btn >>>", saveBtn);

      // When the user clicks on the button, open the modal
      btn.onclick = function () {
        modal.style.display = "block";
      };

      span.onclick = function () {
        modal.style.display = "none";
      };
      saveBtn.onclick = () => {
        // modal.style.display = "none";
        const totalWorkHours = modal.children[0].children[2].children[1].value;
        const totalWorkDays = modal.children[0].children[2].children[3].value;
        if (totalWorkHours && totalWorkDays) {
          if (totalWorkHours > 0 && totalWorkDays > 0) {
            console.log(
              "work hours and work days >>>",
              totalWorkHours,
              totalWorkDays
            );

            var existCondition = setInterval(function () {
              if ($("#remaining_timer").length) {
                clearInterval(existCondition);
                let remainingTime = document.getElementById("remaining_timer");
                console.log(remainingTime);
                const mins = (totalWorkHours * 60) % 60;
                const hours = (totalWorkHours * 60 - mins) / 60;
                if (hours > 10) {
                  if (mins > 10) {
                    remainingTime.innerHTML = `${hours}:${mins}`;
                  } else {
                    const mins_string = `0${mins}`;
                    remainingTime.innerHTML = `${hours}:${mins_string}`;
                  }
                } else {
                  const hours_string = `0${hours}`;
                  if (mins > 10) {
                    remainingTime.innerHTML = `${hours_string}:${mins}`;
                  } else {
                    const mins_string = `0${mins}`;
                    remainingTime.innerHTML = `${hours_string}:${mins_string}`;
                  }
                }
              }
            }, 100);

            modal.style.display = "none";
          } else {
            alert("Negative numbers are not allowed");
          }
        } else {
          alert("Please enter the proper time");
        }
      };

      // When the user clicks anywhere outside of the modal, close it
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
  }, 100); // check every 100ms
}
