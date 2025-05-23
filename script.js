let is24Hour = false;

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  let ampm = '';

  if (!is24Hour) {
    ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; 
  }

  const hourStr = String(hours).padStart(2, '0');
  document.getElementById('time').textContent = `${hourStr}:${minutes}:${seconds}`;
  document.getElementById('ampm').textContent = is24Hour ? '' : ampm;

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const dayOptions = { weekday: 'long' };
  document.getElementById('date').textContent = now.toLocaleDateString(undefined, dateOptions);
  document.getElementById('day').textContent = now.toLocaleDateString(undefined, dayOptions);
}

function toggleFormat() {
  is24Hour = !is24Hour;
  document.querySelector('.toggle-btn').textContent = is24Hour
    ? 'Switch to 12-Hour Format'
    : 'Switch to 24-Hour Format';
  updateClock();
}

setInterval(updateClock, 1000);
updateClock();
