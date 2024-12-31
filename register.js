document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let valid = true;

    if (!email.value || !validateEmail(email.value)) {
        email.classList.add('is-invalid');
        valid = false;
    } else {
        email.classList.remove('is-invalid');
    }

    if (!password.value) {
        password.classList.add('is-invalid');
        valid = false;
    } else {
        password.classList.remove('is-invalid');
    }

    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('is-invalid');
        valid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
    }

    if (valid) {
        alert('Registration successful!');
        // Proceed with registration
    }
});

function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}
