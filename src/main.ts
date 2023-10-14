import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
let counter: number = 0;
let growthRate: number = 0;

const gameName = "Satan's Army";
const incrementDemons = "😈";

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
let gremlinCost = 10;
const honorGuardButton = document.createElement("button");
honorGuardButton.innerHTML = `<font size = "+2">👹</font><br>Gremlins: ${gremlins}<br>Gremlin price: ${gremlinCost}`;
honorGuardButton.disabled = true;

honorGuardButton.addEventListener("click", () => {
  gremlinCost *= 1.15;
  gremlins++;
  growthRate += 0.1;
  if (counter >= gremlinCost) {
    counter -= gremlinCost;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(honorGuardButton);

let goblins = 0;
let goblinCost = 100;
const goblinButton = document.createElement("button");
goblinButton.disabled = true;
goblinButton.innerHTML = `<font size = "+2">👺</font><br>Goblins: ${goblins}<br>Goblin price: ${goblinCost}`;

goblinButton.addEventListener("click", () => {
  goblinCost *= 1.15;
  goblins++;
  growthRate += 2;
  if (counter >= goblinCost) {
    counter -= goblinCost;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(goblinButton);

let skeletons = 0;
let skeletonCost = 1000;
const skeletonButton = document.createElement("button");
skeletonButton.innerHTML = `<font size = "+2">💀</font><br>Skeletons: ${skeletons}<br>Skeleton price: ${skeletonCost}`;
skeletonButton.disabled = true;

skeletonButton.addEventListener("click", () => {
  skeletonCost *= 1.15;
  skeletons++;
  growthRate += 50;
  if (counter >= skeletonCost) {
    counter -= skeletonCost;
    log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  }
});

app.append(skeletonButton);

let lastMillis = 0;

const log = document.createElement("p");
log.innerHTML = `No Warriors!`;
app.append(log);

const rate = document.createElement("div");
app.append(rate);

function tick(millis: number) {
  const delta = millis - lastMillis;
  lastMillis = millis;
  if (counter >= gremlinCost) {
    honorGuardButton.disabled = false;
  } else honorGuardButton.disabled = true;
  if (counter >= goblinCost) {
    goblinButton.disabled = false;
  } else goblinButton.disabled = true;
  if (counter >= skeletonCost) {
    skeletonButton.disabled = false;
  } else skeletonButton.disabled = true;
  counter += (growthRate * delta) / 1000;
  honorGuardButton.innerHTML = `<font size = "+2">👹</font><br>Gremlins: ${gremlins}<br>Gremlin price: ${gremlinCost.toFixed(
    2,
  )}`;
  goblinButton.innerHTML = `<font size = "+2">👺</font><br>Goblins: ${goblins}<br>Goblin price: ${goblinCost.toFixed(
    2,
  )}`;
  skeletonButton.innerHTML = `<font size = "+2">💀</font><br>Skeletons: ${skeletons}<br>Skeleton price: ${skeletonCost.toFixed(
    2,
  )}`;
  log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  rate.innerHTML = `${growthRate.toFixed(2)} warriors joining per second`;
  requestAnimationFrame(tick);
}
