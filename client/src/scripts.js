const openPopUpButtons = document.querySelectorAll("[data-modal-target]");
const closePopUpButtons = document.querySelectorAll("[data-close-button]");

console.log(openPopUpButtons);
console.log(closePopUpButtons);

const overlay = document.getElementById("overlay");

openPopUpButtons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(button);
        const modal = document.querySelector(button.dataset.modalTarget);
        openPopUp(modal);
    });
});

closePopUpButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const modal = button.closest(".pop-up");
        closePopUp(modal);
    });
});

function openPopUp(modal) {
    if (modal == null) {
        console.log("modal is null on open");
    } else {
        modal.classList.add("active");
        overlay.classList.add("active");
    }
    console.log("Hi");
}

function closePopUp(popup) {
    if (modal == null) {
        console.log("modal is null on close");
    } else {
        modal.classList.remove("active");
        overlay.classList.remove("active");
    }
}
