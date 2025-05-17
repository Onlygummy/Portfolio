import { keyboard_ascii } from "./ascii-art/keyboard.js";


let text: HTMLTextAreaElement = document.getElementById("ascii-keyboard") as HTMLTextAreaElement;
text.textContent = keyboard_ascii.join("\n");
