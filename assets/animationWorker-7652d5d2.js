!function(){"use strict";self.addEventListener("message",(e=>{"startAnimation"===e.data&&(postMessage("Animation complete"),console.log("Animation completed in Web Worker"))}))}();
