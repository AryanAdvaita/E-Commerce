document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registerForm");

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) =>
    password.length >= 6 &&
    password.length <= 20 &&
    /\d/.test(password) &&
    /[a-zA-Z]/.test(password);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    //const confirmPassword = document.getElementById("confirmPassword").value;

    const errors = [];

    if (!username) errors.push("Username is required");
    if (!email) errors.push("Email is required");
    else if (!validateEmail(email)) errors.push("Email is not valid");

    if (!password) errors.push("Password is required");
    else if (!validatePassword(password))
      errors.push("Password must be 6–20 chars and contain letters & numbers");

    //if (password !== confirmPassword) errors.push("Passwords do not match");

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    alert(`Welcome, ${username}!`);

    // 👇 redirect after a short delay so alert shows first
    setTimeout(() => {
      window.location.href = "index.html"; // or "/" if that's your home
    }, 100);
  });
});