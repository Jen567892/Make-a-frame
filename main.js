function preload(){

}
function setup(){
    canvas = createCanvas(400,400);
    canvas.position(110,300);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 100,100,200,200)
   
    stroke(255,0,0);
    fill(255,0,0);
rect(50,50,300,20)
rect(50,50,20,300)
rect(350,50,20,300)
rect(50,350,310,20)

    fill(0,128,0);

    circle(50,50,60);
    circle(350,50,60)
    circle(350,350,60)
    circle(50,350,60)
}
