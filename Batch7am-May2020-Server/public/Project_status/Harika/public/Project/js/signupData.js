function readSignUpData () {
	var uData = {};
	uData.name = $("#uname").val();
	if (!uData.name) {
		$(".unameError").show();
		return;
	} else {
		$(".unameError").hide();
	}

	uData.pwd = $("#upwd").val();
	if (!uData.pwd) {
		$(".upwdError").show();
		return;
	} else {
		$(".upwdError").hide();
	}

	uData.rpwd = $("#repwd").val();
	if (!uData.rpwd) {
		$(".repwdError").show();
		return;
	} else {
		$(".repwdError").hide();
	}

	uData.numbr = $("#unum").val();
	if (!uData.numbr) {
		$(".unumError").show();
		return;
	} else {
		$(".unumError").hide();
	}

	uData.email = $("#mailId").val();
	if (!uData.email) {
		$(".mailIdError").show();
		return;
	} else {
		$(".mailIdError").hide();
	}

//------Email Validation----//

	if (uData.pwd.length < 10) {
		$("#pwdvalid").html("**Password length must be 10 char");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else if (uData.pwd.search(/[0-9]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 numeric value must enter");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else if (uData.pwd.search(/[a-z]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 small letter must enter");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else if (uData.pwd.search(/[A-Z]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 upper letter must enter");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else if (uData.pwd.search(/[!\@\#\$\%\^\&\*\_]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 Special char must enter");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else if (uData.pwd!=uData.rpwd) {
		$("#pwdvalid").html("**Password did not match");
		$("#pwdvalid").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	} else {
		$("#pwdvalid").html("Successful");
		$("#pwdvalid").css({"color":"green", "margin-top":"-15px", "font-size":"15px"});
	}

	
//------Email Validation----//

	var emailpattern = /^[A-Za-z0-9._]{3,}@[a-z]{5}[.]{1}[a-z]{2,3}$/;

	if (uData.email.match(emailpattern)) {
		$("#emailcheck").html("valid email id");
		$("#emailcheck").css({"color":"green", "margin-top":"-15px", "font-size":"15px"});
	} else {
		$("#emailcheck").html("Invalid email id");
		$("#emailcheck").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	}

//----MobileNo. Validation using regx----//

	var numbrPattern = /^[6-9]\d{9}$/;

	if (uData.numbr.match(numbrPattern)) {
		$("#numbrcheck").html("valid Mobile no.");
		$("#numbrcheck").css({"color":"green", "margin-top":"-15px", "font-size":"15px"});
	} else {
		$("#numbrcheck").html("Invalid Mobile no.");
		$("#numbrcheck").css({"color":"red", "margin-top":"-15px", "font-size":"15px"});
	}

	console.log(uData);
}

//------Pwd Visibility-----//

var state = false;
function toggle(){
	if (state) {
		$(".password").attr("type", "password");
		$("#eye").css("color","#ccc");
		state = false;
	} else {
		$(".password").attr("type", "text");
		$("#eye").css("color", "yellow");
		state = true;
	}
}

//----UserName Validation----//

function validateUname(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 17) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	if ((event.charCode >= 97 && event.charCode <= 122 ) ||
	   (event.charCode >= 65 && event.charCode <= 90)) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

//----MobileNo. Validation----//

function validateNumbr(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 10) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	if ((event.charCode >= 48 && event.charCode <= 57 )) {
		isValidChar = true;
	} else {
		isValidChar = false;
	}

	if (isLengthValid && isValidChar) {
		return true;
	} else {
		return false;
	}
}

