// This script generates a favicon.ico file for Go-Rent
const fs = require("fs");
const { createCanvas } = require("canvas");

// Create canvas
const size = 32; // favicon size
const canvas = createCanvas(size, size);
const ctx = canvas.getContext("2d");

// Draw background (blue square with rounded corners)
ctx.fillStyle = "#3B82F6"; // Go-Rent blue color
ctx.beginPath();
// We can't use roundRect directly in node-canvas, so we'll draw it manually
const radius = 5;
ctx.moveTo(radius, 0);
ctx.lineTo(size - radius, 0);
ctx.arcTo(size, 0, size, radius, radius);
ctx.lineTo(size, size - radius);
ctx.arcTo(size, size, size - radius, size, radius);
ctx.lineTo(radius, size);
ctx.arcTo(0, size, 0, size - radius, radius);
ctx.lineTo(0, radius);
ctx.arcTo(0, 0, radius, 0, radius);
ctx.fill();

// Draw "GR" text in white
ctx.fillStyle = "white";
ctx.font = "bold 16px Arial";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("GR", size / 2, size / 2);

// Output to PNG file (we can't output directly to ICO format, so we'll use PNG)
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("public/favicon.png", buffer);

console.log("Favicon PNG generated at public/favicon.png");
console.log(
  "Please convert this PNG to ICO format using an online converter and replace favicon.ico"
);
