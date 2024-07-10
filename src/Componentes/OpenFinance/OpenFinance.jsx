/* eslint-disable react/prop-types */
import LazyLoad from 'react-lazyload';
import '../../Estilos/Trabajo/Titulos-textos.css'
import './OpenFinance.css'
import { useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import data from "../../JSON/OpenTrabajos.json"
import { useDarkMode } from '../../Hooks/useDarkMode';

export default function OpenFinance(){
    // Scroll to the top of the page on mount
    useEffect(() => { window.scrollTo(0, 0); }, []);

    const handleBackClick = () => {
      Navigate(-1); // Navega una página atrás en el historial
  };

    const {darkMode} = useDarkMode();
    const colortexto = darkMode ? `#e0e0e0` : `#0b0b0c`
    let OpenFinanceImg ='https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FLogo_OF2050%404x%202.svg?alt=media&token=1e8e8921-7245-4ea1-a135-c252c13d1a2c'
    
    return(

<div className="container-finvero Open">


<LazyLoad height={200} once style={{ display: "flex", gap: "24px", alignItems: "center" }}>
<Link to="/">
<i className="uil uil-arrow-circle-left ArrowBack" onClick={handleBackClick} style={{ textDecoration: "none", color: `${colortexto}` }}></i>
</Link>
<img src={OpenFinanceImg} alt="" className="finvero"/>
</LazyLoad>

<span  style={{ color: `${colortexto}` }} className='spanFinvero'>Estuve involucrado en el <b  className='textoDestacar'>Desarrollo FrontEnd</b> del evento Open Finance en el que se presentan
 distintas personalidades lideres del sector fintech, hay paneles y masterclass de temas de tecnología y finansas. En este proyecto, desarrollé interfaces de manera responsiva colaborando con un equipo
  de diseñadoras graficas, una diseñadora UX/UI y otro desarrollador.
    </span>

<div className="contenedor2largo">

    {data.slice(0, 2).map(item => (  
    <div className="VideoOpen" key={item.index}>
    <h3 style={{ color: `${colortexto}` }}>{item.title}</h3>
    <LazyLoad height={900} className='Desk'>
    <video autoPlay loop muted >
    <source src={item.video} type="video/webm" />
    </video>
    </LazyLoad>
    <span style={{ color: `${colortexto}` }}>{item.description}</span>
    </div> 
    ))}

{data.slice(0, 2).map(item => (  
    <div className="VideoOpenMobile" key={item.index}>
    <h3 style={{ color: `${colortexto}` }}>{item.title}</h3>
    <LazyLoad height={900}>
    <video autoPlay loop muted >
    <source src={item.videoMobile } type="video/webm" />
    </video>
    </LazyLoad>
    <span style={{ color: `${colortexto}` }}>{item.description}</span>
    </div> 
    ))}

</div>
    <div className="flex wrap EventoInf"> 
    <h2 style={{ color: `${colortexto}` }}>He participado en 2 eventos.</h2>
    <span style={{ color: `${colortexto}` }}>Fui parte del staff, estuve presente en el diseño de las presentaciones de los servicios que se mostrarón en el evento, elabore reconocimientos para los speakers presentes en el evento y más actividades fisicas y digitales en pro del evento</span>
    <LazyLoad height={900} className='imgfinal'>
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2Fstaff-1.webp?alt=media&token=38ef8f12-c377-46bd-ac0c-17213dfc4471" className='imgfinal' />
    </LazyLoad>

    <LazyLoad height={900} className='imgfinal'>
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FStaff%202.webp?alt=media&token=0d773301-b7ed-4d1b-b512-a22e8c521818" className='imgfinal' />
    </LazyLoad>

    <LazyLoad height={900} className='imgfinal'>
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FYo.webp?alt=media&token=8bc9363d-c1d7-426d-af6c-f24d504575d5" className='imgfinal' />
    </LazyLoad>
    <div className="DescripcionBaterista">
      <h2 style={{ color: `${colortexto}` }}>¡Conoci al baterista de <b className="pink">pink</b>!</h2> <br />
      <span style={{ color: `${colortexto}` }}>Mark Schulman fue speaker motivacional al cierre del evento hablando de la importancia de la actitud de rockstar y ser apasionado en lo que haces te asegura el exito, <b>creo fielmente en esas palabras y que mi pasión por el diseño y desarrollo me llevara lejos.</b></span>
    </div>
    <a href="https://www.openfinance2050.com/" target='blank'>
    <button className='BotonOpenFinance'>
            <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24" >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill="white"
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
            </div>
            <span style={{ color: "#ffffff" }}>Open Finance</span>
            </button></a>
    </div>

<div className="contenedor2largo">
    {data.slice(2).map(item => (  
    <div className="VideoOpen" key={item.index}>
    <h3 style={{ color: `${colortexto}` }}>{item.title}</h3>
    <LazyLoad height={900} className='Desk'>
    <video autoPlay loop muted >
    <source src={item.video} type="video/webm"/>
    </video>
    </LazyLoad>
    <span style={{ color: `${colortexto}` }}>{item.description}</span>
    </div> 
    ))}

{data.slice(2).map(item => (  
    <div className="VideoOpenMobile" key={item.index}>
    <h3 style={{ color: `${colortexto}` }}>{item.title}</h3>
    <LazyLoad height={900} className='Desk'>
    <video autoPlay loop muted >
    <source src={item.videoMobile ==="NoVideo" ? item.video : item.videoMobile } type="video/webm" />
    </video>
    </LazyLoad>
    <span style={{ color: `${colortexto}` }}>{item.description}</span>
    </div> 
    ))}

</div>
</div>

)}