var feed;

window.onload = function() {
	//pull data from server

}

function loadFeed() {
	if(feed.length < 1) {
		//display no feed;
		return;
	}

	for (var i = 0; i < feed.length; i ++) {
		switch(feed[i]) {
			case "challenge":		
			//display challenge
			break;
			case "pool":
			//display pool
			break;
			default:
			break;
		}		
	}
}

function uploadFeed(challengeid) {
  // initialize modal element
    var modalEl = document.createElement('div');
    modalEl.style.width = '80%';
    modalEl.style.height = '80%';
    modalEl.style.margin = '100px auto';
    modalEl.style.backgroundColor = '#fff';

    var input = document.createElement('input');
    input.type = 'file';
    input.id = 'upload';
    input.style.padding = '40px';

    modalEl.appendChild(input);
    // show modal
    mui.overlay('on', modalEl);

    //upload to db
}
