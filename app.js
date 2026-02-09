const tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// ---------- CANVAS ----------
const canvas = document.getElementById("dial");
const ctx = canvas.getContext("2d");

const cx = canvas.width / 2;
const cy = canvas.height;
const radius = 150;

const segments = [
  { value: 2, color: "#f1c453" },
  { value: 3, color: "#ef476f" },
  { value: 4, color: "#118ab2" },
  { value: 3, color: "#ef476f" },
  { value: 2, color: "#f1c453" },
];

const total = segments.reduce((s, x) => s + x.value, 0);
let angle = 0;

// ---------- DRAW ----------
function drawDial() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  let start = Math.PI;
  for (const seg of segments) {
    const slice = Math.PI * (seg.value / total);

    ctx.beginPath();
    ctx.arc(cx, cy, radius, start, start + slice);
    ctx.lineTo(cx, cy);
    ctx.fillStyle = seg.color;
    ctx.fill();

    start += slice;
  }

  drawArrow();
}

function drawArrow() {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(angle);

  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -130);
  ctx.lineWidth = 6;
  ctx.strokeStyle = "#222";
  ctx.stroke();

  ctx.restore();
}

// ---------- INTERACTION ----------
canvas.addEventListener("click", e => {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left - cx;
  const y = cy - (e.clientY - rect.top);

  const a = Math.atan2(x, y);
  if (a >= -Math.PI / 2 && a <= Math.PI / 2) {
    angle = a;
    drawDial();
  }
});

// ---------- TELEGRAM MAIN BUTTON ----------
tg.MainButton.setText("Отправить");
tg.MainButton.show();

tg.MainButton.onClick(() => {
  tg.sendData(JSON.stringify({ angle }));
});

// старт
drawDial();
