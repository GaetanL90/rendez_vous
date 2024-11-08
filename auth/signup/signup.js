// signup.js

document.addEventListener("DOMContentLoaded", () => {
    const roleSelection = document.getElementById('role');
    const continueBtn = document.getElementById('continueBtn');
    const personalInfo = document.getElementById('personalInfo');
    const roleSpecificInfo = document.getElementById('roleSpecificInfo');
    const doctorFields = document.getElementById('doctorFields');
    const patientFields = document.getElementById('patientFields');
    const submitBtn = document.getElementById('submitBtn');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    // Enable the continue button when role is selected
    roleSelection.addEventListener('change', () => {
        continueBtn.disabled = !roleSelection.value;
    });

    // Show personal info form when role is selected
    continueBtn.addEventListener('click', () => {
        document.getElementById('roleSelection').style.display = 'none';
        personalInfo.style.display = 'block';
    });

    // Show role-specific info fields based on selected role
    roleSelection.addEventListener('change', () => {
        if (roleSelection.value === 'doctor') {
            doctorFields.style.display = 'block';
            patientFields.style.display = 'none';
        } else if (roleSelection.value === 'patient') {
            doctorFields.style.display = 'none';
            patientFields.style.display = 'block';
        } else {
            doctorFields.style.display = 'none';
            patientFields.style.display = 'none';
        }
    });

    // Validate email and password match before enabling the submit button
    const validateForm = () => {
        const emailValid = emailInput.validity.valid;
        const passwordMatch = passwordInput.value === confirmPasswordInput.value;
        const allRequiredFilled = [...document.querySelectorAll('input[required]')]
            .every(input => input.value.trim() !== '');

        submitBtn.disabled = !(emailValid && passwordMatch && allRequiredFilled);
    };

    // Event listeners for real-time validation
    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);
    [...document.querySelectorAll('input[required]')].forEach(input =>
        input.addEventListener('input', validateForm)
    );

    // Handle form submission (you can modify this part to handle form data with your back-end)
    document.getElementById('signupForm').addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        formData.append('role', roleSelection.value);

        // Submit the form data via fetch or your preferred method
        try {
            const response = await fetch('/auth/signup', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                alert("Signup successful!");
                window.location.href = '/auth/login'; // Redirect to login page
            } else {
                alert("Signup failed. Please try again.");
            }
        } catch (error) {
            console.error("Error during signup:", error);
            alert("Signup failed. Please try again.");
        }
    });
});
