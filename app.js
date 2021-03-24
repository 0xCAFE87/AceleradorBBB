

function addRangeControl(){
    const copy = document.getElementById('copyright');
    copy.innerHTML = '<input id="range-control" value="1.0" min="1.0" step="0.1" max="2.0" type="range" >'
    
    return document.getElementById('range-control');
}

function getVideos(){
    return document.getElementsByTagName('video');
}



document.addEventListener('media-ready', function(){
    const rangeControl = addRangeControl();

    const videos = Array.from(getVideos());

rangeControl.addEventListener('change', function(e){
    videos.forEach(element => {
        element.playbackRate = e.target.value;
    });
});
});