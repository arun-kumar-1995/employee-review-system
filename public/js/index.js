document.getElementById("hamburger").addEventListener("click", function () {
  this.classList.toggle("open");
});

const modal = document.getElementById('editModal');
    const editButtons = document.querySelectorAll('.edit-btn');
    const cancelBtn = document.getElementById('cancelBtn');

    // When any edit button is clicked, show the modal
    editButtons.forEach((button) => {
      button.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show the modal
      });
    });

    // When the cancel button is clicked, hide the modal
    cancelBtn.addEventListener('click', () => {
      modal.style.display = 'none'; // Hide the modal
    });

    // Optionally close the modal by clicking outside of it
    window.onclick = function (event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    };