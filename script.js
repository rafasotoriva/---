const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const response = document.getElementById("response");

yesBtn.addEventListener("click", () => {
  response.innerHTML = `
    <h2>Obrigada Linda (não me mate)</h2>
  `;
});

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  response.innerHTML = `
    <p>Eu entendo… mas meu carinho por você continua aqui 💛</p>
  `;
});
