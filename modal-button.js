// const refs = {
//   openModalBtn: document.querySelector("[data-modal-open]"),
//   closeModalBtn: document.querySelector("[data-modal-close]"),
//   modalTwo: document.querySelector("[data-modal-two]"),
//   modal: document.querySelector("[data-modal]"),
//   /////////////////////////////////////////////////
//   modalMonstr: document.querySelector("[data-monstr-baby]"),
//   openModalMonstrBaby: document.querySelector("[data-open-syka]"),
//   closedModalMonstrBAby: document.querySelector("[data-close-modal]"),
//   backdrop: document.querySelector("[data-backdrop]"),
// };

// refs.openModalBtn.addEventListener("click", toggleModal);
// refs.closeModalBtn.addEventListener("click", toggleModal);
// refs.openModalMonstrBaby.addEventListener("click", toggleModalMonstrBaby);
// refs.closedModalMonstrBAby.addEventListener("click", toggleModalMonstrBaby);
// refs.backdrop.addEventListener("click", toggleModalMonstrBaby);

// function toggleModal() {
//   refs.modal.classList.toggle("is-hidden");
//   refs.modalTwo.classList.toggle("is-hidden-two");
// }
// function toggleModalMonstrBaby(e) {
//   e.preventDefault();
//   refs.modalMonstr.classList.toggle("is-open-pidr");
//   refs.backdrop.classList.toggle("backdrop-modal");
// }

const buttons = document.querySelectorAll("button");
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(btn);
    const card = btn.closest(".list-table");
    const hiddenText = card.querySelector(".hidden-text");
    if (!hiddenText.classList.contains("open")) {
      hiddenText.classList.add("open");
    } else {
      hiddenText.classList.remove("open");
    }
  });
});
