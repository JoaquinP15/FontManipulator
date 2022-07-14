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
    }
}