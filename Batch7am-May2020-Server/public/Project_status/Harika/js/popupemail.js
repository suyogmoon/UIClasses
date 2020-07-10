function readData() {
	var Data = {};

	Data.mail = $("#eMailId").val();

	try {
		if (Data.mail == ''){
			//exception
			throw "email error";
		}
	} catch(error) {
		if (error = "email error"){
			msg = "email is mandatory field";
			displayDialog(msg)
		}
	}

	console.log(Data);
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

