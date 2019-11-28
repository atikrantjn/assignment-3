var count;

function validate() {
	var first_name = document.getElementById('first_name');

	var last_name = document.getElementById('last_name');

	var phone_no = document.getElementById('phone_no');
	var office_no = document.getElementById('office_no');

	var user_conf = document.getElementById('user_conf');

	var about_us = document.getElementById('about_us');

	var residence1 = document.getElementById('residence1');
	var residence2 = document.getElementById('residence2');

	var check_box1 = document.getElementById('checkbox_sample18');
	var check_box2 = document.getElementById('checkbox_sample19');
	var check_box3 = document.getElementById('checkbox_sample20');

	var alert_phone = document.getElementById('alert_phone');

	//condition for gender selection and interest selection

	if (!(residence1.checked || residence2.checked)) {
		document.getElementById('alert_gender').innerHTML = 'Please select your gender';
		setTimeout(function() {
			document.getElementById('alert_gender').innerHTML = '';
		}, 5000);
		var radio = false;
	} else {
		radio = true;
	}

	if (!(check_box1.checked || check_box2.checked || check_box3.checked)) {
		document.getElementById('alert_check').innerHTML = 'Please select atleast one interest ';
		setTimeout(function() {
			document.getElementById('alert_check').innerHTML = '';
		}, 5000);
		var check = false;
	} else {
		check = true;
	}

	var first = validateFirst();
	var last = validateLast();
	var phone_value = validPhone();
	var phone_office = valid_officePhone();
	var u_email = validateEmail();
	var u_password = validatePassword();
	var u_confPassword = validateConfPass();
	var u_about = validateAbout();

	if (
		first == true &&
		last == true &&
		phone_value == true &&
		phone_office == true &&
		u_email == true &&
		u_password == true &&
		u_confPassword == true &&
		u_about == true &&
		radio == true &&
		check == true
	) {
		alert('form submitted successfully');

		window.open('http://stackoverflow.com', '_blank');
	} else {
		alert('please fill all the details before submitting form');
	}
}

// checking first name input field

function validateFirst() {
	if (first_name.value === '') {
		//
		document.getElementById('alertFirst').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertFirst').innerHTML = '';
		}, 5000);
		return (count = false);
	}
	return true;
}

// checking last name input field

function validateLast() {
	if (last_name.value === '') {
		document.getElementById('alertLast').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertLast').innerHTML = '';
		}, 5000);
		return (count = false);
	}
	return true;
}

// checking input value of phone field;

function validPhone() {
	if (phone_no.value === '') {
		document.getElementById('alertPhone').innerHTML = 'this field cannot be empty';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);
		return (count = false);
	} else if (isNaN(phone_no.value)) {
		document.getElementById('alertPhone').innerHTML = 'please enter digits only';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);

		return (count = false);
	} else if (phone_no.value.length > 10 || phone_no.value.length < 10) {
		document.getElementById('alertPhone').innerHTML = 'please enter 10 digits only';
		setTimeout(function() {
			document.getElementById('alertPhone').innerHTML = '';
		}, 5000);
		return (count = false);
		// phone_no.focus();
	}
	return true;
}

//checking input value for office field

function valid_officePhone() {
	if (office_no.value === '') {
		document.getElementById('alert_officePhone').innerHTML = 'This field cannot be empty';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		return (count = false);
		//office_no.focus();
	} else if (isNaN(office_no.value)) {
		document.getElementById('alert_officePhone').innerHTML = 'please enter digits only';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		//office_no.focus();
		return (count = false);
	} else if (office_no.value.length > 10 || office_no.value.length < 10) {
		document.getElementById('alert_officePhone').innerHTML = 'please enter 10 digits only';
		setTimeout(function() {
			document.getElementById('alert_officePhone').innerHTML = '';
		}, 5000);
		//office_no.focus();
		return (count = false);
	}
	return true;
}

// validate email entered by user

function validateEmail() {
	var alert_email = document.getElementById('alert_email');
	var pattern = /^([a-zA-Z0-9_\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;
	var user_email = document.getElementById('user_email');

	/*
	if (user_email.value.match(pattern)) {
		return true;
	} else {
		alert_email.style.display = 'block';
		setTimeout('hideAlert()', 5000);

		return false;
	}
	*/

	if (user_email.value === '') {
		document.getElementById('alert_email').innerHTML = 'this field cannot be empty';
		setTimeout(function() {
			document.getElementById('alert_email').innerHTML = '';
		}, 5000);
		return (count = false);
	} else if (!user_email.value.match(pattern)) {
		document.getElementById('alert_email').innerHTML = 'please enter valid email address';
		setTimeout(function() {
			document.getElementById('alert_email').innerHTML = '';
		}, 5000);
		return (count = false);
	}
	return true;
}

//validate password function

function validatePassword(min, max) {
	var alert_pass = document.getElementById('alert_pass');
	var user_pass = document.getElementById('user_pass');
	var pass_pattern = /^[a-zA-Z0-9]+$/;
	var pass_len = user_pass.value.length;

	if (pass_len < min || pass_len > max || !user_pass.value.match(pass_pattern)) {
		document.getElementById('alert_pass').innerHTML = 'please enter password between 8-15 alphanumeric characters';
		setTimeout(function() {
			document.getElementById('alert_pass').innerHTML = '';
		}, 5000);
		return (count = false);
	}
	return true;
}

//confirm password validation function.

function validateConfPass() {
	if (user_conf.value === user_pass.value) {
		//count = 0;
		return true;
	} else {
		//
		document.getElementById('alert_conf_pass').innerHTML = "Password did'nt matched ";
		setTimeout(function() {
			document.getElementById('alert_conf_pass').innerHTML = '';
		}, 5000);
		return (count = false);
	}
}

//age validation function

function getAge() {
	var inputMonth = document.getElementById('month');
	var inputYear = document.getElementById('year');
	var inputDay = document.getElementById('day');

	var today = new Date();
	//var currentYear = today.getFullYear();

	var newdate = new Date(inputYear.value, inputMonth.value, inputDay.value);
	// var birth_year = newdate.getFullYear();
	// var birth_month = newdate.getMonth();

	//var calc_year = currentYear - birth_year;

	var diff = Math.abs(today.getTime() - newdate.getTime());

	var age = diff / (1000 * 3600 * 24 * 365.2425);

	var fixed_age = age.toFixed(2);

	if (inputMonth.value == 'month' || inputYear.value == 'year' || inputDay.value == 'day') {
		document.getElementById('alert_birth').innerHTML = 'please enter valid date,year,month';
		setTimeout(function() {
			document.getElementById('alert_birth').innerHTML = '';
		}, 5000);
		return (count = false);
	} else {
		document.getElementById('age').value = fixed_age + ' years';
		return true;
	}
}

//validate about us
function validateAbout() {
	if (about_us.value == '') {
		document.getElementById('alert_about').innerHTML = 'This field is mandatory ';
		setTimeout(function() {
			document.getElementById('alert_about').innerHTML = '';
		}, 5000);
		return (count = false);
	}
	return true;
}
