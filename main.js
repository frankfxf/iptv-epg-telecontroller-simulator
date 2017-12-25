var rc = document.createElement('script');
rc.src = chrome.extension.getURL('remote_ctrl_simulater.js');
var stb = document.createElement('script');
stb.src = chrome.extension.getURL('stb_simulater.js');
function loadRes(){
	var logoSrc = chrome.extension.getURL("image/chances.png");
	var logoDiv = document.createElement("div");
	logoDiv.style.display="none";
	logoDiv.style.left ="0px";
	logoDiv.style.top="0px";
	logoDiv.style.width="30px";
	logoDiv.style.height="0px";
	logoDiv.style.margin="4px";
	logoDiv.id = "chances";
	var logo = document.createElement("img");
	logo.src = logoSrc;
	logo.id = "chances_logo";
	logo.style.cursor="hand";
	logo.onclick=function(){
		document.getElementById("RC_MOCK").style.display="block";
		document.getElementById("chances").style.display="none";
	}
	logoDiv.appendChild(logo);
	document.body.appendChild(logoDiv);
	var closeSrc = chrome.extension.getURL("image/close.png");
	var close = document.createElement("img");
	close.src = closeSrc;
	close.style.display ='none';
	close.id = "chances_close";
	document.body.appendChild(close);
}
stb.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(stb);
rc.onload = function() {
    this.parentNode.removeChild(this);
};
(document.head || document.documentElement).appendChild(rc);
if (document.addEventListener) {

    window.addEventListener("load", loadRes, false);
} else {
   
    window.attachEvent("onload", loadRes);
}
