/*
1) loop over each character and anytime < is  used, replace it with &lt;
2) take in each field and concatenate it to the right place
3) wrap this in a function with an onclick to the button
4) do innerhtml to display back to the webpage in monospace font
5) remove any whitespace that came in with characters
6) keep lowercase on prefix
7) auto add height and width and spaces for iframe
8) make sure the number is a number


*/
/********************* 
 * Example of working iframe
 * 
 * <iframe src="https://streamingmedia.webster.edu/a_player_v1/audio.html?pre=anth&num=2510&track=1_2Track10" width="305" height="45"></iframe>

 * ************************/

var audioTitle = document.getElementById('audioTitle').value;
var coursePrefix = document.getElementById('coursePrefix').value.toLowerCase();
var courseNum = parseInt(document.getElementById('courseNum').value);
var URL = "&lt;iframe src=https://streamingmedia.webster.edu/a_player_v1/audio.html?pre=";
var iframeEnd = ' width = "330" height = "50" > &lt;/iframe>';

function generateIframe() {

    get user input 
    loop over text
}

if ([i] == <) {
    then change it to '&lt;';
}

user input to lowercase on coursePrefix
