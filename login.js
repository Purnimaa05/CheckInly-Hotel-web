document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("loginForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const messageBox = document.getElementById("message");

    // Dummy validation: Replace with real validation later
    if (email === "admin@checkinly.com" && password === "admin123") {
      messageBox.style.color = "green";
      messageBox.textContent = "Login Successful! Redirecting...";

      // Redirect to reserve page after 1.5 seconds
      setTimeout(() => {
        window.location.href = "reserve.html";
      }, 1500);
    } else {
      messageBox.style.color = "red";
      messageBox.textContent = "Invalid email or password. Try again.";
    }
  });
});

