/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import  { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDarkMode } from "../Hooks/useDarkMode";

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

const letterAni = {
  initial: { y: 400 },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

export default function Banner() {
  const {darkMode} = useDarkMode();
  
  // * Web worker
  useEffect(() => {
  const worker = new Worker(new URL('../animationWorker.js', import.meta.url));

  // Enviar un mensaje al Web Worker para iniciar la animación
  worker.postMessage('startAnimation');

  // Escuchar mensajes del Web Worker
  worker.addEventListener('message', (event) => {
    if (event.data === 'Animation complete') {
      console.log('Animation completed in Banner');
      // Puedes realizar acciones adicionales aquí después de que la animación haya finalizado
    }
  });

  return () => {
    worker.terminate(); // Terminar el Web Worker cuando el componente se desmonte
  };
}, []);
// * Web worker

  const color = darkMode ? "#fafafa" : "#15171C";
  const [playMarquee, setPlayMarquee] = useState(false);

  const FlechaScroll = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFlecha%20Negra.svg?alt=media&token=3bfae33d-f8ce-432f-88fa-1d4cdecae8c8" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFlechaBlanca.svg?alt=media&token=d1da3034-64db-4edf-a518-a2e591f997e0";
  
  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  
  return (
    // eslint-disable-next-line react/prop-types
    <>
    <div className="HomeDesktop" >
    
    <AnimatePresence>
    <motion.div className='banner' variants={banner}
    initial="hidden" // Establece la variante inicial
    animate="visible" // Establece la variante para la animación visible
    exit="exit">
      <BannerRowTop title={"Web Developer"} color={color}/>
      <BannerRowCenter title={"Hola, Soy Uriel"} playMarquee={playMarquee} color={color}/>
      <BannerRowBottom title={"Diseñador UX/UI"} color={color} FlechaScroll={FlechaScroll} />
    </motion.div>
    </AnimatePresence>
    </div>

    <div className="HomeMobile" >
    <AnimatePresence>
    <motion.div className='banner' variants={banner} 
    initial="hidden" // Establece la variante inicial
    animate="visible" // Establece la variante para la animación visible
    exit="exit">
    <BannerRowTop title={"Web "} color={color}/>
    <BannerRowTop title={"Developer"} color={color}/>
      <BannerRowCenter title={"Hola, soy Uriel"} playMarquee={playMarquee} color={color}/>
      <BannerRowBottom title={"Diseñador"} color={color} FlechaScroll={FlechaScroll}/>
      <BannerRowBottom title={"UX/UI"} color={color} FlechaScroll={FlechaScroll}/>
      </motion.div>
    </AnimatePresence>
    </div>
    </>
  );

}

const AnimatedLetters = ({ title, disabled }) => (
  <motion.span
    className='row-title'
    variants={disabled ? null : banner}
    initial='initial'
    animate='animate' >
    {[...title].map((letter, index) => (
      <motion.span
        key={index} // Agrega una key única utilizando el índice de la iteración
        className='row-letter'
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);


const BannerRowTop = ({ title, color }) => {
  return (
    <div className={"banner-row"} style={{color: `${color}`}}>
      <div className="row-col top" translate="no">
        <AnimatedLetters title={title} />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
        <span className='row-message' style={{color: `${color}`}} >
          Ingeníero en <b>computación</b> del Instituto Politécnico Nacional.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title, color, FlechaScroll}) => {

  return (
    <div className={"banner-row"} style={{color: `${color}`}}>
      
      <div className="row-col bottom" translate="no">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 1,
          delay: 0.4,
        }}
        className='row-col'>
      <a href="#trabajo" style={{width:"100%"}}>
      <img src={FlechaScroll} alt="Flecha para scroll" className='row-img' style={{color: `${color}`}} />
      </a>
  
      </motion.div>
        <AnimatedLetters title={title} />
      </div>
      
    </div>
    
  );
};


const BannerRowCenter = ({ title, playMarquee, color }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`} style={{color: `${color}`}} translate="no"> 
      <motion.div
        initial={{ y: 310 }}
        animate={{ y: 0 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1}}
        className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled/>
        <AnimatedLetters title={title} disabled />
      </motion.div>
    </div>
  );
};

// Path: src/Componentes/Menu.jsx   
