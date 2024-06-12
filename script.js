let uName = document.querySelector("#name");
let password = document.querySelector("#password");
let form = document.querySelector(".form");
let errorMessage = document.querySelector(".error");

form.addEventListener("submit", (e) => {
	let messages = [];

	if (uName.value === "" || uName.value == null) {
		messages.push("Name is required");
	}

	if (password.value.length < 6) {
		messages.push("Password must be at least 6 characters long. ");
	}

	if (password.value.length >= 20) {
		messages.push("Password should be less then 20 characters. ");
	}

	if (password.value === "password") {
		messages.push("User password should not be password");
	}

	if (messages.length > 0) {
		e.preventDefault();
		errorMessage.textContent = messages.join(", ");
	}
});
