const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // stop page reload

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "") {
    alert("Name is required");
    return;
  }

  if (email === "") {
    alert("Email is required");
    return;
  }

  // simple email validation
  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email");
    return;
  }

  if (message === "") {
    alert("Message cannot be empty");
    return;
  }

  alert("Message sent successfully ✅");

  // reset form
  form.reset();
});
