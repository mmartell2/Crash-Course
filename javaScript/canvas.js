//finds canvas html element
var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var context = canvas.getContext('2d');

//context.fillRect(x, y, width, height);
//x and y from the top left of the screen
// context.fillStyle = "orange";
// context.fillRect(100, 100, 100, 100);
// context.fillRect(200, 500, 100, 100);
// context.fillStyle = "yellow";
// context.fillRect(300, 300, 100, 100);

// console.log(canvas);

// lines
// context.beginPath();
// context.moveTo(50, 300);
// context.lineTo(300, 100);
// context.lineTo(400, 300);
// context.strokeStyle = "lime";
// context.stroke();

// arc / circle
//context.beginPath();
//context.arc(300, 300, 30, 0, Math.PI * 2, false);
//context.strokeStyle = "red";
//context.stroke();

// const colors = new Array("blue", "red", "green", "lime", "orange", "yellow", "purple", "cyan", "teal");

// for(i = 0; i < 100; i++) {
//     var x = Math.random() * window.innerWidth;
//     var y = Math.random() * window.innerHeight;
//     context.beginPath();
//     context.arc(x, y, 30, 0, Math.PI * 2, false);
//     context.strokeStyle = "red";
//     context.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
//     context.stroke();
// }
