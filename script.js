document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;

    var passwordField = document.getElementById('password');
    var confirmPasswordField = document.getElementById('confirm-password');

    if(password !== confirmPassword) {
        alert("Passwords do not match.");
        passwordField.classList.add('input-error');
        confirmPasswordField.classList.add('input-error');
        setTimeout(function() {
            passwordField.classList.remove('input-error');
            confirmPasswordField.classList.remove('input-error');
        }, 500);
        return false;
    }

    if(password.length < 8) {
        alert("Password must be at least 8 characters long.");
        passwordField.classList.add('input-error');
        setTimeout(function() {
            passwordField.classList.remove('input-error');
        }, 500);
        return false;
    }

    setTimeout(function() {
        localStorage.setItem('userRegistration', JSON.stringify({ username, email }));
        alert("Registration successful!");
        window.location.reload(); // Refresh the page or redirect the user
    }, 1000);
});

document.getElementById('custom-checkbox').addEventListener('change', function(event) {
    let checkmark = document.querySelector('.custom-checkbox .checkmark');
    if(this.checked) {
        checkmark.innerHTML = '&#10003;'; // Change to a check symbol when checked
    } else {
        checkmark.innerHTML = '&#43;'; // Change back to add symbol when not checked
    }
});
