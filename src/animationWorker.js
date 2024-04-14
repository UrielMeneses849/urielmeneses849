// animationWorker.js

// Función que se ejecutará en el Web Worker
function animateInWorker() {
    // Simular una animación o proceso intensivo
    let counter = 0;
    const maxCounter = 1000000000; // Número arbitrario para simular una tarea intensiva
    
    while (counter < maxCounter) {
      counter++;
    }
  
    // Devolver un mensaje al hilo principal
    postMessage("Animation complete");

    console.log("Animation completed in Web Worker");
  }
  
  // Escuchar mensajes del hilo principal
  self.addEventListener("message", (event) => {
    if (event.data === "startAnimation") {
      animateInWorker(); // Llamar a la función de animación
    }
  });
  