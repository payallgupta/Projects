:root {
  --bg-start: #ff9a9e;
  --bg-end: #fad0c4;
  --timer-color: #ff4e87;
  --btn-gradient: linear-gradient(45deg, #ff4e87, #ff6a6a);
  --btn-hover-gradient: linear-gradient(45deg, #e84376, #ff4e50);
  --card-bg: #ffffff;
  --text-color: #333;
}

[data-theme="dark"] {
  --bg-start: #2c3e50;
  --bg-end: #4ca1af;
  --timer-color: #ff6a00;
  --btn-gradient: linear-gradient(45deg, #ff6a00, #ff8c42);
  --btn-hover-gradient: linear-gradient(45deg, #e65c00, #ff7f24);
  --card-bg: #34495e;
  --text-color: #ecf0f1;
}

body {
  background: linear-gradient(135deg, var(--bg-start), var(--bg-end));
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: 'Poppins', sans-serif;
  margin: 0;
  color: var(--text-color);
  transition: background 0.5s ease, color 0.5s ease;
}

.container {
  background: var(--card-bg);
  border-radius: 25px;
  padding: 40px 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  width: 90%;
  max-width: 400px;
  transition: background 0.5s ease;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--timer-color);
  font-weight: 700;
  text-align: center;
  text-shadow: 1px 2px 4px rgba(0,0,0,0.1);
}

.timer {
  font-size: 2.8rem;
  background-color: var(--card-bg);
  padding: 25px 35px;
  border-radius: 15px;
  color: var(--timer-color);
  font-weight: bold;
  letter-spacing: 2px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  from { transform: scale(1); }
  to { transform: scale(1.03); }
}

.contorls {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
}

button, #darkModeToggle {
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  background: var(--btn-gradient);
  color: #fff;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease, background 0.3s ease;
}

button:hover, #darkModeToggle:hover {
  background: var(--btn-hover-gradient);
  transform: scale(1.05);
}

.lap-title {
  font-size: 1.2rem;
  margin-top: 1rem;
  font-weight: 600;
}

.laps ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  max-height: 180px;
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.05);
}

.laps ul::-webkit-scrollbar {
  width: 6px;
}
.laps ul::-webkit-scrollbar-thumb {
  background-color: var(--timer-color);
  border-radius: 4px;
}

li {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid #eee;
  color: var(--text-color);
}
li span { color: var(--timer-color); }
