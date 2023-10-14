import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
let counter: number = 0;
let growthRate: number = 0;

const gameName = "Satan's Army";
const incrementDemons = "😈";
const honorGuard = "👹";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const startButton = document.createElement("Button");
startButton.innerHTML = incrementDemons;
startButton.addEventListener("click", () => {
  counter++;
  log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  requestAnimationFrame(tick);
});
app.append(startButton);

const honorGuardButton = document.createElement("button");
honorGuardButton.innerHTML = honorGuard;
honorGuardButton.disabled = true;

honorGuardButton.addEventListener("click", () => {
  growthRate++;
  if (counter >= 10) {
    counter -= 10;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(honorGuardButton);

let lastMillis = 0;

const log = document.createElement("p");
log.innerHTML = `No Warriors!`;
app.append(log);

function tick(millis: number) {
  const delta = millis - lastMillis;
  lastMillis = millis;
  if (counter >= 10) {
    honorGuardButton.disabled = false;
  } else honorGuardButton.disabled = true;
  counter += (growthRate * delta) / 1000;
  log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  requestAnimationFrame(tick);
}
