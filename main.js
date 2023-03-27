nosX = 0;
nosY = 0;

function preload(){
   tach =  loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
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
    image(video, 0,0,700,400);
    image(tach, nosX,nosY,100,100);
}

function cap(){
          save('filterWebx');
}

function modelLoaded(){
    console.log("ml5 loaded with version - " + " " + ml5.version);
}

function gotPoses(results){
    if (results.length > 0){
        nosX = results[0].pose.nose.x - 55;
        nosY = results[0].pose.nose.y  + 20;
    }
}