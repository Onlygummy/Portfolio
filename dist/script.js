import { keyboard_ascii } from "./ascii-art/keyboard.js";
let text = document.getElementById("ascii-keyboard");
text.textContent = keyboard_ascii.join("\n");
