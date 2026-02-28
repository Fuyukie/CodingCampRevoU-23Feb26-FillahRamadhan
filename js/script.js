// =============================
// Greeting Name
// =============================

let storedName = localStorage.getItem("username");

if (!storedName) {
  const user = prompt("Enter your name:");
  if (user && user.trim() !== "") {
    localStorage.setItem("username", user.trim());
    storedName = user.trim();
  }
}

if (storedName) {
  document.getElementById("username").innerText = storedName;
}


// =============================
// Load Saved Form Data
// =============================

function displayData(data) {
  document.getElementById("output").innerHTML = `
    <p><strong>Name:</strong> ${data.name}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Phone:</strong> ${data.phone}</p>
    <p><strong>Message:</strong> ${data.message}</p>
  `;
}

const savedData = JSON.parse(localStorage.getItem("formData"));

if (savedData) {
  displayData(savedData);
}


// =============================
// Form Submit
// =============================

document.getElementById("messageForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !phone || !message) {
    alert("All fields must be filled!");
    return;
  }

  const formData = { name, email, phone, message };

  localStorage.setItem("formData", JSON.stringify(formData));

  displayData(formData);

  this.reset();
});