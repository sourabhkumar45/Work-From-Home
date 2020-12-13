var existCondition = setInterval(function () {
  if ($("#schedule_body").length) {
    clearInterval(existCondition);
    clearInterval(existCondition);
    let body = document.getElementById("schedule_body");

    // console.log(body);
    for (i = 0; i < 35; i++) {
      let box = document.createElement("div");
      box.className = "box";
      let text = document.createElement("p");
      text.className = "date";
      text.innerHTML = `${(31 - 2 + i) % 30 == 0 ? 30 : (31 - 2 + i) % 30}`;
      box.onclick = function () {
        console.log("Clicked");
      };
      box.appendChild(text);

      body.appendChild(box);
    }

    date_8th_elements(body);
    date_9th_elements(body);
  }
}, 100);

$(document).on("click", ".schedule_body .box", function () {
  $(this).addClass("box--active").siblings().removeClass("box--active");
});

function date_9th_elements(body) {
  let box_task1 = createBoxTask("SandBox Logo Revision", "#EE90A1");
  body.children[17].appendChild(box_task1);
}

function date_8th_elements(body) {
  //   <div class="task_complete">✓</div>
  let button = document.createElement("button");
  button.className = "boxBtn";
  button.innerHTML = "Load more Tasks";

  let box_task1 = createBoxTask(
    "Complete pitch deck design for Microsoft",
    "#EE90A1"
  );
  let box_task2 = createBoxTask(
    "Finish part 2 of BMO Proposal",
    "#72B7DF",
    "none"
  );
  let box_task3 = createBoxTask("Review Mikasa’s Work", "#5ACDAA", "none");
  let box_task4 = createBoxTask(
    "Complete Brand Guidelines For Versace",
    "#EE90A1",
    "none"
  );
  const boxes = [box_task1, box_task2, box_task3, box_task4];

  // Append Child
  boxes.forEach((box_task) => {
    body.children[16].appendChild(box_task);
  });

  body.children[16].appendChild(button);

  $(document).on("click", ".boxBtn", function () {
    // $(this).addClass("box--active").siblings().removeClass("box--active");
    console.log("Clicked on the button");
    const status = boxes[2].style.display == "none" ? "flex" : "none";
    for (let i = 1; i < boxes.length; i++) {
      const box_task = boxes[i];
      box_task.style.display = status;
    }
  });
}

function createBoxTask(task_detail, circle_color, display = "flex") {
  let box_task = document.createElement("div");
  box_task.className = "box_task";
  box_task.style.display = display;
  let text = document.createElement("p");
  text.innerHTML = task_detail;

  // Task complete symbol
  let circle = document.createElement("div");
  circle.className = "task_complete";
  circle.style.background = circle_color;
  circle.innerHTML = "✓";

  box_task.appendChild(text);
  box_task.appendChild(circle);

  return box_task;
}
