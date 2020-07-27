function loadTemplate(type) {
	switch (type) {
		case 'login':
			var loginTemplate = $("#loginTmplt").html();
			$(".pageContainer").html(loginTemplate);
			break;
		case 'fgpwd':
			var fgpwdTemplate = $("#fgpwdTmplt").html();
			$(".pageContainer").html(fgpwdTemplate);
			break;
		case 'pDetails':
			$(".pageContainer").html('');
			break;
	}
}

function registerDetails() {
	// code to read data, and send to server
	$(".gotoLogin").show();
}

$(document).ready(function(){
	loadTemplate('login');
});


