/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import  { useState, useEffect } from "react";
import { motion } from "framer-motion";

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

export default function Banner(props) {
    const color = props.darkMode ? "#fafafa" : "#15171C";

  const [playMarquee, setPlayMarquee] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setPlayMarquee(true);
    }, 2000);
  }, []);
  return (
    // eslint-disable-next-line react/prop-types
    <>
    <div className="HomeDesktop" >
    <motion.div className='banner' variants={banner} >
      <BannerRowTop title={"Hola, Soy Uriel"} color={color}/>
      
      <BannerRowCenter title={"Web Developer"} playMarquee={playMarquee} color={color}/>
      <BannerRowBottom title={"Diseñador·UX/UI"} color={color}/>
    </motion.div>
    </div>
    <div className="HomeMobile" >
    <motion.div className='banner' variants={banner} >
    <BannerRowTop title={"Hola, "}  color={color}/>
    <BannerRowTop title={"Soy Uriel"} color={color}/>
      <BannerRowCenter title={"Web Developer"} playMarquee={playMarquee} color={color}/>
      <BannerRowBottom title={"Diseñador"} color={color}/>
      <BannerRowBottom title={"UX/UI"} color={color}/>
      </motion.div>
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
    {[...title].map((letter) => (
      <motion.span
        className='row-letter '
        variants={disabled ? null : letterAni}>
        {letter}
      </motion.span>
    ))}
  </motion.span>
);

const BannerRowTop = ({ title, color }) => {
  return (
    <div className={"banner-row"} style={{color: `${color}`}}>
      <div className={"row-col texto"}>
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
        <span className='row-message'  >
          Ingeníero en computación del Insituto Politécnico Nacional.
        </span>
      </motion.div>
    </div>
  );
};

const BannerRowBottom = ({ title, color }) => {
  return (
    <div className={"banner-row center"} style={{color: `${color}`}}>
      
      <AnimatedLetters title={title} />
    </div>
  );
};


const BannerRowCenter = ({ title, playMarquee, color }) => {
  return (
    <div className={`banner-row marquee  ${playMarquee && "animate"}`} style={{color: `${color}`}}> 
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
