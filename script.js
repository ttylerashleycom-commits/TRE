let timeLeft = 60;
const timerElement = document.getElementById("timer");

function updateTimer() {
  timerElement.textContent = timeLeft;
  timeLeft--;
  if (timeLeft < 0) {
    timeLeft = 60; // يرجع للـ 60 ثانية بعد انتهاء العد
  }
}

// تحديث كل ثانية
setInterval(updateTimer, 1000);
