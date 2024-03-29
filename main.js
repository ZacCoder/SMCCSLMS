document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const username = document.getElementById('id').value;
        const password = document.getElementById('password').value;

        if (username === '123456789' && password === 'password') {
            window.location.href = 'index.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    });
});