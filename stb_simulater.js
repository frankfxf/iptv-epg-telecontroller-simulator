/**
 * 
 */
var   EVENT_MEDIA_ERROR ="{type:'EVENT_MEDIA_ERROR',error_code:27}";
var   EVENT_MEDIA_END =  "{type:'EVENT_MEDIA_END'}";
var   EVENT_MEDIA_BEGINING ="{type:'EVENT_MEDIA_BEGINING'}";
var   EVENT_PLAYMODE_CHANGE ="{type:'EVENT_PLAYMODE_CHANGE'}";
var   EVENT_TVMS ="{type:'EVENT_TVMS'}";

if(typeof(MediaPlayer)=="undefined"){

	var MediaPlayer = function(){};
	MediaPlayer.prototype={
			volume:80,
			duration:2*60,
			currentPlayTime:0,
			getNativePlayerInstanceID:function(){ 
		       return 1;
		    } ,
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
		    setCycleFlag:function(){},
		    setProgressBarUIFlag:function(){},
		    setNativeUIFlag:function(){},
		    setAudioVolumeUIFlag:function(){},
		    setAudioTrackUIFlag:function(){},
		    setMuteUIFlag:function(){},
		    setMuteUIFlag:function(){},
		    playFromStart:function(){this.currentPlayTime=0;},
		    setVideoDisplayArea:function(){},
		    setVideoDisplayMode:function(){ },
		    refreshVideoDisplay:function(){},
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
		    resume:function(){},
		    gotoEnd:function(){
		    	this.currentPlayTime = this.duration;
		    	Utility.event=EVENT_MEDIA_END ;
		    	document.onkeypress({keyCode:768});
		    },
		    gotoStart:function(){},
		    initMediaPlayer:function(){},		    
		    leaveChannel:function(){},
		    pause:function(){},
		    stop:function(){},
		    switchAudioChannel:function(){},
		    playByTime:function(type,time,speed){
		    	this.currentPlayTime=time;
		    },
		    releaseMediaPlayer:function(){},
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
		    }
	}
}

if(typeof(Utility)=="undefined"){
	var Utility =  {event:EVENT_MEDIA_END,
					setBrowserWindowAlpha:function(){},
					getEvent:function(){return this.event},
					};
}

    
