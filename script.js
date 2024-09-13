function validatePassword() {
    var password = prompt("Enter your password:");
    
    var errors = [];

    if (password.length < 6) {
        errors.push("Password must be at least 6 characters long.");
    }

    var hasLetter = /[a-zA-Z]/.test(password);
    var hasNumber = /\d/.test(password);

    if (!hasLetter) {
        errors.push("Password must contain at least one letter.");
    }

    if (!hasNumber) {
        errors.push("Password must contain at least one number.");
    }

    if (errors.length === 0) {
        alert("Password is valid.");
    } else {
        alert("Password is invalid:\n" + errors.join("\n"));
    }
}

validatePassword();