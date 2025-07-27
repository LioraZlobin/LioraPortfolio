const contactBtn = document.getElementById("contactBtn");
const contactModal = document.getElementById("contactModal");
const closeModal = document.getElementById("closeModal");

contactBtn.addEventListener("click", () => {
    contactModal.style.display = "block";
});

closeModal.addEventListener("click", () => {
    contactModal.style.display = "none";
});

window.addEventListener("click", (e) => {
    if (e.target === contactModal) {
        contactModal.style.display = "none";
    }
});
