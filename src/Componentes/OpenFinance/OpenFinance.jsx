/* eslint-disable react/prop-types */
import LazyLoad from 'react-lazyload';
import './OpenFinance.css'
import { useEffect } from 'react';

export default function OpenFinance(props){
    // *Web worker
    useEffect(() => {
        const worker = new Worker(new URL('../../animationWorker.js', import.meta.url));
      
        // Enviar un mensaje al Web Worker para iniciar la animación
        worker.postMessage('startAnimation');
      
        // Escuchar mensajes del Web Worker
        worker.addEventListener('message', (event) => {
          if (event.data === 'Animation complete') {
            console.log('Animation completed in OF2050');
            // Puedes realizar acciones adicionales aquí después de que la animación haya finalizado
          }
        });
      
        return () => {
          worker.terminate(); // Terminar el Web Worker cuando el componente se desmonte
        };
      }, []);
    // *Web Worker

    let OpenFinanceImg ='https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FLogo_OF2050%404x%202.svg?alt=media&token=1e8e8921-7245-4ea1-a135-c252c13d1a2c'
    
    return(

<div className="container-finvero Open">
<img src={OpenFinanceImg} alt="" className="finvero"/>

<span  style={{ color: `${props.colortexto}` }} className='spanFinvero'>Estuve involucrado en el <b  className='textoDestacar'>Desarrollo FrontEnd</b> de la plataforma <b >Open Finance</b>, 
    un evento organizado por Finvero, en el cual se presentan distintas personalidades lideres del sector fintech. En este proyecto, desarrollé <b>interfaces</b> de manera responsiva y colaborando con diseñadoras UX/UI.
    </span>

<div className="contenedor2largo">
    <video autoPlay loop muted className='Desk' >
    <source  src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FPresencia%20en%20medios%20-%20Google%20Chrome%202024-02-13%2023-25-48.mp4?alt=media&token=732f4971-7771-46db-a1cd-51e7b6f8cb0d"  />
    </video>
    <video autoPlay loop className='Mobile'>
    <source  src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FWhatsApp%20Video%202024-02-26%20at%204.41.13%20PM.mp4?alt=media&token=00a46cbe-d9a8-46bc-ac23-f0b510d01fe5"  />
    </video>
    <video autoPlay loop muted className='Desk'>
    <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FGaleria%20OpenFinance%202020%20-%20Google%20Chrome%202024-02-13%2023-26-48.mp4?alt=media&token=895bcc3d-af3c-4cbd-ad80-2d6163011e7a" />
    </video>
    <video autoPlay loop muted className='Mobile'>
    <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FWhatsApp%20Video%202024-02-26%20at%204.39.56%20PM.mp4?alt=media&token=77eb05fd-853a-4f05-8f69-ec066dcb5fdd" />
    </video>
</div>
<div className="Contenedor4fotos">
    <LazyLoad height={900} className="cont1">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FWhatsApp%20Image%202024-02-13%20at%206.57.31%20PM%20(1).jpeg?alt=media&token=743372a2-8234-4aa8-a798-afe2d9ed1155" loading='lazy' />
    </LazyLoad>
    <div className="cont2"><a href="https://www.openfinance2050.com/" target='blank'className='botonOpen'> Visitar OpenFinance2050 </a></div>
    <LazyLoad height={900} className="cont3">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FGroup%20254.png?alt=media&token=8d1f2fc4-a5c3-44ce-9993-3bdaa84f404d" loading='lazy' />
    </LazyLoad>
    <LazyLoad height={900} className="cont4">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FWhatsApp%20Image%202024-02-13%20at%206.57.28%20PM.jpeg?alt=media&token=af420edd-c5bb-46aa-96e3-a514f46a5b13" loading='lazy'/>
    </LazyLoad>
</div>

<div className="contenedor2largo">
    <video autoPlay loop muted className='Desk'>
    <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FEcosistema.mp4?alt=media&token=8936b453-e6fd-46b3-ab11-268e081bcea1"  />
    </video>
    <video autoPlay loop muted className='Mobile' style={{margin: '0 auto', width: '100%', maxWidth:'110%'}}>
    <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FWhatsApp%20Video%202024-04-07%20at%2012.08.11%20AM.mp4?alt=media&token=89c0feec-f8b0-4bc1-afd0-1c96c281d677" />
    </video>
    <video autoPlay loop muted className='Desk'>
    <source src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2FMenu.mp4?alt=media&token=cddfdb56-3fb0-4a2f-b406-572c880a444b" />
    </video>
</div>
<LazyLoad height={900} src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/OpenFinance%2Fultima.png?alt=media&token=b6635d6f-f0ff-4c03-8494-d3e11472b4ea" className='imgfinal' loading='lazy'/>

</div>

)}