// Validate signup form
document.getElementById('signupForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert('Signup successful!');
    // Here, you can make an AJAX call to your server to submit the form data
});

// Validate login form
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('hello there')

    alert('Login successful!');
    // Here, you can make an AJAX call to your server to submit the form data
});
