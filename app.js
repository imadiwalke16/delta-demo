let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userseq = [];

  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  console.log(randIdx);
  console.log(randColor);
  console.log(randBtn);
  gameseq.push(randColor);
  console.log(gameseq);
  gameflash(randBtn);
}

function checkans() {
  // console.log("cur level", level);
  let idx = level - 1;

  if (userseq[idx] === gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over Your Score Was <b>${level}</b> <br>Press Any Key To Restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function btnpress() {
  let btn = this;
  userflash(btn);
  let usercolor = btn.getAttribute("id");
  userseq.push(usercolor);
  console.log(userseq);
  // checkans();
  checkans(userseq.length - 1);
}

let butns = document.querySelectorAll(".btn");

for (btn of butns) {
  btn.addEventListener("click", btnpress);
}

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}
