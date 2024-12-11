document.addEventListener("DOMContentLoaded", () => {
  const currentTime = document.getElementById("current-time");
  const toggleClockFormat = document.getElementById("toggle-clock-format");
  const homeworkButton = document.getElementById("homework-button");
  let is24Hour = true;

  // Real-Time Clock
  function updateClock() {
    const now = new Date();
    currentTime.textContent = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    });
  }
  setInterval(updateClock, 1000);

  toggleClockFormat.addEventListener("click", () => {
    is24Hour = !is24Hour;
  });

  // Homework Button Toggle
  homeworkButton.addEventListener("click", () => {
    if (homeworkButton.classList.contains("completed")) {
      homeworkButton.classList.remove("completed");
      homeworkButton.innerHTML = "Homework";
    } else {
      homeworkButton.classList.add("completed");
      homeworkButton.innerHTML = 'Homework <span class="emoji">👍</span>';
    }
  });

  // Drag-and-Drop Functionality
  const emojis = document.querySelectorAll(".emoji");
  const placeholders = document.querySelectorAll(".placeholder");

  emojis.forEach((emoji) => {
    emoji.addEventListener("dragstart", (e) => {
      navigator.vibrate(50);
      e.dataTransfer.setData("text", e.target.textContent);
    });
  });

  placeholders.forEach((placeholder) => {
    placeholder.addEventListener("dragover", (e) => e.preventDefault());
    placeholder.addEventListener("drop", (e) => {
      e.preventDefault();
      const emoji = e.dataTransfer.getData("text");
      placeholder.textContent = emoji;
    });
  });
});
