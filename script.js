// setting variables to elements, got the canvas element by default ID variable
// set c as the canvas context 2d
// tx asper the x axis detetmining the window inner width
// ty asper the y axis detetmining the window inner height
var c = canvas.getContext("2d");
var tx = window.innerWidth;
var ty = window.innerHeight;
canvas.width = tx;
canvas.height = ty;
//c.lineWidth= 5;
//c.globalAlpha = 0.5;

var mousex = 0;
var mousey = 0;
addEventListener("mousemove", function() {
  mousex = event.clientX;
  mousey = event.clientY;
});
console.log(mousex);