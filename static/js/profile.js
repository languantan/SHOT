$(document).ready(function () {
	setName("Charlotte");
	setAmountRaised(500);
	setAmountDonated(100);
	setNumChallengesAccepted(5);
	setNumChallengesPosted(10);
});

function setAmountRaised(value) {
	$("#amountRaised").text("Raised $" + value);
}

function setAmountDonated(value) {
	$("#amountDonated").text("Donated $" + value);
}

function setNumChallengesAccepted(value) {
	$("#numChallengesAccepted").text("Accepted " + value + " challenges");
}

function setNumChallengesPosted(value) {
	$("#numChallengesPosted").text("Posted " + value + " challenges");
}

function addPost(title, url, amtRaised) {

}