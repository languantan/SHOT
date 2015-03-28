$(document).ready(function () {
	setName("Charlotte");
	setAmountRaised("Raised $500k");
	setAmountDonated("Donated $100");
	setNumChallengesAccepted("Accepted 5 challenges");
	setNumChallengesPosted("Posted 10 challenges");
}

function setName(value) {
	$("#name").text(value);
}

function setAmountRaised(value) {
	$("#amountRaised").text(value);
}

function setAmountDonated(value) {
	$("#amountDonated").text(value);
}

function setNumChallengesAccepted(value) {
	$("#numChallengesAccepted").text(value);
}

function setNumChallengesPosted(value) {
	$("#numChallengesPosted").text(value);
}

function addPost(title, url, amtRaised) {

}