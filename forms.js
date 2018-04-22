function submitContact() {
	var firstName = getFirstName();
	var lastName = getLastName();
	var email = getEmail();
	var subject = getSubject();
	var message = getMessage();

	var writeString = "";
	if (!(checkFirstName(firstName))) {
		writeString += "First Name: Your First Name should only include letters and spaces.\n"
	}

	if (!(checkLastName(lastName))) {
		writeString += "Last Name: Your Last Name should only include letters and spaces.\n"
	}

	if (!(checkEmail(email))) {
		writeString += "Email: This is not a valid email.\n"
	}

	if (!(checkSubject(subject))) {
		writeString += "Subject: The subject is not valid.\n"
	}

	if (!(checkMessage(message))) {
		writeString += "Message: The message is not valid.\n"
	}

	if (writeString === "") {
		window.location.href = "mailto:" + email + "?subject=" + subject + "&body=" + message;
		return true;
	} else {
		displayMessage(writeString);
		return false;
	}

}

function getFirstName() {
	return document.getElementById("firstName").value.trim();
}

function getLastName() {
	return document.getElementById("lastName").value.trim();
}

function getEmail() {
	return document.getElementById("email").value;
}

function getSubject() {
	return document.getElementById("subject").value;
}

function getMessage() {
	return document.getElementById("message").value;
}

function displayMessage(message) {
	document.getElementById("wrongInput").innerHTML = message;
}

function checkFirstName(checker) {
	return /^[A-Za-z\s]$/.test(checker);
}

function checkLastName(checker) {
	return /^[A-Za-z\s]$/.test(checker);
}

function checkEmail(checker) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(checker);
}

function checkSubject(checker) {
	//return /^.{1,}$/.test(checker)
	return true;
}

function checkMessage(checker) {
	//return /^.{1,}$/.test(checker)
	return true;
}