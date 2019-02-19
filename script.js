
/********************* 
 * Example of working iframe
 * 
 * <iframe src="https://streamingmedia.webster.edu/a_player_v1/audio.html?pre=anth&num=2510&track=1_2Track10" width="305" height="45"></iframe>

 * ************************/

function generateIframe() {
    var audioTitle = document.getElementById('audioTitle').value;
    var coursePrefix = document.getElementById('coursePrefix').value.toLowerCase();
    var courseNum = parseInt(document.getElementById('courseNum').value);
    var URL = '&lt;iframe src="https://streamingmedia.webster.edu/a_player_v1/audio.html?pre=';
    var iframeEnd = '" width="330" height="50"> &lt;/iframe>';

    document.getElementById('iframe-result').innerHTML = `${URL}${coursePrefix}&num=${courseNum}&track=${audioTitle}${iframeEnd}`;


}
