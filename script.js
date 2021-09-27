const menu = document.querySelector(".menu-showup");
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];
const navLinks = document.querySelector(".nav__links");
const nav = document.querySelector("nav");
const numBalls = 50;
const balls = [];
const overlay = document.querySelector(".overlay");
const cancel = document.querySelector(".cancel");
for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 80)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 50)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  balls.push(ball);
  document.querySelector(".header-bg").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -5 : 5),
    y: Math.random() * 12,
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` },
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out",
    }
  );
});
menu.addEventListener("click", function () {
  overlay.classList.add("overlay-show");
});
cancel.addEventListener("click", function () {
  overlay.classList.remove("overlay-show");
  console.log("hihihi");
});

document.querySelectorAll(".nav__link").forEach((el) => {
  el.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href");

    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  });
});
