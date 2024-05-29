document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "/login";
  }
  const addCampaignForm = document.getElementById("add-campaign-container");
  const errorMessage = document.getElementById("error-message");

  addCampaignForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const imgUrl = document.getElementById("img-url").value;

    try {
      const response = await fetch("/campaigns", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, imgUrl }),
      });

      if (response.ok) {
        window.location.href = "/kampanyalar"; // Kampanya başarıyla eklendiyse, kampanyalar sayfasına yönlendirme
      } else {
        const error = await response.json();
        errorMessage.innerText = error.message;
      }
    } catch (err) {
      errorMessage.innerText = "Something went wrong. Please try again later.";
    }
  });
});
