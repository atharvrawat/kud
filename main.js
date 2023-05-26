function preload(){

}

function setup(){
canvas=createCanvas(500,500);

canvas.position(560,150);
video=createCapture(VIDEO);
video.size(500,500);
posenet=ml5.poseNet(video,modelloaded);
posenet.on("pose",gotposes);
}

function draw(){
background("grey");

}

function modelloaded(){
    console.log("Model Is Loaded");
}

function gotposes(results){
if(results.length>0){
    console.log(results)
}

}