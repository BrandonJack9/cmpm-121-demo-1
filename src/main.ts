import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
let counter: number = 0;
let growthRate: number = 0;

const gameName = "Satan's Army";
const incrementDemons = "😈";
const honorGuard = "👹";
const skeleton = "💀";

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

app.append(document.createElement("div"));

let gremlins = 0;
const honorGuardButton = document.createElement("button");
honorGuardButton.innerHTML = `<font size = "+2">👹</font><br>Gremlins: ${gremlins}`;
honorGuardButton.disabled = true;

honorGuardButton.addEventListener("click", () => {
  gremlins++;
  growthRate += 0.1;
  if (counter >= 10) {
    counter -= 10;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(honorGuardButton);

let goblins = 0;
const goblinButton = document.createElement("button");
goblinButton.disabled = true;
goblinButton.innerHTML = `<font size = "+2">👺</font><br>Goblins: ${goblins}`;

goblinButton.addEventListener("click", () => {
  goblins++;
  growthRate += 2;
  if (counter >= 100) {
    counter -= 100;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(goblinButton);

let skeletons = 0;
const skeletonButton = document.createElement("button");
skeletonButton.innerHTML = `<font size = "+2">💀</font><br>Skeletons: ${skeletons}`;
skeletonButton.disabled = true;

skeletonButton.addEventListener("click", () => {
  skeletons++;
  growthRate += 50;
  if (counter >= 1000) {
    counter -= 1000;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(skeletonButton);

let lastMillis = 0;

const log = document.createElement("p");
log.innerHTML = `No Warriors!`;
app.append(log);

let rate = document.createElement("div");
app.append(rate);

function tick(millis: number) {
  const delta = millis - lastMillis;
  lastMillis = millis;
  if (counter >= 10) {
    honorGuardButton.disabled = false;
  } else honorGuardButton.disabled = true;
  if (counter >= 100) {
    goblinButton.disabled = false;
  } else goblinButton.disabled = true;
  if (counter >= 1000) {
    skeletonButton.disabled = false;
  } else skeletonButton.disabled = true;
  counter += (growthRate * delta) / 1000;
  goblinButton.innerHTML = `<font size = "+2">👺</font><br>Goblins: ${goblins}`;
  honorGuardButton.innerHTML = `<font size = "+2">👹</font><br>Gremlins: ${gremlins}`;
  skeletonButton.innerHTML = `<font size = "+2">💀</font><br>Skeletons: ${skeletons}`;
  log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  rate.innerHTML = `${growthRate.toFixed(2)} warriors joining per second`;
  requestAnimationFrame(tick);
}
