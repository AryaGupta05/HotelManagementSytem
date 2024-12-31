document.getElementById('profileForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username');
    const email = document.getElementById('email');

    alert('Profile updated successfully!');
    // Perform any necessary actions, like saving the updated data.
});
