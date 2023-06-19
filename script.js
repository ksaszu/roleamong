// script.js
const roleSearchInput = document.getElementById("roleSearch");
const roleItems = document.querySelectorAll(".role-list li");

roleSearchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  roleItems.forEach((item) => {
    const roleText = item.textContent.toLowerCase();
    if (roleText.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});
