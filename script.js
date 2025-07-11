let [minutes, seconds, milliseconds] = [0, 0, 0];
let timerInterval = null;
const timerDisplay = document.querySelector(".timer");
const [startBtn, pauseBtn, resetBtn, lapBtn, darkToggle] = 
  ["startBtn","pauseBtn","resetBtn","lapBtn","darkModeToggle"].map(id => document.getElementById(id));
const lapsList = document.getElementById("lapsList");

const soundStart = new Audio('data:audio/ogg;base64,T2dn...'); // small beep
const soundPause = new Audio('data:audio/ogg;base64,T2dn...');
const soundLap   = new Audio('data:audio/ogg;base64,T2dn...');

startBtn.addEventListener("click", () => {
  if (timerInterval) return;
  soundStart.play();
  timerInterval = setInterval(updateTimer, 10);
});

pauseBtn.addEventListener("click", () => {
  if (!timerInterval) return;
  clearInterval(timerInterval);
  timerInterval = null;
  soundPause.play();
});

resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  soundPause.play();
  [minutes, seconds, milliseconds] = [0, 0, 0];
  updateDisplay();
  lapsList.innerHTML = "";
});

lapBtn.addEventListener("click", () => {
  if (!timerInterval) return;
  soundLap.play();
  const li = document.createElement("li");
  li.innerHTML = `<span>Lap</span> - ${format(minutes)}:${format(seconds)}:${format(milliseconds)}`;
  lapsList.prepend(li);
});

darkToggle.addEventListener("click", () => {
  const root = document.body;
  const isDark = root.getAttribute("data-theme") === "dark";
  root.setAttribute("data-theme", isDark ? "light" : "dark");
  darkToggle.textContent = isDark ? "🌙 Dark Mode" : "☀️ Light Mode";
});

function updateTimer() {
  milliseconds += 1;
  if (milliseconds === 100) { milliseconds = 0; seconds++; }
  if (seconds === 60) { seconds = 0; minutes++; }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById("minutes").innerText = format(minutes);
  document.getElementById("seconds").innerText = format(seconds);
  document.getElementById("milliseconds").innerText = format(milliseconds);
}

function format(num) {
  return num < 10 ? `0${num}` : num;
}
