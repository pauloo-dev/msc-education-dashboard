// scripts/course.js
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseName = params.get('course') || "Course";
    const titleEl = document.getElementById('course-title');
    titleEl.textContent = `📘 ${courseName}`;
  });
  