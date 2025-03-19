document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const dob = document.getElementById("dob");
    const gender = document.querySelector('input[name="gender"]:checked');
    const terms = document.getElementById("terms");
    const successMessage = document.getElementById("successMessage");

    let isValid = true;

    
    if (!/^[a-zA-Z0-9]{4,}$/.test(username.value)) {
        username.classList.add("is-invalid");
        isValid = false;
    } else {
        username.classList.remove("is-invalid");
    }

    
    if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        email.classList.add("is-invalid");
        isValid = false;
    } else {
        email.classList.remove("is-invalid");
    }

   
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password.value)) {
        password.classList.add("is-invalid");
        isValid = false;
    } else {
        password.classList.remove("is-invalid");
    }

    
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add("is-invalid");
        isValid = false;
    } else {
        confirmPassword.classList.remove("is-invalid");
    }

    
    const dobDate = new Date(dob.value);
    const age = new Date().getFullYear() - dobDate.getFullYear();
    if (isNaN(dobDate) || age < 18) {
        dob.classList.add("is-invalid");
        isValid = false;
    } else {
        dob.classList.remove("is-invalid");
    }

    
    if (!gender) {
        document.querySelector('input[name="gender"]').classList.add("is-invalid");
        isValid = false;
    } else {
        document.querySelector('input[name="gender"]').classList.remove("is-invalid");
    }

    
    if (!terms.checked) {
        terms.classList.add("is-invalid");
        isValid = false;
    } else {
        terms.classList.remove("is-invalid");
    }

    
    if (isValid) {
        const userDetails = {
            username: username.value,
            email: email.value,
            dob: dob.value,
            gender: gender.value,
        };
        localStorage.setItem("userDetails", JSON.stringify(userDetails));
        successMessage.classList.remove("d-none");
        successMessage.textContent = "Form submitted successfully!";
    }
});