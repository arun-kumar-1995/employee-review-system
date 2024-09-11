document.addEventListener("DOMContentLoaded", handleFormSubmit);

function handleFormSubmit() {
  document.addEventListener("submit", async (event) => {
    const form = event.target;
    if (form && form.classList.contains("form")) {
      event.preventDefault();
      const formData = new FormData(form);
      console.log(Object.fromEntries(formData));
      const action = form.action;
      const method = form.method || "POST";

      // making request
      try {
        const response = await fetch(action, {
          method: method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Object.fromEntries(formData)),
        });

        const data = await response.json();
        console.log(data);
        // display flash message based on status
        displayFlashMessage(data);
      } catch (err) {
        console.log(err);
      }
    }
  });
}

// display flash message based on status
function displayFlashMessage(data) {
  const flashMessage = data.message;
  const status = data.status;
  console.log(flashMessage);
}
