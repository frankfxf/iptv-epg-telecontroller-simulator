var rc = document.createElement('script');
rc.src = chrome.extension.getURL('remote_ctrl_simulater.js');
rc.charset="utf-8";
var stb = document.createElement('script');
stb.src = chrome.extension.getURL('stb_simulater.js');
stb.charset="utf-8";
function loadRes(){
	var s_width = 1920;
	var logoSrc = chrome.extension.getURL("image/zhenguang.png");
	var logoDiv = document.createElement("div");
	var left_p = window.localStorage.getItem('left')?window.localStorage.getItem('left'):s_width;
	var top_p = window.localStorage.getItem('top')?window.localStorage.getItem('top'):10;
	var zhenguang = window.localStorage.getItem('zhenguang')?window.localStorage.getItem('zhenguang'):'none';
	logoDiv.style.display= zhenguang;
	logoDiv.style.position = "fixed";
	logoDiv.style.left = left_p + 'px';
	logoDiv.style.top= top_p + 'px';
	logoDiv.style.width="30px";
	logoDiv.style.height="30px";
	logoDiv.style.margin="4px";
	logoDiv.id = "zhenguang";


	var logo = document.createElement("img");
	logo.src = logoSrc;
	logo.id = "zhenguang_logo";
	logo.onclick=function(){
		document.getElementById("RC_MOCK").style.display="block";
		document.getElementById("zhenguang").style.display="none";
		window.localStorage.setItem('zhenguang','none');
		window.localStorage.setItem('RC_MOCK','block');
	}
	logoDiv.appendChild(logo);
	document.body.appendChild(logoDiv);
	var closeSrc = chrome.extension.getURL("image/close.png");
	var close = document.createElement("img");
	close.src = closeSrc;
	close.style.display ='none';
	close.id = "zhenguang_close";
	document.body.appendChild(close);
}
(document.head || document.documentElement).appendChild(stb);
(document.head || document.documentElement).appendChild(rc);
if (document.addEventListener) {
    window.addEventListener("load", loadRes, false);
} else {
   
    window.attachEvent("onload", loadRes);
}
// chrome.windows.onCreated.addListener(function(window) {
// 	console.log(window);
// })

