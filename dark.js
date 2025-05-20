const toggleIcon = document.getElementById("toggleIcon");

    toggleIcon.addEventListener("click", function () {
      // Alterna as classes
      toggleIcon.classList.toggle("sun");
      toggleIcon.classList.toggle("moon");

      // Altera o conteúdo (emoji)
      if (toggleIcon.classList.contains("sun")) {
        toggleIcon.textContent = "☀️";
      } else {
        toggleIcon.textContent = "🌙";
      }
    });