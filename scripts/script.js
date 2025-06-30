document.addEventListener("DOMContentLoaded", function () {
    const filter = document.getElementById("academicYear");
  
    if (filter) {
      filter.addEventListener("change", function () {
        const selectedYear = filter.value;
        const rows = document.querySelectorAll(".grades-table tbody tr");
  
        rows.forEach(row => {
          const year = row.getAttribute("data-year");
          if (selectedYear === "all" || selectedYear === year) {
            row.style.display = "";
          } else {
            row.style.display = "none";
          }
        });
      });
    }
  });
  