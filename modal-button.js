const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const card = btn.closest(".list-table");
    const hiddenText = card.querySelector(".hidden-text");
    if (!hiddenText.classList.contains("open")) {
      hiddenText.classList.add("open");
      card.classList.add("open");
      btn.innerText = "Hide projects";
    } else {
      // hideText();
      hiddenText.classList.remove("open");
      card.classList.remove("open");
      btn.innerText = "Show projects";
    }
  });
});

// function hideText() {
//   const listTables = document.querySelectorAll(".list-table");
//   const hiddenText = listTables.querySelector(".hidden-text");
//   listTables.forEach((el) => {
//     if (hiddenText.classList.contains("open")) {
//       hiddenText.classList.remove("open");
//       listTables.classList.remove("open");
//       el.innerText = "Show projects";
//     }
//   });
// }
