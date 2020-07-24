function readFpwdData() {
	var uData = {};

	uData.mail = $("#eMailId").val();

	var pattern = /^[A-Za-z0-9._]{3,}@[a-z]{5}[.]{1}[a-z]{2,3}$/;

	try {
		if (uData.mail == ''){
			//exception1
			throw "email error";
		}
		if (uData.mail.match(pattern)){
			//exception2
			throw "pattern error";
		}
	} catch(error) {
		if (error = "email error"){
			msg = "email is mandatory field";
			displayDialog(msg)
		} else if (error = "pattern error"){
			msg = "valid email iD";
			displayDialog(msg)
		} else {
			msg = "Invalid email id";
			displayDialog(msg)
		}
	}

	console.log(uData);
}


function closeDialog() {
	$(".popupContainer").hide();
	$(".maskBlock").hide();
}

function displayDialog(msg) {
	$(".popupContainer").show();
	$(".maskBlock").show();
	$(".DialogContainer").text(msg);
}


