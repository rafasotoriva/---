const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

// Faz o botão "Não" fugir
noBtn.addEventListener("mouseover", () => {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  
  // Calcula posições aleatórias dentro do limite visível
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
});

// Ação ao clicar no Sim
yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    <div style="font-size: 40px;">💖</div>
    <h2>Sabia que você era incrível!</h2>
    <p>Me avisa que horas posso passar aí? Prometo que vai valer a pena. 😊</p>
  `;
  // Esconde os botões após o aceite
  document.querySelector(".buttons").style.display = "none";
});
