const register = () =>{



    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("registerForm");
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const confirmPassword = document.getElementById("confirmPassword").value;
            const email = document.getElementById("email").value;
            
            console.log("User Registered:", username, password);
            alert(`Welcome, ${username}!`);
        });
    });

    if (!username) {
        return 'Username is required';
    }
    if (!email) {
        return 'Email is required';
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return 'Email is not valid';
    }

    if (!password) {
        return 'Password is required';
    }
    else if ((password.length < 6) || (password.length > 20)) {
        return 'Password must be at least 6 characters long';
    }

    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }

};