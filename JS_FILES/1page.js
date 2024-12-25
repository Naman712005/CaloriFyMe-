
let wrapper = document.querySelector('.wrapper'),
    signUpLink = document.querySelector('.link .signup-link'),
    signInLink = document.querySelector('.link .signin-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signin');
    wrapper.classList.remove('animated-signup');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animated-signup');
    wrapper.classList.remove('animated-signin');
});

// Validation function
function validateForm() {
    const passwordIn = document.forms["myForm1"]["passwordIn"].value;
    const usernameUp = document.forms["myForm2"]["usernameUp"].value;
    const emailUp = document.forms["myForm2"]["emailUp"].value;
    const passwordUp = document.forms["myForm2"]["passwordUp"].value;
    const confirmPassword = document.forms["myForm2"]["confirmPassword"].value;
    
    const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    // Login form validation
    if (passwordIn) {
        if (passwordIn.length < 4) {
            alert("Password must be at least 4 characters");
            return false;
        }
        // If all validations pass, redirect to home.html
        window.location.href = "/index.html/2page.html"; // Change to your intended URL
        return true;
    }
    // Sign-up form validation
    else if (usernameUp && emailUp && passwordUp && confirmPassword) {
        if (!emailPattern.test(emailUp)) {
            alert("Invalid email");
            return false;
        }
        if (passwordUp.length < 4) {
            alert("Password must be at least 4 characters");
            return false;
        }
        if (confirmPassword.length < 4) {
            alert("Confirm password must be at least 4 characters");
            return false;
        }
        if (passwordUp !== confirmPassword) {
            alert("Passwords do not match");
            return false;
        }

        // If all validations pass, redirect to home.html
        window.location.href = "/index.html/2page.html"; // Change to your intended URL
        return true;
    }

}

// Attach validation function to forms
const signUpForm = document.forms["myForm2"];
const signInForm = document.forms["myForm1"];

if (signUpForm) {
    signUpForm.onsubmit = validateForm;
}

if (signInForm) {
    signInForm.onsubmit = validateForm;
}