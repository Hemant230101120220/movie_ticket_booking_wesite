document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const togglePasswordBtn = document.querySelector('.toggle-password');

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Show/Hide password functionality
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePasswordBtn.querySelector('i').classList.toggle('fa-eye');
        togglePasswordBtn.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Real-time email validation
    emailInput.addEventListener('input', () => {
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.setAttribute('aria-invalid', 'true');
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.setAttribute('aria-invalid', 'true');
        } else {
            emailError.textContent = '';
            emailInput.setAttribute('aria-invalid', 'false');
        }
    });

    // Real-time password validation
    passwordInput.addEventListener('input', () => {
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.setAttribute('aria-invalid', 'true');
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.setAttribute('aria-invalid', 'true');
        } else {
            passwordError.textContent = '';
            passwordInput.setAttribute('aria-invalid', 'false');
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            emailInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            emailInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        }

        // Validate password
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            passwordInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        } else if (passwordInput.value.length < 6) {
            passwordError.textContent = 'Password must be at least 6 characters';
            passwordInput.setAttribute('aria-invalid', 'true');
            isValid = false;
        }

        if (isValid) {
            // Store auth state
            localStorage.setItem('isSignedIn', 'true');
            localStorage.setItem('userEmail', emailInput.value);
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Sign in successful!';
            successMessage.style.color = 'var(--success-color)';
            successMessage.style.textAlign = 'center';
            successMessage.style.marginTop = '1rem';
            form.appendChild(successMessage);

            // Redirect to home page after successful login
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    });
});
