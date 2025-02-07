// Function to update the current time in UTC
function updateUTCTime() {
  const utcTimeElement = document.querySelector('[data-testid="currentTimeUTC"]');
  const now = new Date();
  const utcTime = now.toUTCString();
  utcTimeElement.textContent = `Current UTC Time: ${utcTime}`;
}

// Update the time immediately and every second
updateUTCTime();
setInterval(updateUTCTime, 1000);