$(document).ready(function () {
	//validate first name field

	function fName() {
		var fname = $('#first_name').val();
		if (fname === '') {
			$('#alertFirst').text('This field cannot be empty');
			setTimeout(function () {
				$('#alertFirst').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	$('#first_name').blur(function () {
		fName();
	});

	//validate last name field

	function lName() {
		var lname = $('#last_name').val();

		if (lname === '') {
			$('#alertLast').text('This field cannot be empty');
			setTimeout(function () {
				$('#alertLast').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	$('#last_name').blur(function () {
		lName();
	});

	//validate phone number field

	function pNumber() {
		var p_no = $('#phone_no').val();

		if (p_no === '') {
			$('#alertPhone').text('this field cannot be empty');
			setTimeout(function () {
				$('#alertPhone').text('');
			}, 7000);
			return false;
		} else if (isNaN(p_no)) {
			$('#alertPhone').text('please enter digits only');
			setTimeout(function () {
				$('#alertPhone').text('');
			}, 7000);

			return false;
		} else if (p_no.length > 10 || p_no.length < 10) {
			$('#alertPhone').text('please enter 10 digits only');
			setTimeout(function () {
				$('#alertPhone').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	$('#phone_no').blur(function () {
		pNumber();
	});

	//validate office number field

	function oNumber() {
		var o_no = $('#office_no').val();

		if (o_no === '') {
			$('#alert_officePhone').text('This field cannot be empty');
			setTimeout(function () {
				$('#alert_officePhone').text('');
			}, 7000);
			return false;
		} else if (isNaN(o_no)) {
			$('#alert_officePhone').text('please enter digits only');
			setTimeout(function () {
				$('#alert_officePhone').text('');
			}, 7000);

			return false;
		} else if (o_no.length > 10 || o_no.length < 10) {
			$('#alert_officePhone').text('please enter 10 digits only');
			setTimeout(function () {
				$('#alert_officePhone').text('');
			}, 7000);

			return false;
		}
		return true;
	}

	$('#office_no').blur(function () {
		oNumber();
	});

	// validate email field

	function uEmail() {
		var u_email = $('#user_email').val();
		var pattern = /^([a-zA-Z0-9_\.\-])+\@+(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,10})+$/;

		if (u_email === '') {
			$('#alert_email').text('this field cannot be empty');
			setTimeout(function () {
				$('#alert_email').text('');
			}, 7000);
			return false;
		} else if (!u_email.match(pattern)) {
			$('#alert_email').text('please enter valid email address');
			setTimeout(function () {
				$('#alert_email').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	$('#user_email').blur(function () {
		uEmail();
	});

	// validate password input field

	function uPassword() {
		var u_pass = $('#user_pass').val();
		var pass_pattern = /^[a-zA-Z0-9]+$/;
		var pass_len = u_pass.length;

		if (u_pass == '') {
			$('#alert_pass').text('this field cannot be empty');
			setTimeout(function () {
				$('#alert_pass').text('');
			}, 7000);
			return false;
		} else if (pass_len < 8 || pass_len > 15 || !u_pass.match(pass_pattern)) {
			$('#alert_pass').text('please enter password between 8-15 alphanumeric characters');
			setTimeout(function () {
				$('#alert_pass').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	$('#user_pass').blur(function () {
		uPassword();
	});

	//validate confirm password input field

	function uConfPassword() {
		var u_conf_pass = $('#user_conf').val();
		var u_pass = $('#user_pass').val();
		if (!(u_conf_pass == u_pass)) {
			$('#alert_conf_pass').text("Password did'nt matched ");
			setTimeout(function () {
				$('#alert_conf_pass').text('');
			}, 7000);
			return false;
		} else if (u_conf_pass === '') {
			$('#alert_conf_pass').text('This field cannot be empty ');
			setTimeout(function () {
				$('#alert_conf_pass').text('');
			}, 7000);
			return false;
		}

		return true;
	}

	$('#user_conf').blur(function () {
		uConfPassword();
	});

	// age validation function

	function uAge() {
		var inputMonth = $('#month').val();
		var inputYear = $('#year').val();
		var inputDay = $('#day').val();

		var today = new Date();

		var newdate = new Date(inputYear, inputMonth, inputDay);

		var diff = Math.abs(today.getTime() - newdate.getTime());

		var age = diff / (1000 * 3600 * 24 * 365.2425);

		var fixed_age = age.toFixed(2);

		if (inputMonth == 'month' || inputYear == 'year' || inputDay == 'day') {
			$('#alert_birth').text('please enter valid date,  year,  month');
			setTimeout(function () {
				$('#alert_birth').text('');
			}, 7000);
			return false;
		} else {
			$('#age').val(fixed_age + ' years');
			return true;
		}
	}

	$('#year').blur(function () {
		uAge();
	});

	// validate aboutus input field

	function uAbout() {
		var about = $('#about_us').val();

		if (about == '') {
			$('#alert_about').text('This field is mandatory ');
			setTimeout(function () {
				$('#alert_about').text('');
			}, 7000);
			return false;
		}
		return true;
	}
	$('#about_us').blur(function () {
		uAbout();
	});

	// function to validate radio buttons

	function validateRadio() {
		if ($('input[type=radio][name=radio]:checked').length == 0) {
			$('#alert_gender').text('Please select your gender');
			setTimeout(function () {
				$('#alert_gender').text('');
			}, 7000);
			return false;
		}
		return true;
	}

	// function to validate interest checkboxes

	function validateCheck() {
		if ($('input[type=checkbox]:checked').length <= 0) {
			$('#alert_check').text('Please select atleast one interest ');
			setTimeout(function () {
				$('#alert_check').text('');
			}, 7000);
			return false;
		} else {
			return true;
		}
	}

	// validate whole form after clicking submit button

	$('#proceed_next_step').click(function () {
		var first = fName();
		var last = lName();
		var phone_value = pNumber();
		var phone_office = oNumber();
		var userEmailId = uEmail();
		var userPassId = uPassword();
		var userConfPasswordId = uConfPassword();
		var u_about = uAbout();
		var getAge = uAge();
		var check_radio = validateRadio();
		var check_checkBox = validateCheck();

		if (
			first == true &&
			last == true &&
			phone_value == true &&
			phone_office == true &&
			userEmailId == true &&
			userPassId == true &&
			userConfPasswordId == true &&
			u_about == true &&
			getAge == true &&
			check_radio == true &&
			check_checkBox == true
		) {
			alert('form submitted successfully');
			window.location.reload();
		} else {
			alert('please fill all the details before submitting form');
		}
	});
});
