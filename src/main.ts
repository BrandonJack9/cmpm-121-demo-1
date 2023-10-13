import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
let counter: number = 0;
let growthRate: number = 1;

const gameName = "Brandon's Game";
const buttonName = "🍆";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("Button");
button.innerHTML = buttonName;
button.addEventListener("click", () => {
  counter++;
});
app.append(button);

let lastMillis = 0;

const log = document.createElement("p");
log.innerHTML = `No fruit!`;
app.append(log);

function tick(millis: number) {
  const delta = millis - lastMillis;
  lastMillis = millis;

  counter += (growthRate * delta) / 1000;
  log.innerHTML = `Number of fruit: ${counter.toFixed(2)}`;
  requestAnimationFrame(tick);
}

requestAnimationFrame(tick);
