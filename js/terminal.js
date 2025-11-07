const text = "> ACCESSING: THE MURKOFF FILES_ ";
const terminal = document.getElementById("terminal");
const overlay = document.getElementById("overlay");

let i = 0;

function typeWriter() {
  if (i < text.length) {
    terminal.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 80);
  } else {
    const cursor = document.createElement("span");
    cursor.classList.add("cursor");
    cursor.textContent = "█";
    terminal.appendChild(cursor);

    // Espera un poco y luego difumina el overlay
    setTimeout(() => {
      overlay.classList.add("hidden");
    }, 1200);

    // Muestra la barra de navegación después del acceso
    setTimeout(() => {
      document.querySelector(".navbar").classList.remove("hidden");
    }, 1500);

  }
}

window.onload = typeWriter;
