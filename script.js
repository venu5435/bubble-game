var timer = 60;

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>GAME OVER</H1>`
        }
    }, 1000);
}

runTimer();

hitrn = 0;

function getNewHit() {
     hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

getNewHit();

function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 180; i++) {
       var rn = Math.floor(Math.random() * 10);
       clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

makeBubble();

score = 0;

function increaseScore(){
  score += 10;
    document.querySelector("#scoreval").textContent = score;
}



document.querySelector("#pbtm").addEventListener("click", function (dets) {
    var clickedNumber = Number(dets.target.textContent)
    if(clickedNumber === hitrn){
        increaseScore();
        makeBubble();
        getNewHit();
    }
});
