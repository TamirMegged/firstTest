//when user click calculate volume button - calculate and show volume in span + draw a circle with this radius
let calcBtn = document.getElementById('calcVol');
calcBtn.addEventListener('click', calcBallVol);

function calcBallVol() {
    let radius = document.getElementById('rInput').value;
    if (radius === "") {
        alert('Please enter radius first');
        return;
    }
    let volume = (4 * Math.PI * Math.pow(radius, 3)) / 3;
    let strVolume = `${Math.round(100 * volume) / 100}`;
    document.querySelector('span').innerText = strVolume;
    drawBall(radius);
}

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

function drawBall(radius) {
    if (radius > 250) {
        alert('Radius is too big for the animation');
        return;
    }
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(250, 250, radius, 0, 2 * Math.PI);
    ctx.stroke();
}


//when user click clear board button - clear canvas
let clearBtn = document.getElementById('clearCanvas');
clearBtn.addEventListener('click', clearCanvas);

function clearCanvas() {
    ctx.clearRect(0, 0, 500, 500);
}


//onload create an animation of circles with all radiuses between 1 to max radius (250)
let i = 0;
let onloadDraw = setInterval(function () {
    i++;
    if (i > 250) {
        clearInterval(onloadDraw);
        return;
    }
    drawBall(i);
}, 10);