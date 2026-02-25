const app = document.getElementById("app");

const stages = [
  { icon: "🔒", text: "Você confia em mim?", button: "Sim..." },
  { icon: "✨", text: "Então me deixa te mostrar algo…", button: "Eu quero ver" },
  { icon: "🌸", text: "Eu pensei muito antes de fazer isso…", button: "Por quê?" },
  { icon: "💌", text: "Porque você é importante pra mim.", button: "Continua..." },
  { final: true }
];

let current = 0;

function renderStage() {
  const stage = stages[current];

  if (!stage.final) {
    app.className = "screen dark";

    app.innerHTML = `
      <div class="content fade">
        <div class="icon">${stage.icon}</div>
        <h1>${stage.text}</h1>
        <button class="next">${stage.button}</button>
      </div>
    `;

    document.querySelector(".next").addEventListener("click", () => {
      current++;
      renderStage();
    });

  } else {
    renderFinalQuestion();
  }
}

function renderFinalQuestion() {
  app.className = "screen question-bg";

  app.innerHTML = `
    <div class="content fade">
      <div class="icon">🌙</div>
      <h1>Podemos nos encontrar para conversar com calma?</h1>
      <div class="buttons">
        <button id="yes">Sim ❤️</button>
        <button id="no">Não 😢</button>
      </div>
    </div>
  `;

  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");

  noBtn.addEventListener("mouseenter", () => {

    const container = document.querySelector(".buttons");
    const rect = container.getBoundingClientRect();

    const maxX = rect.width - noBtn.offsetWidth;
    const maxY = 0; // mantém na mesma linha

    const randomX = Math.random() * maxX;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = "0px";
  });

  yesBtn.addEventListener("click", showFinal);
}

function showFinal() {
  app.className = "screen light";

  app.innerHTML = `
    <div class="content fade">
      <div class="icon">🌷</div>
      <h1>Obrigada por aceitar, você é incrível Linda!.</h1>
      <p>Prometo que será leve e com muito carinho, estou ansiosa ❤️.</p>
    </div>
  `;

  startFlowers();
}

function startFlowers() {
  setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.innerText = "🌸";
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.animationDuration = 5 + Math.random() * 5 + "s";

    document.body.appendChild(flower);

    setTimeout(() => flower.remove(), 10000);
  }, 500);
}

renderStage();
