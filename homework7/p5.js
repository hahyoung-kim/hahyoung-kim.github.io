function setup() {
    createCanvas(windowWidth, windowHeight);  
    colorMode(HSB); // rainbow color
    strokeWeight(20);
}
  
function draw() {
    stroke((5*frameCount) % 360, 40, 100);
    fill((5*frameCount) % 360, 100, 100);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
}

