document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    const nameError = document.getElementById('name-error');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const togglePasswordBtn = document.querySelector('.toggle-password');

    // Email validation function
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    // Password strength validation
    const isStrongPassword = (password) => {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        const isLongEnough = password.length >= 8;

        return {
            isValid: hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && isLongEnough,
            strength: [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar, isLongEnough].filter(Boolean).length
        };
    };

    // Show/Hide password functionality
    togglePasswordBtn.addEventListener('click', () => {
        const type = passwordInput.type === 'password' ? 'text' : 'password';
        passwordInput.type = type;
        togglePasswordBtn.querySelector('i').classList.toggle('fa-eye');
        togglePasswordBtn.querySelector('i').classList.toggle('fa-eye-slash');
    });

    // Real-time name validation
    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            nameInput.setAttribute('aria-invalid', 'true');
        } else if (nameInput.value.trim().length < 2) {
            nameError.textContent = 'Name must be at least 2 characters';
            nameInput.setAttribute('aria-invalid', 'true');
        } else {
            nameError.textContent = '';
            nameInput.setAttribute('aria-invalid', 'false');
        }
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
        const { isValid, strength } = isStrongPassword(passwordInput.value);
        
        if (passwordInput.value.trim() === '') {
            passwordError.textContent = 'Password is required';
        } else if (!isValid) {
            passwordError.textContent = 'Password must contain at least 8 characters, including uppercase, lowercase, numbers, and special characters';
        } else {
            passwordError.textContent = '';
        }

        // Update confirm password validation
        if (confirmPasswordInput.value) {
            if (confirmPasswordInput.value !== passwordInput.value) {
                confirmPasswordError.textContent = 'Passwords do not match';
            } else {
                confirmPasswordError.textContent = '';
            }
        }
    });

    // Real-time confirm password validation
    confirmPasswordInput.addEventListener('input', () => {
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            confirmPasswordInput.setAttribute('aria-invalid', 'true');
        } else {
            confirmPasswordError.textContent = '';
            confirmPasswordInput.setAttribute('aria-invalid', 'false');
        }
    });

    // Form submission
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required';
            isValid = false;
        }

        // Validate email
        if (emailInput.value.trim() === '') {
            emailError.textContent = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address';
            isValid = false;
        }

        // Validate password
        if (!isStrongPassword(passwordInput.value).isValid) {
            passwordError.textContent = 'Please create a stronger password';
            isValid = false;
        }

        // Validate confirm password
        if (confirmPasswordInput.value !== passwordInput.value) {
            confirmPasswordError.textContent = 'Passwords do not match';
            isValid = false;
        }

        // Validate terms acceptance
        if (!document.getElementById('terms').checked) {
            alert('Please accept the Terms & Conditions');
            isValid = false;
        }

        if (isValid) {
            // Store user data
            const userData = {
                name: nameInput.value,
                email: emailInput.value,
                signupDate: new Date().toISOString()
            };
            
            localStorage.setItem('userData', JSON.stringify(userData));
            localStorage.setItem('isSignedIn', 'true');
            localStorage.setItem('userEmail', emailInput.value);

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.textContent = 'Account created successfully!';
            successMessage.style.color = 'var(--success-color)';
            successMessage.style.textAlign = 'center';
            successMessage.style.marginTop = '1rem';
            form.appendChild(successMessage);

            // Redirect to home page
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 1500);
        }
    });
});
