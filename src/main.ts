import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;
let counter: number = 0;
let growthRate: number = 0;

const gameName = "Satan's Army";
const satan = "😈";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const startButton = document.createElement("button");
startButton.innerHTML = satan;
app.append(startButton);

app.append(document.createElement("div"));

startButton.addEventListener("click", () => {
  IncrementCounter(1);
});
/*startButton.addEventListener("click", () => {
  counter++;
  log.innerHTML = `Number of warriors: ${counter.toFixed(2)}`;
  requestAnimationFrame(tick);
});*/

app.append(document.createElement("div"));

function incrementDemonCount(level: number) {
  counter += level;
  demonCount.innerHTML = `Number of Warriors: ${counter.toFixed(2)}`;
}

interface Warrior {
  name: string;
  description: string;
  cost: number;
  rate: number;
  icon: string;
}

class incrementDemons {
  description: string;
  cost: number;
  rate: number;
  name: string;
  icon: string;
  amount: number;
  button: HTMLButtonElement;

  constructor(
    cost: number,
    rate: number,
    name: string,
    icon: string,
    description: string,
  ) {
    this.description = description;
    this.cost = cost;
    this.rate = rate;
    this.name = name;
    this.icon = icon;
    this.amount = 0;
    this.button = document.createElement("button");
    this.update();
    this.button.disabled = true;
    this.button.addEventListener("click", () => {
      counter -= this.cost;
      growthRate += this.rate;
      this.amount++;
      this.cost *= 1.15;
      this.update();
    });
  }
  update() {
    this.button.innerHTML = `
      <font size="+2">${this.icon}</font><br>
      ${this.name}<br>
      ${this.description}<br>
      ${this.cost.toFixed(0)} warriors of the damned<br>
       Amount: ${this.amount}`;
  }
}

const availableWarriors: Warrior[] = [
  {
    name: "Gremlin",
    description: "A little furry demon with no armor",
    cost: 10,
    rate: 0.1,
    icon: "👹",
  },
  {
    name: "Goblin",
    description: "A plucky demon with thick skin and light armor",
    cost: 100,
    rate: 2,
    icon: "👺",
  },
  {
    name: "Skeleton",
    description: "A strong warrior demon with heavy armor",
    cost: 1000,
    rate: 50,
    icon: "💀",
  },
  {
    name: "Vampire",
    description: "A powerful and intelligent officer of the undead",
    cost: 2000,
    rate: 100,
    icon: "🧛",
  },
  {
    name: "Pumpkin Lord",
    description:
      "Giant commander of Satans Army capable of unspeakable horrors",
    cost: 10000,
    rate: 1000,
    icon: "🎃",
  },
];

const upgrades: incrementDemons[] = [];

availableWarriors.forEach((Monster) =>
  upgrades.push(
    new incrementDemons(
      Monster.cost,
      Monster.rate,
      Monster.name,
      Monster.icon,
      Monster.description,
    ),
  ),
);

upgrades.forEach((incrementDemons) => app.append(incrementDemons.button));

const demonCount = document.createElement("div");
incrementDemonCount(0);
app.append(demonCount);

const demonRate = document.createElement("div");
app.append(demonRate);

const demonAmount = document.createElement("div");
app.append(demonAmount);

let lastTick = performance.now();

function tick() {
  const delta = performance.now() - lastTick;
  lastTick = performance.now();
  IncrementCounter((growthRate * delta) / 1000);
  requestAnimationFrame(tick);

  upgrades.forEach(
    (upgrade) => (upgrade.button.disabled = counter < upgrade.cost),
  );

  demonRate.innerHTML = `${growthRate.toFixed(2)} Warriors joining per second`;
}

function IncrementCounter(step: number) {
  counter += step;
  demonCount.innerHTML = `${counter.toFixed(2)} Undead Warriors`;
}

requestAnimationFrame(tick);
