var URL = window.location.href;
var bugs = []; 

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  var mainP = createDiv("Thank You <br /> " + URL.match(/(?:#)\w+/g).toString().split('_').join(' ').substring(1)).id('demo');
}

function draw() {
  var R = map(mouseX,0,width,100,255);	
  var G = map(mouseY,0,height,100,255);
  var B = 255;	
  background(R, G, B, 10);
  for (var i=0; i<bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

function mousePressed(){
	
	fill('white');
	stroke('white');
	bugs.push(new Jitter());
	if(bugs.length > 1){
		bugs.pop();
		bugs.pop();	
	} 
}

function Jitter() {
  this.x = mouseX;
  this.y = mouseY;
  this.diameter = random(4, 5);

  this.move = function() {
    this.x = random(mouseX-5, mouseX+5);
    this.y = random(mouseY-5, mouseY+5);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}