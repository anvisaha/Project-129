song1 = "";
song2 = "";
left_wrist_x = 0;
right_wrist_x = 0;
left_wrist_y = 0;
right_wrist_y = 0;

function preload() { 
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000");
    circle(left_wrist_x, left_wrist_y, 20);
}


function modelLoaded() {
    console.log('posenet is initialized');
}

function gotPoses(results) {
    if(results.length > 0) {
        scoreleftwrist = results[0].pose.keypoints[9].score;


        left_wrist_x = results[0].pose.leftWrist.x;
        left_wrist_y = results[0].pose.leftWrist.y;
        right_wrist_y = results[0].pose.rightWrist.y;
        right_wrist_x = results[0].pose.rightWrist.x;
    }
}