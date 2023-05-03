// Hour Glass
let hour = document.getElementById("hour");
let ctx1 = hour.getContext("2d");

ctx1.fillStyle = "black";
ctx1.beginPath();
ctx1.fillRect(100,0,200,50); // Top

ctx1.beginPath();
ctx1.fillRect(100,350,200,50); // Bottom

ctx1.strokeStyle = "black";
ctx1.beginPath();
ctx1.moveTo(200,50);
ctx1.lineTo(200,350);
ctx1.stroke(); // Line

ctx1.beginPath();
ctx1.moveTo(100,50);
ctx1.lineTo(300,350);
ctx1.stroke(); // Line

ctx1.beginPath();
ctx1.moveTo(300,50);
ctx1.lineTo(100,350);
ctx1.stroke(); // Line

// Geometric Circle
let geo = document.getElementById("geo");
let ctx2 = geo.getContext("2d");

ctx2.strokeStyle = "black";
ctx2.beginPath();
ctx2.arc(200,200,100,0,2*Math.PI);
ctx2.stroke(); // Circle
  
for(let i=0;i<4;i++){
    ctx2.beginPath();
    ctx2.moveTo(200,100);
    ctx2.lineTo(286.6025403784439,250);
    ctx2.lineTo(113.39745962155614,250);
    ctx2.lineTo(200,100);
    ctx2.stroke();
    ctx2.rotate(Math.PI/6);
    ctx2.translate(74,-127);
} // Triangles

// Biohazard Symbol
let bio = document.getElementById("bio");
let ctx3 = bio.getContext("2d");

ctx3.strokeStyle = "black";
ctx3.lineWidth = 10;
ctx3.beginPath();
ctx3.arc(200,200,150,0,2*Math.PI);
ctx3.stroke(); // Outer Circle

ctx3.fillStyle = "black";
ctx3.beginPath();
ctx3.arc(200,150,50,0,2*Math.PI);
ctx3.fill(); // Inner Black Circle

ctx3.beginPath();
ctx3.arc(160,225,52,0,2*Math.PI);
ctx3.fill(); // Inner Black Circle

ctx3.beginPath();
ctx3.arc(240,225,52,0,2*Math.PI);
ctx3.fill(); // Inner Black Circle

ctx3.fillStyle = "yellow";
ctx3.beginPath();
ctx3.arc(200,200,15,0,2*Math.PI);
ctx3.fill(); // Inner Yellow Circle

ctx3.beginPath();
ctx3.arc(200,140,40,0,2*Math.PI);
ctx3.fill(); // Inner Yellow Circle

ctx3.beginPath();
ctx3.arc(150,232,40,0,2*Math.PI);
ctx3.fill(); // Inner Yellow Circle

ctx3.beginPath();
ctx3.arc(250,232,40,0,2*Math.PI);
ctx3.fill(); // Inner Yellow Circle