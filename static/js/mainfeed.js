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
    
    var form = document.createElement('form');
    form.action = "/upload/";
    form.method = "post";
    form.enctype= "multipart/form-data";
    
    var input = document.createElement('input');
    input.type = 'file';
    input.id = 'upload';
    input.name = 'fileToUpload'
    input.style.padding = '40px';
    
    var submitBtn = document.createElement('input');
    submitBtn.type = 'submit';
    submitBtn.id = 'upload';
    submitBtn.name = "submit";
    submitBtn.value = "Upload Video";
    
    form.appendChild(input);
    form.appendChild(submitBtn);
    
    
    modalEl.appendChild(form);
    // show modal
    mui.overlay('on', modalEl);
}

function showFeed(challengeid) {
    var modalEl = document.createElement('div');
    modalEl.style.width = '80%';
    modalEl.style.height = '80%';
    modalEl.style.margin = '100px auto';
    modalEl.style.textAlign = 'center';
    modalEl.style.backgroundColor = '#fff';
    
    var video = document.createElement('video');
    video.style.padding = "10px";
    video.controls = 'enabled';
    var source = document.createElement('source');
    source.src = "blah";
    video.appendChild(source);
    modalEl.appendChild(video);
    
    var button = document.createElement('a');
    button.className = 'mui-btn mui-btn-default';
    button.style.width = '100%';
    button.text = 'Donate!';
    button.onclick = function() { alert('donated!');};
    
    modalEl.appendChild(button);
    mui.overlay('on', modalEl);
}
