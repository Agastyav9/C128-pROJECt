song1 = "";
song2 = "";
LeftWristX = "0";
LeftWristY = "0";
RightWristX = "0";
RightWristY = "0";

function preload()
{
    song1 = op1.mp3;
    song2 = op2.mp3;
}

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.hide();

    canvas = createCanvas(550, 500);
    canvas.position(600,200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
   image(video, 0, 0, 550, 500);
}

function modelLoaded()
{
    console.log('Posenet is Initialized');
}  

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        LeftWristX = results[0].pose.leftWrist.x
        LeftWristY = results[0].pose.leftWrist.y   
        RightWristX = results[0].pose.rightWrist.x
        RightWristY = results[0].pose.rightWrist.y
        console.log("LeftWristX = " + LeftWristX +"LeftWristY = " + LeftWristY );
        console.log("RightWristX = " + RightWristX +"RightWristY = " + RightWristY );

    }
}