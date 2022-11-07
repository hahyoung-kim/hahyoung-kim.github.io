function setup(){
    createCanvas(windowWidth,windowHeight);
}

function mouseClicked(){
    star();
}

function mouseDragged(){
    star();
}

function star() {
	beginShape();  
    
    pastelColor = color(random(150,255),random(150,255),random(150,255));
    fill(pastelColor);
    stroke(pastelColor)

    x = mouseX;
    y = mouseY;
    size = random(1,4);
	vertex(x+0/size, y-50/size);
	vertex(x+14/size, y-20/size);
	vertex(x+47/size, y-15/size);
	vertex(x+23/size, y+7/size);
	vertex(x+29/size, y+40/size);
	vertex(x+0/size, y+25/size);
	vertex(x-29/size, y+40/size);
	vertex(x-23/size, y+7/size);
	vertex(x-47/size, y-15/size);
	vertex(x-14/size, y-20/size);
	
    endShape(CLOSE);

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

