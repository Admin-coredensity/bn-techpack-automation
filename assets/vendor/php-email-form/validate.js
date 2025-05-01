document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".php-email-form");
    const loading = form.querySelector(".loading");
    const errorMessage = form.querySelector(".error-message");
    const sentMessage = form.querySelector(".sent-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        // Show loading
        loading.style.display = "block";
        errorMessage.style.display = "none";
        sentMessage.style.display = "none";

        const formData = new FormData(form);

        fetch(form.getAttribute("action"), {
            method: "POST",
            body: formData,
        })
            .then(response => {
                loading.style.display = "none";
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.text(); // or response.json() if PHP returns JSON
            })
            .then(data => {
                if (data.toLowerCase().includes("successfully")) {
                    sentMessage.style.display = "block";
                    form.reset();
                } else {
                    // throw new Error(data);
                }
            })
            .catch(error => {
                //   errorMessage.style.display = "block";
                //   errorMessage.innerText = error.message || "Form submission failed";
            });
    });
});

//   show error on toast
document.querySelector('.php-email-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData
        });

        const result = await response.text();

        // Check response for success or error
        if (!response.ok || result.toLowerCase().includes("could not") || result.toLowerCase().includes("required")) {
            showToast(result || "Something went wrong!");
        } else {
            showToast("Email sent successfully!", "success");
            form.reset();
        }
    } catch (error) {
        showToast("Error: " + error.message);
    }
});

// Show Toast Function
function showToast(message, type = "danger") {
    const toastEl = document.getElementById('formToast');
    const toastBody = document.getElementById('toast-message');

    toastBody.textContent = message;
    toastEl.classList.remove("bg-danger", "bg-success");
    toastEl.classList.add(type === "success" ? "bg-success" : "bg-danger");

    const toast = new bootstrap.Toast(toastEl);
    toast.show();
}