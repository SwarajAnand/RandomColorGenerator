console.log("working");

const container = document.getElementById("container");

const generateColor = () => {
  let randomColor = Math.floor(Math.random() * 16456416777215)

    .toString(16)
    .slice(0, 6);
  return "#" + randomColor;
};

console.log(generateColor());

const divGenerator = () => {
  for (let i = 0; i < 30; i++) {
    let randomColorVal = generateColor();
    let div = document.createElement("div");
    div.classList.add("internalDivs");
    div.style.backgroundColor = randomColorVal;

    div.innerHTML = `
    <p class="colorText">${randomColorVal}</p>
    `;

    container.appendChild(div);
  }
};

divGenerator();
