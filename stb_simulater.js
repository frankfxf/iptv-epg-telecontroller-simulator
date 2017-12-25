/**
 * 
 */
var   EVENT_MEDIA_ERROR ="{type:'EVENT_MEDIA_ERROR',error_code:27}";
var   EVENT_MEDIA_END =  "{type:'EVENT_MEDIA_END'}";
var   EVENT_MEDIA_BEGINING ="{type:'EVENT_MEDIA_BEGINING'}";
var   EVENT_PLAYMODE_CHANGE ="{type:'EVENT_PLAYMODE_CHANGE'}";
var   EVENT_TVMS ="{type:'EVENT_TVMS'}";

if(typeof(MediaPlayer)=="undefined"){

	window.MediaPlayer = function(){};
	var framesLength=window.frames.length;
	for (var i =0; i<framesLength.length;i++) {
		window.frames[i].window.MediaPlayer = function(){};
	}
	MediaPlayer.prototype={
			volume:80,
			duration:2*60,
			currentPlayTime:0,
			mHeight:0,
			mWidth:0,
			mLeft:0,
			mTop:0,
			getNativePlayerInstanceID:function(){ 
		       return 1;
		    },
		    joinChannel:function(){},
		    getAudioTrackUIFlag:function(){return 1},
		    getAudioVolumeUIFlag:function(){return 1},
		    getAudioTrackUIFlag:function(){return 1},
		    getMediaDuration:function(){return this.duration;},
		    getVolume:function(){ return 50; },
		    getCurrentAudioChannel:function(){},
		    getNativeUIFlag:function(){return 0},
		    getMuteFlag:function(){return 1},
		    getMuteUIFlag:function(){return 0},
		    getVolume:function(){return 10},	
		    getSubtitle:function(){return "subtitle";},
		    setMuteFlag:function(){},
		    setVolume:function(value){this.volume=value},		    
		    setSingleMedia:function(json){},
		    setAllowTrickmodeFlag:function(){},
		    setVideoAlpha:function(){},
		    setCycleFlag:function(){},
		    setChannelNoUIFlag:function(){},
		    setProgressBarUIFlag:function(){},
		    setNativeUIFlag:function(value){},
		    setAudioVolumeUIFlag:function(){},
		    setAudioTrackUIFlag:function(){},
		    setMuteUIFlag:function(){},
		    setMuteUIFlag:function(){},
		    playFromStart:function(){this.currentPlayTime=0;
			var mVideo= document.getElementById("mVideo");
		    		if(mVideo)
		    		{
		    			mVideo.style.display="block";
		    			mVideo.textContent="VIDEO PLAY...";
		    		}
			},
		    setVideoDisplayArea:function(){
		    	this.mHeight = arguments[3] ? arguments[3] : 0;//设置第四个参数的默认值为1 
  				this.mWidth = arguments[2] ? arguments[2] : 0;//设置第五个参数的默认值为2 
  				this.mLeft= arguments[0] ? arguments[0] : 0;//设置第六个参数的默认值为1 
  				this.mTop = arguments[1] ? arguments[1] : 0;//设置第七个参数的默认值为2 
		    },
		    setVideoDisplayMode:function(){
				var mode=arguments[0];
		    	if(mode)
		    	{
		    				this.mWidth=1920;
		  					this.mHeight=1080;
		  					this.mLeft= 0;
  							this.mTop = 0;
		    	}
				},
		    refreshVideoDisplay:function(){
					var mVideo= document.getElementById('mVideo');
		    	mVideo.style.width=this.mWidth+"px";
		    	mVideo.style.height=this.mHeight+"px";
		    	mVideo.style.lineHeight=this.mHeight+"px";
		    	mVideo.style.top=this.mTop+"px";
		    	mVideo.style.left=this.mLeft+"px";
		    	mVideo.style.display="block";
		    	mVideo.style.visibility="visible"
				
			},
		    getCurrentPlayTime:function(){return this.currentPlayTime},
		    fastRewind:function(){
		    	this.currentPlayTime = this.currentPlayTime-10;
			    if(this.currentPlayTime<=0 ){
		    		Utility.event = EVENT_MEDIA_BEGIN;
		    		this.currentPlayTime =0;
		    		document.onkeypress({keyCode:768});
		    	}else{
		    		Utility.event =  EVENT_PLAYMODE_CHANGE ;
		    		document.onkeypress({keyCode:768});
		    	}
		    },
		    fastForward:function(){
		    	this.currentPlayTime = this.currentPlayTime+10;
		    	if(this.currentPlayTime>= this.duration){
		    		this.currentPlayTime = this.duration;
		    		Utility.event = EVENT_MEDIA_END;
		    		document.onkeypress({keyCode:768});
		    	}else{
		    		Utility.event =  EVENT_PLAYMODE_CHANGE ;
		    		document.onkeypress({keyCode:768});
		    	}
		    },
		    resume:function(){
				var mVideo= document.getElementById("mVideo");
				mVideo.textContent="VIDEO PLAY...";
				
			},
		    gotoEnd:function(){
		    	this.currentPlayTime = this.duration;
		    	Utility.event=EVENT_MEDIA_END ;
		    	document.onkeypress({keyCode:768});
		    },
		    gotoStart:function(){
				var mVideo= document.createElement('div');
		    		mVideo.textContent="VIDEO PLAY...";
			},
		    initMediaPlayer:function(){
		    	this.mHeight = arguments[4] ? arguments[4] : 0;//设置第四个参数的默认值为1 
  				this.mWidth = arguments[5] ? arguments[5] : 0;//设置第五个参数的默认值为2 
  				this.mLeft= arguments[6] ? arguments[6] : 0;//设置第六个参数的默认值为1 
  				this.mTop = arguments[7] ? arguments[7] : 0;//设置第七个参数的默认值为2 


  				var mVideo= document.getElementById("mVideo");
		    	if(mVideo)
		    	{
		    		document.body.removeChild(mVideo);
		    	}else{
		    		//console.warn("警告重复调用initMediaPlayer"+"存在多个MediaPlayer实例");
					mVideo= document.createElement('div');
		    	}
		    	mVideo.id="mVideo";
		    	mVideo.style.width=this.mWidth+"px";
		    	mVideo.style.height=this.mHeight+"px";
		    	mVideo.style.lineHeight=this.mHeight+"px";
		    	mVideo.style.top=this.mTop+"px";
		    	mVideo.style.left=this.mLeft+"px";
		    	mVideo.style.position="absolute";
		    	mVideo.style.backgroundColor="black";
		    	mVideo.style.textAlign="center";
		    	mVideo.style.fontSize="50px";
		    	mVideo.style.color="#fff";
		    	mVideo.textContent="VIDEO";
		    	// mVideo.style.zIndex="999";
		    	document.body.appendChild(mVideo);


				// var ctx=myCanvas.getContext("2d");
				// ctx.fillStyle = "black";
		  //       ctx.fillRect(0, 0, 400, 400);
		        // ctx.beginPath();
		        // ctx.arc(100, 100, 50, 0, Math.PI*2, true);
		        // ctx.closePath();
		        // ctx.fillStyle = "green";
		        // ctx.fill();
		    },		    
		    leaveChannel:function(){},
		    pause:function(){
					var mVideo= document.getElementById("mVideo");
				mVideo.textContent="VIDEO PAUSE";
			},
		    stop:function(){
				var mVideo= document.getElementById("mVideo");
				mVideo.style.visibility="hidden";
			},
		    switchAudioChannel:function(){},
		    playByTime:function(type,time,speed){
		    this.currentPlayTime=time;
		    	var mVideo= document.createElement('div');
		    	mVideo.textContent="VIDEO PLAY FROM "+time;
		    },
		    releaseMediaPlayer:function(){
					var mVideo= document.getElementById("mVideo");
		    	if(mVideo)
		    	{
		    		document.body.removeChild(mVideo);
		    	}
			},
		    doPlay:function(){
		    	if(this.currentPlayTime=="null"){
		    		this.currentPlayTime = 0;
		    	}
		    	if(this.currentPlayTime==0){
		    	
			    		Utility.event = EVENT_MEDIA_BEGINING;
			    		document.onkeypress({keyCode:768});
			    	
		    	}	    	
		    	this.currentPlayTime=parseInt(this.currentPlayTime)+1;
		    	if(this.currentPlayTime== this.duration){
		    		Utility.event = EVENT_MEDIA_END;
		    		document.onkeypress({keyCode:768});
		    	}
		    	var mVideo= document.getElementById("mVideo");
				mVideo.textContent="VIDEO PLAY...";
		    }
	}
}

if(typeof(Utility)=="undefined"){
	var Utility =  {event:EVENT_MEDIA_END,
					setBrowserWindowAlpha:function(){},
					getEvent:function(){return this.event},
					};
}
if(typeof(Authentication)=="undefined"){
	var Authentication =  {
					CTCGetConfig:function(keyName){
						if(keyName == 'UserToken' ){
							return '88888888@etva***A51852458f036ad8';
						}
						else if(keyName == 'UserID' ){
							return '88888888@etva';
						}else
						{
							return null;
						}
						
					},
					CTCSetConfig:function(){
						
					}
	}
}