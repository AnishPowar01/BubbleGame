var time = 60;
var score = 0;
let random;
let timeinterval;

function makeBubble() {
  let clutter = "";

  for (let i = 0; i < 102; i++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#panelBot").innerHTML = clutter;
}

function runtimer() {
  timeinterval = setInterval(function () {
    if (time > 0) {
      time--;
      document.querySelector("#timeval").textContent = time;
    } else {
      clearInterval(timeinterval);
      document.querySelector("#panelBot").innerHTML = `
      <div>
      <h1>Game Over</h1>
      <p>Your Score is ${score}</p>
      <button id="restart">Restart</button>
      </div>
      `;

      // Add event listener for the restart button
      document.querySelector("#restart").addEventListener("click", function () {
        time = 60;
        score = 0;
        document.querySelector("#scoreVal").textContent = score;
        makeBubble();
        runtimer();
        getNewHitVal();
      });
    }
  }, 1000);
}

function getNewHitVal() {
  let val = document.querySelector("#hitval");
  random = Math.floor(Math.random() * 10);
  val.textContent = random;
}

function increaseScore() {
  score += 10;
  document.querySelector("#scoreVal").textContent = score;
}

document
  .querySelector("#panelBot")
  .addEventListener("click", function (details) {
    var clickedNum = Number(details.target.textContent);

    if (clickedNum === random) {
      increaseScore();
      makeBubble();
      getNewHitVal();
    }
  });

makeBubble();
runtimer();
getNewHitVal();
