function readData() {
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

	uData.Rpwd = $("#Repwd").val();
	if (!uData.Rpwd) {
		$(".RepwdError").show();
		return;
	} else {
		$(".RepwdError").hide();
	}

	/*if (uData.pwd!=uData.Rpwd){
		$(".pwdmatch").style.display = 'block'
		return;
	} else {
		$(".pwdmatch").style.display = 'none'
	}*/

	uData.numbr = $("#Unum").val();
	if (!uData.numbr) {
		$(".UnumError").show();
		return;
	} else {
		$(".UnumError").hide();
	}

	uData.Email = $("#MailId").val();
	if (!uData.Email) {
		$(".MailIdError").show();
		return;
	} else {
		$(".MailIdError").hide();
	}

	//----------pwd validation-------------

	uData.pwd = $("#upwd").val();
	if (uData.pwd.length < 8) {
		$("#pwdvalid").html("**Password length must be 8 char");
		$("#pwdvalid").css("color", "red");
		return ("too-short");
	} else if (uData.pwd.search(/[0-9]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 numeric value must enter");
		$("#pwdvalid").css("color", "red");
		return ("no_number");
	} else if (uData.pwd.search(/[a-z]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 small letter must enter");
		$("#pwdvalid").css("color", "red");
		return ("no_letter");
	} else if (uData.pwd.search(/[A-Z]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 upper letter must enter");
		$("#pwdvalid").css("color", "red");
		return ("no_Uletter");
	} else if (uData.pwd.search(/[!\@\#\$\%\^\&]/) == -1) {
		$("#pwdvalid").html("**Atleast 1 Special char must enter");
		$("#pwdvalid").css("color", "red");
		return ("no_Spclchar");
	} else if (uData.pwd!=uData.Rpwd) {
		$("#pwdvalid").html("**Password did not match");
		$("#pwdvalid").css("color", "red");
		return ("pwd_notMatched");
	} 
		$("#pwdvalid").html("Successful");
		$("#pwdvalid").css("color", "green");
		return ("ok");

	
	console.log(uData);
	
} 
	
	//----Pwd Visibility-----//

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

	if ((event.charCode >= 97 && event.charCode <= 122 )  || (event.charCode >= 65 && event.charCode <= 90)) {
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

function validatePwd(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 16) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}

	//64 = @, 42 = *, 95 = _, 35 = #, 97 to 122(small alphabets), 65 to 90(Capital letters), 48 to 57(numbers)
	if ((event.charCode >= 97 && event.charCode <= 122) ||
	 	(event.charCode >= 65 && event.charCode <= 90) ||
	  	(event.charCode >= 48 && event.charCode <= 57) || 
	  	(event.charCode == 64) || (event.charCode == 42) || 
	  	(event.charCode == 95) || (event.charCode == 35)) {
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

function validateUnum(event) {
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

	if ((event.charCode >= 48 && event.charCode <= 57)) {
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

function validateEmail(event) {
	console.log(event.charCode);
	console.log("user typed a key");
	var isLengthValid = false;
	var isValidChar = false;

	var value = event.target.value;
	if(value.length >= 50) {
		isLengthValid = false;
	} else{
		isLengthValid = true;
	}
	// 64 = @, 46 = . 
	if ((event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 48 && event.charCode <= 57) || 
		(event.charCode == 64) || (event.charCode == 46)) {
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


