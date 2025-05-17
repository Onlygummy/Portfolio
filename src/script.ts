import { keyboard_ascii } from "./ascii-art/keyboard.js";

const animateAscii = (preElementId: string, ascii: string[], delay: number) => {
    let text: HTMLPreElement = document.getElementById(preElementId) as HTMLPreElement;
    let index = 0;
    setInterval(() => {
        text.textContent = ascii[index];
        index = (index + 1) % ascii.length; // ถ้าเกินสุด ก็กลับไปเริ่มต้น
    }, delay);
}

animateAscii("ascii-keyboard", keyboard_ascii, 500);