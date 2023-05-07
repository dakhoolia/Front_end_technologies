/*

In the index.html file, in the ‘contact’ section, add a Button. ✅

When this button is clicked,
the following should happen in the function created above:

1. Ask the user for information.

You must store this information in the 3 variables
created in the contact.js file.
Make sure that data is received from the user input,
and that it is in the correct format
(e.g., make sure the user enters an email address containing both a
'@' and '.' ). ✅

2. Change the current contact information in the HTML file
(email, telephone number, and address)
to the input data from these 3 new variables. ✅

This must be done using jQuery selectors,
without adding more HTML IDs to the ‘contact’ section.
(The HTML file cannot be changed for this) ✅

3. Print the data entered to the console in the following format:

From: email@emailaddress.co.za
Contact: 0458754125
Address: 12 Smith Road, John Park. ✅

*/

$(document).ready(function () {
	$("#contactBtn").click(function () {
		I think inputs should be in separate functions and
		user should be notified if the input is invalid as soon as possible
		and right after each prompt.
		
		
		$("#contactBtn").click(function () {
			function isEmpty(str) {
				return str === "";
			}
			
			function isValidEmail(email) {
				const has_correct_form = email.includes("@") && email.includes(".");
				if (isEmpty(email) || !has_correct_form) {
					return false;
				}
				return true;
			}
			
			function isValidTelephone(telephone) {
				if (isEmpty(telephone) || telephone === isNaN) {
					return false;
				}
				
				return true;
			}
			
			function findProperElement($element) {
				return $element.parents(".col-md-4").find(".text-muted");
			}
			
			let prompt_email = prompt("Pleas enter your email adress:");
			while (!isValidEmail(prompt_email)) {
				prompt_email = prompt(
					"your email adress is invalid. please try again."
					);
				}
				
				let prompt_telephone = prompt("Pleas enter your phone number:");
				while (!isValidTelephone(prompt_telephone)) {
					prompt_telephone = prompt(
						"your telephone number is invalid. please try again."
						);
					}
					
					let prompt_address = prompt("Pleas enter your address:");
					while (isEmpty(prompt_address)) {
						prompt_address = prompt(
							"your address is invalid. please try again."
							);
						}
						
						const $by_email = findProperElement($(".bi-envelope"));
						$by_email.text(prompt_email);
						
						const $by_telephone = findProperElement($(".bi-telephone"));
						$by_telephone.text(prompt_telephone);
						
						const $by_address = findProperElement($(".bi-geo-alt"));
						$by_address.text(prompt_address);
						
						console.log(
							"From: " + prompt_email,
							"\nContact: " + prompt_telephone,
							"\nAddress: " + prompt_address
							);
						});
					});
							
							
							/* ========== my comments =======================
							
		var email = prompt("Pleas enter your email adress:");
		var telephone = prompt("Pleas enter your phone number:");
		var adress = prompt("Pleas enter your adress:");
		
		if (!email.includes("@") || !email.includes(".")) {
			alert("your email adress is invalid. please try again.");
			return;
		}
		
		if (telephone === isNaN) {
			alert(
				"your telephone number should only include numbers. please try again"
				);
				return;
			}
			
			$("div.col-md-4").find("p.text-muted:contains('23')").text(telephone);
			$("div.col-md-4").find("p.text-muted:contains('@')").text(email);
			$("div.col-md-4").find("p.text-muted:contains(',')").text(adress);
			
			console.log("from: " + email);
			console.log("Contact: " + email);
			console.log("adress: " + adress);
	================================================== */
	