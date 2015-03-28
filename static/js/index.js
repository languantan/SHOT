var canRegister = false;

function onClickBtnLogin() {
	var email = document.getElementById('loginEmail').value.trim();
	var password = document.getElementById('loginPassword').value;
}

function onClickBtnRegister() {
	// if(canRegister) {
	// 	var email = document.getElementById('registerEmail').value.trim();
	// 	var password = document.getElementById('registerPassword').value;		
	// }
	window.location.href = "mainfeed.html";
}

function onChangePassword() {
	if(document.getElementById('registerPassword').value != document.getElementById('registerConfirm').value) {
		canRegister = false;
		document.getElementById('confirmPasswordErr').innerHTML = "*Passwords do not match!";
	} else {
		document.getElementById('confirmPasswordErr').innerHTML = "";
		canRegister = true;
	}
}
