import "./style.css";

const app: HTMLDivElement = document.querySelector("#app")!;

const gameName = "Brandon's Game";
const buttonName = "🍆";

document.title = gameName;

const header = document.createElement("h1");
header.innerHTML = gameName;
app.append(header);

const button = document.createElement("Button");
button.innerHTML = buttonName;
app.append(button);
