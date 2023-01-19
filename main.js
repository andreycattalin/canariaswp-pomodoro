let isActive = false;
let timeRemaining = 25 * 60;
var xTimer;
var audio = new Audio("alarm.mp3");

function activateTimer() {
  if (isActive) {
    document.getElementById("btn-start").classList.remove("hidden");
    document.getElementById("btn-stop").classList.add("hidden");
    isActive = false;
    clearInterval(xTimer);
  } else {
    document.getElementById("btn-stop").classList.remove("hidden");
    document.getElementById("btn-start").classList.add("hidden");
    isActive = true;

    startTimer();
  }
}

function startTimer() {
  xTimer = setInterval(function () {
    timeRemaining--;
    console.log(timeRemaining);

    let minutes = Math.floor(timeRemaining / 60);
    let seconds = timeRemaining % 60;
    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    let myTime = minutes + ":" + seconds;

    if (timeRemaining <= 10) {
      document
        .getElementById("timer")
        .classList.replace("text-white", "text-red-500");
    }

    if (timeRemaining <= 0) {
      audio.play();
      clearInterval(xTimer);
      timeRemaining = 25 * 60;
      document
        .getElementById("timer")
        .classList.replace("text-red-500", "text-white");
      document.getElementById("timer").innerHTML = "25:00";
      activateTimer();

      setTimeout(function () {
        audio.pause();
      }, 2000);
      return;
    }

    document.getElementById("timer").innerHTML = myTime;
  }, 1000); // 1000 ms es cada 1 segundo
}

function editarTiempo() {
  document.getElementById("modal-timer").classList.toggle("hidden");
}

function guardarTiempo() {
  document.getElementById("modal-timer").classList.toggle("hidden");
  let valorMinutosUsuario = document.getElementById("newtime").value;
  timeRemaining = valorMinutosUsuario * 60;
  document.getElementById("timer").innerHTML = valorMinutosUsuario + ":00";
}
