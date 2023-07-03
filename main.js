leftwristx=0;
rightwristx=0;
difference=0;
function setup(){
    canvas=createCanvas(550,500);
    canvas.position(850,150);
    video=createCapture(VIDEO);
    video.position(150,150);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelloaded);
    poseNet.on("pose",gotposses);
}
function modelloaded(){
    console.log("Model Loaded");
}
function gotposses(results){
    if(results.length>0){
        console.log(results);
        rightwristx=results[0].pose.rightWrist.x;
        leftwristx=results[0].pose.leftWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("Rightwristx= "+rightwristx+"Leftwristx= "+leftwristx+"Difference= "+difference);
    }
}
function draw(){
    background("lightyellow");
    textSize(difference);
    fill("cyan");
    text("shubhajit",100,150);
}