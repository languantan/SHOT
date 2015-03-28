var feed;

window.onload = function() {
    index.js//pull data from server

}

function loadFeed() {
    if(feed.length < 1) {
        index.js//display no feed;
        index.jsreturn;
        index.js}

        index.jsfor (var i = 0; i < feed.length; i ++) {
            index.jsswitch(feed[i]) {
                index.jscase "challenge":index.js
                    index.js//display challenge
                    index.jsbreak;
                index.jscase "pool":
                    index.js//display pool
                    index.jsbreak;
                index.jsdefault:
                    index.jsbreak;
                index.js}index.js
                    index.js}
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
No newline at end of file

