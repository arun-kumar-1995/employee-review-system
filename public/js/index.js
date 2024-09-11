document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
});



//edit modal
const editModal = document.getElementById("editModal");
const editButtons = document.querySelectorAll(".edit-btn");
const cancelBtn = document.getElementById("cancelBtn");

// When any edit button is clicked, show the modal
editButtons.forEach((button) => {
  button.addEventListener("click", () => {
    editModal.style.display = "flex"; // Show the modal
  });
});

// When the cancel button is clicked, hide the modal
cancelBtn.addEventListener("click", () => {
  editModal.style.display = "none"; // Hide the modal
});

// Optionally close the modal by clicking outside of it
window.onclick = function (event) {
  if (event.target === modal) {
    editModal.style.display = "none";
  }
};
