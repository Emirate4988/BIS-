document.querySelector('.dropbtn').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

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

    alert('Login successful!');
    // Here, you can make an AJAX call to your server to submit the form data
});
