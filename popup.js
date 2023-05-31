// popup.js

document.addEventListener("DOMContentLoaded", function () {
    var addButton = document.getElementById("addButton");
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    var timer = document.getElementById("timer");
  
    var countdown;
    var timeRemaining = 30 * 60;
  
    addButton.addEventListener("click", function () {
      var task = taskInput.value;
      if (task.trim() !== "") {
        var taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = task;
  
        taskElement.addEventListener("click", function () {
          taskElement.classList.toggle("completed");
        });
  
        taskElement.addEventListener("contextmenu", function (event) {
          event.preventDefault();
          taskElement.remove();
        });
  
        taskList.appendChild(taskElement);
        taskInput.value = "";
      }
    });
  
    function startTimer(duration, display) {
      var timer = duration,
        minutes,
        seconds;
      countdown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
  
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
  
        display.textContent = minutes + ":" + seconds;
  
        if (--timer < 0) {
          clearInterval(countdown);
          display.textContent = "Time's up!";
        }
      }, 1000);
    }
  
    startTimer(timeRemaining, timer);
  });
  