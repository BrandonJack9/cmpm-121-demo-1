import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

let counter: number = 0;
const gameName = "Brandon's Game";
const buttonName = "🍆";

function increaseCounter() {
  counter++;

  log.innerHTML = `Number of fruit: ${counter}`;
}

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("Button");
button.innerHTML = buttonName;
button.addEventListener("click", increaseCounter);
app.append(button);

const log = document.createElement("p");
log.innerHTML = `Number of Fruit: ${counter}`;
app.append(log);
