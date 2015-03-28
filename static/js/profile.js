$(document).ready(function () {
	setName("Charlotte");
	setAmountRaised(500);
	setAmountDonated(100);
	setNumChallengesAccepted(5);
	setNumChallengesPosted(10);

	addPost("Sample post", "http://blah.com/", 20);
});

function setName(value) {
	$("#name").text(value);
}

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
	$("#posts").append("<div class='post'><div class='title'>" + title + "</div><div class='body'><video width='100%' autoplay><source src='" + url + "type='video/mp4'></video></div><div class='footer'>Raised $" + amtRaised +  "!</div></div>");
}