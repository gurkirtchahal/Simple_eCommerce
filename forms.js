function submitContact() {
	var firstName = getFirstName();
	var lastName = getLastName();
	var email = getEmail();
	var subject = getSubject();
	var message = getMessage();

	var writeString = "";
	if (!(checkFirstName(firstName))) {
		writeString += "<b>First Name</b> - Your First Name should only include letters and spaces.<br /><br />"
	}

	if (!(checkLastName(lastName))) {
		writeString += "<b>Last Name</b> - Your Last Name should only include letters and spaces.<br /><br />"
	}

	if (!(checkEmail(email))) {
		writeString += "<b>Email</b> - This is not a valid email.<br /><br />"
	}

	if (!(checkSubject(subject))) {
		writeString += "<b>Subject</b> - The subject is not valid.<br /><br />"
	}

	if (!(checkMessage(message))) {
		writeString += "<b>Message</b> - The message is not valid.<br /><br />"
	}

	if (writeString === "") {
		window.open("mailto:" + email + "?subject=" + subject + "&body=" + message);
		return true;
	} else {
		displayMessage(writeString);
		return false;
	}

}

function submitPurchase() {
	var firstName = getFirstName();
	console.log(firstName);
	var lastName = getLastName();
	console.log(lastName);
	var email = getEmail();
	console.log(email);
	var phone = getPhone();
	console.log(phone);
	var shippingAddress = getShippingAddress();
	console.log(shippingAddress);
	var shippingCity = getShippingCity();
	console.log(shippingCity);
	var shippingState = getShippingState();
	console.log(shippingState);
	var shippingZip = getShippingZip();
	console.log(shippingZip);
	var shippingType = getShippingType();
	console.log(shippingType);
	var quantity = getQuantity();
	console.log(quantity);
	var cardholder = getCardholderName();
	console.log(cardholder);
	var creditCard = getCreditCard();
	console.log(creditCard);
	var cvv = getCVV();
	console.log(cvv);
	var expirationDate = getExpirationDate();
	console.log(expirationDate);
	var billingAddress = getBillingAddress();
	console.log(billingAddress);
	var billingCity = getBillingCity();
	console.log(billingCity);
	var billingState = getBillingState();
	console.log(billingState);
	var billingZip = getBillingZip();
	console.log(billingZip);

	var writeString = "";
	if (!(checkFirstName(firstName))) {
		writeString += "<b>First Name</b> - Your First Name should only include letters and spaces.<br /><br />"
	}

	if (!(checkLastName(lastName))) {
		writeString += "<b>Last Name</b> - Your Last Name should only include letters and spaces.<br /><br />"
	}

	if (!(checkEmail(email))) {
		writeString += "<b>Email</b> - This is not a valid email.<br /><br />"
	}

	if (!(checkPhone(phone))) {
		writeString += "<b>Phone Number</b> - use format XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX, or XXXXXXXXXX<br /><br />"
	}

	if (!(checkAddress(shippingAddress))) {
		writeString += "<b>Shipping Address</b> - The shipping address always starts with a letter or number and cannot be empty.<br /><br />"
	}

	if (!(checkCity(shippingCity))) {
		writeString += "<b>Shipping City</b> - The City should only include letters and spaces.<br /><br />"
	}
	
	if (!(checkState(shippingState))) {
		writeString += "<b>Shipping State</b> - The State should be in the following format XX where X is a capital letter.<br /><br />"
	}
	
	if (!(checkZip(shippingZip))) {
		writeString += "<b>Shipping Zip</b> - The Zip code should be in the following formats XXXXX, XXXXX-XXXX, or XXXXX XXXX<br /><br />"
	}

	if (!(checkShippingType(shippingType))) {
		writeString += "<b>Shipping Type</b> - Please choose an option.<br /><br />"
	}
	
	if (!(checkQuantity(quantity))) {
		writeString += "<b>Quantity</b> - The quantity only takes digits.<br /><br />"
	}
	
	if (!(checkCardholder(cardholder))) {
		writeString += "<b>Cardholder</b> - The Cardholder may only have letters, spaces, commas, and periods.<br /><br />"
	}
	
	if (!(checkCreditCard(creditCard))) {
		writeString += "<b>Credit Card</b> - Please enter digits in the following formats XXXXXXXXXXXXXXXX. XXXX-XXXX-XXXX-XXXX. or XXXX XXXX XXXX XXXX<br /><br />"
	}
	
	if (!(checkCVV(cvv))) {
		writeString += "<b>CVV</b> - Please enter digits in the following format XXX<br /><br />"
	}
	
	if (!(checkExpiration(expirationDate))) {
		writeString += "<b>Expiration Date</b> - Please enter in the following format with valid months and years MM/YY, or MM/YYYY<br /><br />"
	}

	if (!(checkAddress(billingAddress))) {
		writeString += "<b>Billing Address</b> - The Address always starts with a letter or number and cannot be empty.<br /><br />"
	}

	if (!(checkCity(billingCity))) {
		writeString += "<b>Billing City</b> - The City should only include letters and spaces.<br /><br />"
	}
	
	if (!(checkState(billingState))) {
		writeString += "<b>Billing State</b> - The State should be in the following format XX where X is a capital letter.<br /><br />"
	}
	
	if (!(checkZip(billingZip))) {
		writeString += "<b>Billing Zip</b> - The Zip code should be in the following formats XXXXX, XXXXX-XXXX, or XXXXX XXXX<br /><br />"
	}

	if (writeString === "") {
		window.open("mailto:" + email + "?subject=Yay&body=Okay");
		var total =  parseInt(quantity)*getPrice();
		displayMessageGood("Your total is " + total.toString());
		return true;
	} else {
		displayMessage(writeString);
		return false;
	}

}

function getFirstName() {
	return document.getElementById("firstName").value;
}

function getLastName() {
	return document.getElementById("lastName").value;
}

function getEmail() {
	return document.getElementById("email").value;
}

function getPrice() {
	p = document.getElementById("price").value;
	while(p.charAt(0) === '$'){
 		p = p.substr(1);
	}
	return parseFloat(p);
}

function getSubject() {
	return document.getElementById("subject").value;
}

function getMessage() {
	return document.getElementById("message").value;
}

function getPhone() {
	return document.getElementById("phone").value;
}

function getShippingAddress() {
	return document.getElementById("shipAddress").value;
}

function getShippingCity() {
	return document.getElementById("shipCity").value;
}

function getShippingState() {
	return document.getElementById("shipState").value;
}

function getShippingZip() {
	return document.getElementById('shipZip').value;
}

function getShippingType() {
	var days_1 = document.getElementById('shipType1')
	var days_2 = document.getElementById('shipType2')
	var days_6 = document.getElementById('shipType3')
	
	if (days_1.checked){
		return days_1.value;
	} else if (days_2.checked){
		return days_2.value;
	} else if (days_6.checked){
		return days_6.value;
	} else {
		return "none";
	}
}

function getQuantity() {
	return document.getElementById("quantity").value;
}

function getCardholderName() {
	return document.getElementById("creditName").value;
}

function getCreditCard() {
	return document.getElementById("credit").value;
}

function getCVV() {
	return document.getElementById("cvv").value;
}

function getExpirationDate() {
	return document.getElementById("expiration").value;
}

function getBillingAddress() {
	return document.getElementById("billAddress").value;
}

function getBillingCity() {
	return document.getElementById("billCity").value;
}

function getBillingState() {
	return document.getElementById("billState").value;
}

function getBillingZip() {
	return document.getElementById("billZip").value;
}

function displayMessage(message) {
	var wrong = document.getElementById("wrongInput");
	wrong.innerHTML = message;
	wrong.style.border = "2px dashed #ffffff";
}

function displayMessageGood(message) {
	var wrong = document.getElementById("rightInput");
	wrong.innerHTML = message;
	wrong.style.border = "2px dashed #ffffff";
}

function checkFirstName(checker) {
	console.log(checker);
	return /^[A-Za-z\s]+$/.test(checker);
}

function checkLastName(checker) {
	console.log(checker);
	return /^[A-Za-z\s]+$/.test(checker);
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

function checkPhone(checker) {
	return /^\D?(\d{3})\D?\D?(\d{3})\D?(\d{4})$/.test(checker);
}

function checkAddress(checker) {
	return /^[A-Za-z\d]+[A-Za-z\d\s-.]*$/.test(checker);
}

function checkCity(checker) {
	return /^[A-Za-z\s]+$/.test(checker);
}

function checkState(checker) {
	return /^[A-Z][A-Z]$/.test(checker);
}

function checkShippingType(checker) {
	return !(checker === "none");
}

function checkQuantity(checker) {
	return /^[\d]+$/.test(checker);
}

function checkCreditCard(checker) {
	return /^\d{4}(?:[\s-]{0,1}\d{4})(?:[\s-]{0,1}\d{4})(?:[\s-]{0,1}\d{4})$/.test(checker);
}

function checkCardholder(checker) {
	return /^[A-Za-z][A-Za-z\s-.,]*$/.test(checker);
}

function checkCVV(checker) {
	return /^\d\d\d$/.test(checker);
}

function checkExpiration(checker) {
	return /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/.test(checker);
}

function checkZip(checker) {
	return /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(checker);
}