document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("login-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const errorMessage = document.getElementById("error-message");

      try {
        const response = await fetch("/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem("loggedIn", data.loggedIn);
          window.location.href = "/"; // veya başka bir sayfaya yönlendirme
        } else {
          const error = await response.json();
          errorMessage.innerText = error.message;
        }
      } catch (err) {
        errorMessage.innerText =
          "Something went wrong. Please try again later.";
      }
    });
});
