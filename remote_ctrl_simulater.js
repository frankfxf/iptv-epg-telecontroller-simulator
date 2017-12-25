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
var s_width = 1920;

var events = 
	   	[
	   		{name:"首页",keyCode: V_KEY_ENUM.KEY_HOME},
	   		{name:"↑" ,keyCode:V_KEY_ENUM.KEY_UP}, {name:"返回" ,keyCode:V_KEY_ENUM.KEY_RETURN},
	   	 	{name:"←" ,keyCode:V_KEY_ENUM.KEY_LEFT},{name:"确定",keyCode:V_KEY_ENUM.KEY_OK},{name:"→" ,keyCode:V_KEY_ENUM.KEY_RIGHT},
	   	 	{name:"暂停" ,keyCode:V_KEY_ENUM.KEY_PLAY_PAUSE}, {name:"↓" ,keyCode:V_KEY_ENUM.KEY_DOWN}, {name:"互动",keyCode:V_KEY_ENUM.KEY_LOCATION},
	   	 	{name:"+ 声音",keyCode:V_KEY_ENUM.KEY_VOL_UP}, {name:"上页",keyCode:V_KEY_ENUM.KEY_PAGE_UP},{name:"+ 频道",keyCode:V_KEY_ENUM.KEY_CHANNEL_UP},
	   	 	{name:"- 声音",keyCode:V_KEY_ENUM.KEY_VOL_DOWN}, {name:"下页",keyCode:V_KEY_ENUM.KEY_PAGE_DOWN},{name:"- 频道",keyCode:V_KEY_ENUM.KEY_CHANNEL_DOWN},
	   	    {name:"1",keyCode:V_KEY_ENUM.KEY_1}, {name:"2",keyCode:V_KEY_ENUM.KEY_2},{name:"3",keyCode:V_KEY_ENUM.KEY_3} ,
	   	    {name:"4",keyCode:V_KEY_ENUM.KEY_4}, {name:"5",keyCode:V_KEY_ENUM.KEY_5},{name:"6",keyCode:V_KEY_ENUM.KEY_6},
	   	    {name:"7",keyCode:V_KEY_ENUM.KEY_7}, {name:"8",keyCode:V_KEY_ENUM.KEY_8},{name:"9",keyCode:V_KEY_ENUM.KEY_9},
	   	    {name:"*",keyCode:V_KEY_ENUM.KEY_START}, {name:"0",keyCode:V_KEY_ENUM.KEY_0},{name:"#",keyCode:V_KEY_ENUM.KEY_F},
	   	    {name:"静音",keyCode: V_KEY_ENUM.KEY_MUTE},{name:"声道" ,keyCode:V_KEY_ENUM.KEY_AUDIO},{name:"F1",keyCode:V_KEY_ENUM.KEY_F1},
	   	    {name:"F2",keyCode: V_KEY_ENUM.KEY_F2},{name:"F3" ,keyCode:V_KEY_ENUM.KEY_F3},{name:"F4",keyCode:V_KEY_ENUM.KEY_F4}
	   	   
	   	 ];
   function createRemoteCtrlPanel(){
		var s_width = 1920;  
		var s_height = 1180;
		var remoteCtrlPanel = document.createElement("div");
		remoteCtrlPanel.id="RC_MOCK";

		var the_width = 504;
		var the_height= s_height;
		var left_p = window.localStorage.getItem('left')?window.localStorage.getItem('left'):s_width;
		var top_p = window.localStorage.getItem('top')?window.localStorage.getItem('top'):10;
		var RC_MOCK = window.localStorage.getItem('RC_MOCK')?window.localStorage.getItem('RC_MOCK'):'block';
		remoteCtrlPanel.id="RC_MOCK";
		remoteCtrlPanel.draggable = true;
		remoteCtrlPanel.style.margin="2px";
		remoteCtrlPanel.style.width=the_width+"px";
		remoteCtrlPanel.style.height=the_height+"px";
		remoteCtrlPanel.style.top =top_p+"px"
		remoteCtrlPanel.style.zIndex = "10";
		remoteCtrlPanel.style.left =left_p+"px"
		// remoteCtrlPanel.style.border = '1px solid #DDD';
		remoteCtrlPanel.style.borderRadius = "20px";
		remoteCtrlPanel.style.backgroundColor = '#1F1C17';
		//remoteCtrlPanel.style.backgroundColor ="#3f03";
		// remoteCtrlPanel.style.fontSize="24px";
		remoteCtrlPanel.style.textAlign="center";
		remoteCtrlPanel.style.overflow="hidden";
		remoteCtrlPanel.style.display=RC_MOCK;
		remoteCtrlPanel.style.boxShadow="10px 10px 5px #888888";
		remoteCtrlPanel.style.position = "fixed";
		remoteCtrlPanel.onmousedown=function(ev){  
            var oEvent=ev||event;  
            distX=oEvent.clientX-remoteCtrlPanel.offsetLeft;   //获取边界到鼠标的距离  
            distY=oEvent.clientY-remoteCtrlPanel.offsetTop;  
            document.onmousemove=function(ev){  
                var oEvent=ev||event;  
                var x=oEvent.clientX-distX;  
                var y=oEvent.clientY-distY;  
                if(x<0){  
                    x=0;  
                }  
                if(y<0){  
                    y=0;  
                }  
                if(x>(document.documentElement.clientWidth-remoteCtrlPanel.offsetWidth))  
                {  
                    x=document.documentElement.clientWidth-remoteCtrlPanel.offsetWidth;  
                }  
                remoteCtrlPanel.style.left=x+'px';    //根据鼠标位置相对定位，得到left，top值  
                remoteCtrlPanel.style.top=y+'px';
                window.localStorage.setItem('top',y);
                window.localStorage.setItem('left',x);
            }  
            document.onmouseup=function(){  
                document.onmousemove=null;  
                document.onmouseup=null;  
            }  
        }  
		// remoteCtrlPanel.onmousedown = function drag(){
		// 	remoteCtrlPanel.onmousemove = function mouseDrag(ev){
		// 		this.style.top = ev.clientY - ev.layerY + 10 + 'px';
		// 		this.style.left = ev.clientX - ev.layerX + 'px';
		// 		console.log(ev.clientX - ev.layerX);
		// 		ev.preventDefault();
		// 	}
		// }
		remoteCtrlPanel.appendChild(createTitle());
		remoteCtrlPanel.appendChild(createKeyPanel());
		document.body.appendChild(remoteCtrlPanel);	
   }
   function createTitle(){
		var titleDiv = document.createElement("div");
		 titleDiv.style.overflow = 'hidden';
		 titleDiv.style.width = "100%";
		 titleDiv.style.position = "absolute";
		 titleDiv.style.top = "0px";
		 titleDiv.style.left = "0px";
		 titleDiv.style.padding ="5px";
		 titleDiv.style.paddingTop = "20px";
		 imgspan = document.createElement("span");
		 img = document.createElement("img");
		 imgspan.appendChild(img);
		 img.src= document.getElementById("zhenguang_logo").src;
		 img.width =70;
		 img.height= 50;	
		 imgspan.style.float="left";
		 imgspan.style.marginLeft = "30px";
		 titleDiv.appendChild(imgspan);

		 
		 imgspan = document.createElement("span");
		 img = document.createElement("img");
		 imgspan.appendChild(img);

		 img.src= document.getElementById("zhenguang_close").src;
		 img.width =50;
		 img.height= 50;	
		 // img.style.border="3px solid #f0f";
		 imgspan.style.marginRight="30px";
		 imgspan.style.float = "right";
		 imgspan.style.cursor = "pointer";
		 
		 img.onclick=function(){
		 	var left_p = window.localStorage.getItem('left')?window.localStorage.getItem('left'):s_width;
		 	var top_p = window.localStorage.getItem('top')?window.localStorage.getItem('top'):10;
			document.getElementById("RC_MOCK").style.display="none";
			document.getElementById("zhenguang").style.display="block";
			document.getElementById("zhenguang").style.position = "fixed";
			document.getElementById("zhenguang").style.top = top_p + 'px';
			document.getElementById("zhenguang").style.left = left_p + 'px';
			window.localStorage.setItem('zhenguang','block');
			window.localStorage.setItem('RC_MOCK','none');
		 }
		 titleDiv.appendChild(imgspan);
		return titleDiv;
   }
   function createKeyPanel(){

	var keyPanelDiv = document.createElement("div");
	keyPanelDiv.style.width = "100%";
	keyPanelDiv.style.position = "absolute";
	keyPanelDiv.style.top ="65px";
	keyPanelDiv.style.marginTop = "20px";

	for( var i=0;i<events.length;i++ ){
		events[i].value;
		var btnTag =document.createElement("button");
		btnTag.style.margin="10px";
		btnTag.style.verticalAlign="middle";
		btnTag.style.width="128px";
		btnTag.style.height="60px";
		btnTag.style.borderRadius = "15px";
		btnTag.style.backgroundColor = '#979795';
		btnTag.style.color = "white";
		btnTag.style.fontFamily = "微软雅黑";
		//btnTag.style.backgroundColor ="rgb(139, 139, 140)";
		//btnTag.style.color="";
		btnTag.style.fontSize = '30px';
		btnTag.style.overflow="hidden";
		btnTag.innerText = events[i].name;
		btnTag.id="btn_event_" +events[i].keyCode;
		btnTag.value = events[i].keyCode;
		btnTag.addEventListener('click', 
			function(ev,th){
				sendKeyEvent(ev);});
		keyPanelDiv.appendChild(btnTag);
	}
	for( var i=0;i<playEventNames.length;i++ ){
		var btnTag =document.createElement("button");
		btnTag.style.margin="10px";
		btnTag.style.verticalAlign="middle";
		btnTag.style.width="128px";
		btnTag.style.height="60px";
		btnTag.style.fontSize = '30px';
		btnTag.style.borderRadius = "15px";
		btnTag.style.backgroundColor = '#979795';
		btnTag.style.color = "white";
		btnTag.style.fontFamily = "微软雅黑";
		btnTag.innerText = playEventNames[i]
		btnTag.id="play_event_" +i;
		btnTag.value = 768;
		btnTag.addEventListener('click', 
			function(ev,th){
				sendPlayEvent(ev);});
		keyPanelDiv.appendChild(btnTag);
	}
	return keyPanelDiv;
	
}

function sendKeyEvent(aevent){
	var id = aevent.target.id;
	var idx = id.lastIndexOf("_")
	var code = parseInt(id.substring(idx+1));

	document.onkeypress( {keyCode:code})
}

function sendPlayEvent(aevent){

	var id = aevent.target.id;
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
	// var links = document.getElementsByTagName("a");
	// for(var i=0;i<links.length;i++){
	// 	links[i].addEventListener('focus', function(ev){	
	// 		RM_FOCUS_TARGET= ev.target;
	// 	});
	// 	links[i].addEventListener('onkeydown', simulateKeyPress);
	// }
	// var btns = document.getElementsByClassName("RM_key_button");
	// for(var i=0;i<btns.length;i++){
	// 	btns[i].addEventListener('click', function(ev){	
	// 		var id = window.event.srcElement.id;
	// 		var idx = id.lastIndexOf("_")
	// 		var code = parseInt(id.substring(idx+1));
	// 		if(document.onkeypress){
	// 			document.onkeypress( {keyCode:code,target:RM_FOCUS_TARGET,srcElement:RM_FOCUS_TARGET,which:code});
	// 		}
	// 	});
	// }

});
function isArrowKey(key){
	if(key == 37  || key == 38 || key==39 || key==40){
		return true;
	}else{
		return false;
	}
}

document.onkeydown=simulateKeyPress;
