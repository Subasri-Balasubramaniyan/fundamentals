// ===== script.js =====
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const successAlert = document.getElementById("successAlert");

  // ----- Form Submission -----
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let valid = true;

    // Validate Name
    const nameInput = document.getElementById("name");
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full name is required");
      valid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    const emailInput = document.getElementById("email");
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email address");
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Message
    const messageInput = document.getElementById("message");
    if (messageInput.value.trim().length < 5) {
      showError(messageInput, "Message must be at least 5 characters");
      valid = false;
    } else {
      clearError(messageInput);
    }

    if (valid) {
      showSuccessAlert();
      form.reset();
    }
  });

  // ----- Show/Hide Error -----
  function showError(input, message) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error-text")) {
      error = document.createElement("div");
      error.className = "error-text text-danger mt-1";
      input.insertAdjacentElement("afterend", error);
    }
    error.textContent = message;
    input.classList.add("is-invalid");
  }

  function clearError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error-text")) {
      error.remove();
    }
    input.classList.remove("is-invalid");
  }

  // ----- Success Alert -----
  function showSuccessAlert() {
    successAlert.classList.remove("d-none");

    // Optional: add fade effect
    successAlert.style.opacity = 1;
    setTimeout(() => {
      successAlert.style.transition = "opacity 0.5s";
      successAlert.style.opacity = 0;
      setTimeout(() => successAlert.classList.add("d-none"), 500);
    }, 3000);
  }

  // ----- Navbar Toggle -----
  const navbarToggler = document.querySelector(".navbar-toggler");
  if (navbarToggler) {
    navbarToggler.addEventListener("click", () => {
      console.log("🔽 Navbar toggled!");
    });
  }

  // ----- Async API Fetch Example -----
  const footer = document.querySelector("footer");
  const fetchBtn = document.createElement("button");
  fetchBtn.textContent = "Load Nature Facts";
  fetchBtn.className = "btn btn-light mt-3";
  footer.appendChild(fetchBtn);

  const resultsDiv = document.createElement("div");
  resultsDiv.className = "container mt-3";
  footer.insertAdjacentElement("afterend", resultsDiv);

  fetchBtn.addEventListener("click", async () => {
    resultsDiv.innerHTML = "<p>Loading facts...</p>";
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=3"
      );
      const data = await response.json();

      resultsDiv.innerHTML = "";
      data.forEach((post) => {
        const card = document.createElement("div");
        card.className = "card my-2 shadow-sm";
        card.innerHTML = `
          <div class="card-body">
            <h5 class="card-title text-primary">${post.title}</h5>
            <p class="card-text">${post.body}</p>
          </div>
        `;
        resultsDiv.appendChild(card);
      });
    } catch (error) {
      resultsDiv.innerHTML =
        "<p class='text-danger'>Failed to load facts.</p>";
      console.error(error);
    }
  });
});
