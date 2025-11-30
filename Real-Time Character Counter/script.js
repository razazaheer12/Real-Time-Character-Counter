const textarea = document.getElementById("textarea");
const total = document.getElementById("total");
const remaining = document.getElementById("remaining");
const limit = 3000;

// Auto-resize textarea
function autoResize(el) {
    el.style.height = "auto";  
    el.style.height = el.scrollHeight + "px";
}

// Main input logic
textarea.addEventListener("input", () => {
    let count = textarea.value.length;

    // Character limit protection
    if (count > limit) {
        textarea.value = textarea.value.substring(0, limit);
        count = limit;
    }

    total.textContent = count;
    remaining.textContent = limit - count;

    autoResize(textarea);

    textarea.disabled = (count === limit);
});

// Typewriter Effect
const titleText = "Real-time Character Counter";
const header = document.getElementById("typewriter");
let index = 0;

function typeWriter() {
    if (index < titleText.length) {
        header.style.width = "fit-content";
        header.textContent += titleText.charAt(index);
        index++;
        setTimeout(typeWriter, 60);
    } else {
        header.style.borderRight = "0px"; // remove cursor
    }
}

window.onload = () => {
    typeWriter();
    autoResize(textarea);
};
