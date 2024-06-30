// Palabras que deseas mostrar
const words = [
  "Frontend Developer",
  "",
  "FullStack Developer",
  "",
  "App Mobile Developer",
  "",
  "Python Developer",
  "",
];

// Elemento donde se mostrará el texto animado
const animatedTextElement = document.getElementById("animated-text");

let wordIndex = 0; // Índice de la palabra actual
let charIndex = 0; // Índice del carácter actual

function typeWriter() {
  if (charIndex < words[wordIndex].length) {
    animatedTextElement.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100); // Velocidad de escritura (ajústala según tu preferencia)
  } else {
    // Cambia a la siguiente palabra
    wordIndex = (wordIndex + 1) % words.length;
    charIndex = 0;
    animatedTextElement.textContent = ""; // Borra el texto actual
    setTimeout(typeWriter, 800); // Pausa antes de mostrar la siguiente palabra
  }
}

// Inicia la animación
typeWriter();
