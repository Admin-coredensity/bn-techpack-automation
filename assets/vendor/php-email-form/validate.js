document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".php-email-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name-field").value.trim();
    const email = document.getElementById("email-field").value.trim();
    const subject = document.getElementById("subject-field").value.trim();
    const message = document.getElementById("message-field").value.trim();

    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");

    // Show loading
    loading.style.display = "block";
    errorMessage.style.display = "none";
    sentMessage.style.display = "none";

    // Simple validation
    if (!name || !email || !subject || !message) {
      errorMessage.innerText = "Please fill in all fields.";
      errorMessage.style.display = "block";
      loading.style.display = "none";
      return;
    }

    // Send form via AJAX
    fetch("../../../forms/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        name,
        email,
        subject,
        message
      })
    })
    .then(res => res.text())
    .then(data => {
      loading.style.display = "none";
      if (data.trim() === "OK") {
        sentMessage.style.display = "block";
        form.reset();
      } else {
        errorMessage.innerText = data;
        errorMessage.style.display = "block";
      }
    })
    .catch(err => {
      loading.style.display = "none";
      errorMessage.innerText = "There was an error sending the message.";
      errorMessage.style.display = "block";
    });
  });
});
