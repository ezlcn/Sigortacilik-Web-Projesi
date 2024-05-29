const extraOption = document.getElementById("extra-option");
const loggedIn = localStorage.getItem("loggedIn");

if (loggedIn) {
  extraOption.style.display = "block"; // Eğer kullanıcı giriş yapmışsa, ekstra seçeneği göster
} else {
  extraOption.style.display = "none"; // Eğer kullanıcı giriş yapmamışsa, ekstra seçeneği gizle
}
