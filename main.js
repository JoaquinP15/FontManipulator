leftwristX = 0;
rightwristX = 0;
difference = 0;

function preload(){
}

function setup(){
    canvas = createCanvas(650,500)
    canvas.position(810,140)
    video = createCapture(VIDEO);
    video.size(650,500);
    video.position(75,140);

    posenet = ml5.poseNet(video,modelLoaded);
    posenet.on("pose",gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;

        difference = floor(leftwristX - rightwristX);
    }
}

function draw(){
    background(90);
    textSize(difference);
    fill("gold");
    text('Hello', leftwristX, rightwristX, difference);
}