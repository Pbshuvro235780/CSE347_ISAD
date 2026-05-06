 function validateForm() {
            const firstname = document.getElementById('firstname').value.trim();
            const lastname = document.getElementById('lastname').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phonenumber').value.trim();
            const user = document.getElementById('user').value.trim();
            const pwd = document.getElementById('pwd').value;
            const department = document.getElementById('department').value;
            const genderChecked = document.querySelector('input[name="gender"]:checked');
            const errorDiv = document.getElementById('errorMsg');

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const phonePattern = /^[0-9]{11}$/;

            let messages = [];

            if (!firstname) messages.push("First name is required.");
            if (!lastname) messages.push("Last name is required.");
            if (!emailPattern.test(email)) messages.push("Enter a valid email.");
            if (!phonePattern.test(phone)) messages.push("Enter a valid phone number (10–15 digits).");
            if (!user) messages.push("Username is required.");
            if (pwd.length < 6) messages.push("Password must be at least 6 characters.");
            if (!genderChecked) messages.push("Select your gender.");
            if (!department) messages.push("Select your department.");

            if (messages.length > 0) {
                errorDiv.innerHTML = messages.join("<br>");
                return false;
            }

            alert("Form submitted successfully!");
            return true;
        }