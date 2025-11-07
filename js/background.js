// js/background.js

bgNumber = Math.floor(Math.random() * 3) + 1;

// Aplica el fondo
document.body.style.background = `url("images/background/wall-${bgNumber}.jpg") no-repeat center center fixed`;
document.body.style.backgroundSize = "cover";
document.body.style.backgroundAttachment = "fixed";
