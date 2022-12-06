function preload(){

}

function setup(){
canvas=createCanvas(500, 500);
canvas.center();
video=createCapture(VIDEO);
video.size(300, 300);
video.hide();
}

function draw(){
    image(video, 100, 100, 300, 300 );
    fill("green");
    rect(0, 0, 20, 500);
    rect(0, 0, 500, 20);
    rect(480, 0, 20, 500);
    rect(0, 480, 500, 20);
    fill("red");
    circle(20, 20, 40);
    circle(480, 20, 40);
    circle(480, 480, 40);
    circle(20, 480, 40);
}