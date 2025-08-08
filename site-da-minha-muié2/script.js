// Digitação
const texto = "Você não tem ideia do quanto ficou importante na minha vida. Te amo muitão ❤️";
let index = 0;
function escrever() {
  if (index < texto.length) {
    document.getElementById("mensagem").innerHTML += texto.charAt(index);
    index++;
    setTimeout(escrever, 70);
  }
}
escrever();

// Corações no fundo
const canvas = document.getElementById("hearts");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let hearts = [];

function Heart() {
  this.x = Math.random() * canvas.width;
  this.y = canvas.height + Math.random() * 100;
  this.size = Math.random() * 20 + 10;
  this.speed = Math.random() * 1 + 0.5;
  this.opacity = Math.random();
}

Heart.prototype.draw = function() {
  ctx.globalAlpha = this.opacity;
  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.bezierCurveTo(this.x + this.size, this.y - this.size,
                    this.x + this.size * 2, this.y + this.size,
                    this.x, this.y + this.size * 2);
  ctx.bezierCurveTo(this.x - this.size * 2, this.y + this.size,
                    this.x - this.size, this.y - this.size,
                    this.x, this.y);
  ctx.fill();
};

Heart.prototype.update = function() {
  this.y -= this.speed;
  if   (this.y < -20) {
    this.y = canvas.height + Math.random() * 100;
    this.x = Math.random() * canvas.width;
  }
};

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  hearts.forEach((heart) => {
    heart.update();
    heart.draw();
  });
  requestAnimationFrame(animate);
}

function initHearts() {
  for (let i = 0; i < 50; i++) {
    hearts.push(new Heart());
  }
  animate();
}

initHearts();
