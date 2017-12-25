/**
 * 
 */
var V_KEY_ENUM={
		KEY_MUTE:261,KEY_AUDIO:262,
		KEY_F1:275,KEY_2:276,KEY_F3:277,KEY_4:278,
		KEY_UP:38,KEY_DOWN:40,KEY_RIGHT:39,KEY_LEFT:37,
		KEY_OK:13,KEY_RETURN:8,KEY_HOME:272,
		KEY_PLAY_PAUSE:263,KEY_STOP:270,
		KEY_VOL_UP:259,KEY_VOL_DOWN:260,
		KEY_PAGE_UP:33,KEY_PAGE_DOWN:34,
		KEY_CHANNEL_UP:257,KEY_CHANNEL_DOWN:258,
		KEY_0:48,KEY_1:49,KEY_2:50,KEY_3:51,KEY_4:52,
		KEY_5:53,KEY_6:54,KEY_7:55,KEY_8:56,KEY_9:57,
		KEY_REWIND:265,KEY_FORWARD:264,KEY_LOCATION:271,
		KEY_INFO:268,KEY_APP:279,
		KEY_START:283,KEY_F:280,KEY_PLAY:768
} 
	

var   PLAY_MEDIA_ERROR ="{type:'EVENT_MEDIA_ERROR',error_code:27}";
var   PLAY_MEDIA_END =  "{type:'EVENT_MEDIA_END'}";
var   PLAY_MEDIA_BEGINING ="{type:'EVENT_MEDIA_BEGINING'}";
var   PLAY_PLAYMODE_CHANGE ="{type:'EVENT_PLAYMODE_CHANGE'}";
var   TVMS_EVENT  ="{type:'EVENT_TVMS'}";
	    
var playEvents = new Array(PLAY_MEDIA_BEGINING,PLAY_MEDIA_END,PLAY_PLAYMODE_CHANGE,PLAY_MEDIA_ERROR,TVMS_EVENT);
var playEventNames = new Array("BEG","END","CHA","ERR","MSG")

var events = 
	   	[
	   		{name:"首页",keyCode: V_KEY_ENUM.KEY_HOME},
	   		{name:"↑" ,keyCode:V_KEY_ENUM.KEY_UP}, {name:"返回" ,keyCode:V_KEY_ENUM.KEY_RETURN},
	   	 	{name:"←" ,keyCode:V_KEY_ENUM.KEY_LEFT},{name:"确定",keyCode:V_KEY_ENUM.KEY_OK},{name:"→" ,keyCode:V_KEY_ENUM.KEY_RIGHT},
	   	 	{name:">||" ,keyCode:V_KEY_ENUM.KEY_PLAY_PAUSE}, {name:"↓" ,keyCode:V_KEY_ENUM.KEY_DOWN}, {name:"互动",keyCode:V_KEY_ENUM.KEY_LOCATION},
	   	 	{name:"V+",keyCode:V_KEY_ENUM.KEY_VOL_UP}, {name:"上页",keyCode:V_KEY_ENUM.KEY_PAGE_UP},{name:"C+",keyCode:V_KEY_ENUM.KEY_CHANNEL_UP},
	   	 	{name:"V-",keyCode:V_KEY_ENUM.KEY_VOL_DOWN}, {name:"下页",keyCode:V_KEY_ENUM.KEY_PAGE_DOWN},{name:"C-",keyCode:V_KEY_ENUM.KEY_CHANNEL_DOWN},
	   	    {name:"1",keyCode:V_KEY_ENUM.KEY_1}, {name:"2",keyCode:V_KEY_ENUM.KEY_2},{name:"3",keyCode:V_KEY_ENUM.KEY_3} ,
	   	    {name:"4",keyCode:V_KEY_ENUM.KEY_4}, {name:"5",keyCode:V_KEY_ENUM.KEY_5},{name:"6",keyCode:V_KEY_ENUM.KEY_6},
	   	    {name:"7",keyCode:V_KEY_ENUM.KEY_7}, {name:"8",keyCode:V_KEY_ENUM.KEY_8},{name:"9",keyCode:V_KEY_ENUM.KEY_9},
	   	    {name:"*",keyCode:V_KEY_ENUM.KEY_START}, {name:"0",keyCode:V_KEY_ENUM.KEY_0},{name:"#",keyCode:V_KEY_ENUM.KEY_F},
	   	    {name:"静音",keyCode: V_KEY_ENUM.KEY_MUTE},{name:"声道" ,keyCode:V_KEY_ENUM.KEY_AUDIO},{name:"F1",keyCode:V_KEY_ENUM.KEY_F1},
	   	    {name:"F2",keyCode: V_KEY_ENUM.KEY_F2},{name:"F3" ,keyCode:V_KEY_ENUM.KEY_F3},{name:"F4",keyCode:V_KEY_ENUM.KEY_F4}
	   	   
	   	 ];
   function createRemoteCtrlPanel(){
		var s_width = window.screen.width;  
		var s_height = window.screen.height;
		var remoteCtrlPanel = document.createElement("div");
		remoteCtrlPanel.id="RC_MOCK";
		var the_width = 204;
		var the_height= s_height;
		var left_p = s_width;
		var top_p = 10;
  
		remoteCtrlPanel.id="RC_MOCK";
		remoteCtrlPanel.draggable = true;
		remoteCtrlPanel.style.margin="2px";
		remoteCtrlPanel.style.width=the_width+"px";
		remoteCtrlPanel.style.height=(the_height-200)+"px";
		remoteCtrlPanel.style.top =top_p+"px"
		remoteCtrlPanel.style.zIndex = "10";
		remoteCtrlPanel.style.left =left_p+"px"
		remoteCtrlPanel.style.border = '1px solid #DDD';
		remoteCtrlPanel.style.backgroundColor ="#F8B466";
		remoteCtrlPanel.style.fontSize="24px";
		remoteCtrlPanel.style.textAlign="center";
		remoteCtrlPanel.style.overflowX="hidden";
		remoteCtrlPanel.style.display="";
		remoteCtrlPanel.style.boxShadow="10px 10px 5px #888888";
		remoteCtrlPanel.style.position = "fixed";

		remoteCtrlPanel.ondragend  =function drag(ev){
			this.style.top = ev.y;
			this.style.left = ev.x;
			ev.preventDefault();	
		}
		remoteCtrlPanel.appendChild(createTitle());
		remoteCtrlPanel.appendChild(createKeyPanel());
		document.body.appendChild(remoteCtrlPanel);	
   }
   function createTitle(){
		var titleDiv = document.createElement("div");
		 titleDiv.style.padding ="5px";
		 imgspan = document.createElement("span");
		 img = document.createElement("img");
		 imgspan.appendChild(img);
		 img.src= document.getElementById("chances_logo").src;
		 img.width =30;
		 img.height= 20;	
		 imgspan.style.float="left";
		 titleDiv.appendChild(imgspan);

		 
		 imgspan = document.createElement("span");
		 img = document.createElement("img");
		 imgspan.appendChild(img);

		 img.src= document.getElementById("chances_close").src;
		 img.width =20;
		 img.height= 20;	
		 img.style.border="3px solid #f19f0a";
		 imgspan.style.marginLeft="138px";
		 img.style.cursor="hand";
		 img.onclick=function(){
			document.getElementById("RC_MOCK").style.display="none";
			document.getElementById("chances").style.display="block";
		 }
		 titleDiv.appendChild(imgspan);

		
		return titleDiv;
   }
   function createKeyPanel(){

	var keyPanelDiv = document.createElement("div");
	keyPanelDiv.style.width = "100%";
	keyPanelDiv.style.top ="36px";

	for( var i=0;i<events.length;i++ ){
		events[i].value;
		var btnTag =document.createElement("button");
		btnTag.style.margin="2px";
		btnTag.style.verticalAlign="middle";
		btnTag.style.width="48px";
		btnTag.style.height="30px";
		btnTag.style.backgroundColor ="#FFFFFF";
		btnTag.innerHTML = events[i].name;
		btnTag.id="btn_event_" +events[i].keyCode;
		btnTag.value = events[i].keyCode;
		btnTag.addEventListener('click', function(ev){sendKeyEvent(ev);});
		keyPanelDiv.appendChild(btnTag);
	}
	for( var i=0;i<playEventNames.length;i++ ){
		var btnTag =document.createElement("button");
		btnTag.style.margin="4px";
		btnTag.style.verticalAlign="middle";
		btnTag.style.width="48px";
		btnTag.style.height="30px";
		btnTag.innerHTML = playEventNames[i]
		btnTag.id="play_event_" +i;
		btnTag.value = 768;
		keyPanelDiv.appendChild(btnTag);
	}
	return keyPanelDiv;
	
}

function sendKeyEvent(aevent,idx){
	var id = window.event.srcElement.id;
	var idx = id.lastIndexOf("_")
	var code = parseInt(id.substring(idx+1));

	document.onkeypress( {keyCode:code})
}

function sendPlayEvent(idx){

	var id = window.event.srcElement.id;
	var idx = id.lastIndexOf("_")
	var code = parseInt(id.substring(idx+1));
	Utility.event = playEvents[code];	
	document.onkeypress( {keyCode:768});
}

function isInteger(val){   
    return (val == null || isNaN(val)) ? false :    
        ( ((1.0 * val) == Math.floor(val)) && 
            (val.indexOf(".") == -1));   
}

if (document.addEventListener) {

    window.addEventListener("load", createRemoteCtrlPanel, false);
} else {
   
    window.attachEvent("onload", createRemoteCtrlPanel);
}


function simulateKeyPress(ev){
	if(isArrowKey(ev.keyCode)){
		se ={keyCode:ev.keyCode,target:ev.target,srcElement:ev.srcElement,which:ev.which};
		if(document.onkeypress){
			document.onkeypress(se);
			ev.preventDefault();
		}
	}
}


window.addEventListener("load",function(){
	var links = document.getElementsByTagName("a");
	for(var i=0;i<links.length;i++){
		links[i].addEventListener('focus', function(ev){	
			RM_FOCUS_TARGET= ev.target;
		});
		links[i].addEventListener('onkeydown', simulateKeyPress);
	}
	var btns = document.getElementsByClassName("RM_key_button");
	for(var i=0;i<btns.length;i++){
		btns[i].addEventListener('click', function(ev){	
			var id = window.event.srcElement.id;
			var idx = id.lastIndexOf("_")
			var code = parseInt(id.substring(idx+1));
			if(document.onkeypress){
				document.onkeypress( {keyCode:code,target:RM_FOCUS_TARGET,srcElement:RM_FOCUS_TARGET,which:code});
			}
		});
	}

});
function isArrowKey(key){
	if(key == 37  || key == 38 || key==39 || key==40){
		return true;
	}else{
		return false;
	}
}

document.onkeydown=simulateKeyPress;