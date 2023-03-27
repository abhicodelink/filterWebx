function preload(){
}

function setup(){
          canvas = createCanvas(700,400);
video = createCapture(VIDEO);
video.size(700,300);
video.hide();
posenet = ml5.poseNet(video, modelLoaded)
posenet.on('pose',gotPoses);
}

function draw(){
    image(video, 0,0,700,400)
}

function cap(){
          save('filterWebx');
}

function modelLoaded(){
    console.log("ml5 loaded with version - " + " " + ml5.version);
}

function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        console.log("Nose X - " + " " + results[0].pose.nose.x);
        console.log("Nose Y - " + " " + results[0].pose.nose.y);
    }
}