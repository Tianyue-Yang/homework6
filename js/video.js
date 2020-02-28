var video;

function getVid(){
	video = document.querySelector("#myVideo"); 
}

function playVid() { 
	video.play();
	let vol=document.querySelector("#volume");
	vol.innerHTML= video.volume * 100 + "%";
	console.log("Play Video");
} 

function pauseVid() { 
	video.pause();
	console.log("Pause Video");
} 

function decreaseSpeed() { 
	video.playbackRate *= 0.8;
  	console.log("Speed is "+ video.playbackRate);
} 

function increaseSpeed() {
	video.playbackRate *= 1.25;
	console.log("Speed is "+ video.playbackRate);
} 

function skipAhead() {
	video.currentTime += 60;
	if (video.currentTime >= video.duration){
		console.log("Video has ended");
		video.currentTime = 0;
		video.playbackRate = 1;
		console.log("Video starts over from beginning");
	}
	console.log("Current location is "+ video.currentTime);
} 


function mute() { 
	var mute_button = document.getElementById("mute");
  	if (video.muted){
  		video.muted = false;
  		mute_button.innerHTML = "Mute";
  		console.log("Unmuted");
  		}
  	else{
       	video.muted = true;
       	mute_button.innerHTML = "Unmute";
       	console.log("Muted");
		}
}

function changeVolume() {
	var volumeSlider = document.getElementById("volumeSlider");
	video.volume = volumeSlider.value / 100;
	console.log("Volume is " + video.volume*100);
	var volNum = document.getElementById("volume");
	volNum.innerHTML = video.volume*100 + "%";
}
       

function gray() { 
	document.querySelector("#myVideo").classList.add("grayscale");
 	console.log("In grayscale");
}

function color() {
	document.querySelector("#myVideo").classList.remove("grayscale");
	console.log("In color");
}
