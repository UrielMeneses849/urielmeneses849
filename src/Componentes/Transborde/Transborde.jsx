import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { Link, useNavigate } from 'react-router-dom';
import Siguiente from "../NextProject";
import { useDarkMode } from '../../Hooks/useDarkMode';
import './Transborde.css'
import proceso from './Proceso.json'
export default function Transborde(){

const {darkMode} = useDarkMode();
// Scroll to the top of the page on mount
useEffect(() => {
window.scrollTo(0, 0);
}, []);

// Web Worker
useEffect(() => {
const worker = new Worker(new URL('../../animationWorker.js', import.meta.url));

// Enviar un mensaje al Web Worker para iniciar la animación
worker.postMessage('startAnimation');

// Escuchar mensajes del Web Worker
worker.addEventListener('message', (event) => {
if (event.data === 'Animation complete') {
console.log('Animation completed in Finvero');
// Puedes realizar acciones adicionales aquí después de que la animación haya finalizado
}
});

return () => {
worker.terminate(); // Terminar el Web Worker cuando el componente se desmonte
};
}, []);
// Web Worker

const navigate = useNavigate();
const handleBackClick = () => {
navigate(-1); // Navega una página atrás en el historial
};

const colortexto = darkMode ? `#e0e0e0` : `#0b0b0c`
const fondoCard = darkMode ? `#494949` : `#F5FFFF`
const numero = darkMode ? `#8c8c8c` : `#999999` 
const analisisDesk = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup-65-_1_.webp?alt=media&token=428b3eb2-d5be-4ce4-8b1a-51671fe39a4e" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup-65%20(1).webp?alt=media&token=585fd631-352b-4123-8d17-0e482194ec59" 
const analisisMovil = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame-366.webp?alt=media&token=0f16b013-381e-4ae5-a9f6-08a24199cb99" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame-365.webp?alt=media&token=0728a418-9947-4299-8b6c-ce004b0d98c4"
const auditoria = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FAuditoria-Dark.webp?alt=media&token=df0d96ce-4576-478a-b8e7-fc57a27fb246" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FAuditoria-light.webp?alt=media&token=c54c71a4-44d5-40b8-b37f-a0c2ba329d2c"
const persona1 = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame-350.webp?alt=media&token=e5d8deb8-ed71-44ed-a353-5f0b33ce1ba4" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame-350-_1_.webp?alt=media&token=b67dc464-f1ed-44ef-8892-559f2d15954d"
const persona2 = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20356%20(1).webp?alt=media&token=3e992352-03e3-40c0-832c-9ec676aab9fe" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20356.webp?alt=media&token=41742369-aeb7-4ec7-897b-ea54309a50e4"
const Diseño = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20368%20(1)%20(1).webp?alt=media&token=064fa875-4416-4581-b198-344d1f25e60e" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20368%20(2).webp?alt=media&token=930cb4c0-c6e2-487d-8237-b56ec072d0ac"
const reestructura = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20370%20(1).webp?alt=media&token=e178a986-245b-4b75-82a2-d7c08d4374d6" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20369%20(1).webp?alt=media&token=9156e16b-3b38-40f2-8712-b26a93681d62"
const anatomia = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup%201000002462%20(1)%20(1).webp?alt=media&token=15a78a94-6140-413e-b582-09aff8f7939f" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup%201000002462%20(1).webp?alt=media&token=3fba519f-820e-4a51-8389-7611f7a2501a"
return(
<div style={{maxWidth: "85%", margin: "0 auto"}}>
{/*  Card del inicio */}
<div className="Presentacion column" style={{ backgroundColor: `${fondoCard}`}}>
    <div className="Presentacion__Titulo flex wrap">
    <Link to="/">
    <i className="uil uil-arrow-circle-left ArrowBack" onClick={handleBackClick} style={{ textDecoration: "none", color: `${colortexto}`}}></i>
    </Link> 
    <h2 className="Presentacion--titulo" style={{color: `${colortexto}`, }}>
        Transborde ruta binacional
    </h2>
    <span style={{color: `${colortexto}`}} className='Descripciones'>En este proyecto, <b>implementé una mejora significativa en la interfaz de usuario</b>, optimicé los componentes clave, refiné la arquitectura de la información y mejoré considerablemente la experiencia de usuario.</span>

    </div>
    <div className="Presentacion__imagenes flex">
        <LazyLoad offset={500} className='Presentacion-imagen'>
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FMockup1%20(1).webp?alt=media&token=d02b9f8a-6c58-4bd4-90b3-1d80994d0379" alt="" />
        </LazyLoad>
        <LazyLoad offset={500} className='Presentacion-imagen'>
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup-1000002465%20(1).webp?alt=media&token=248a2781-6d6e-4b0f-b1ba-67ccddbf1e25" alt="" />
        </LazyLoad>
    </div>
</div>

{/*  Proceso */}
<div className="Proceso">
<h2 className='Presentacion--titulo' style={{color: `${colortexto}`, }}>Proceso</h2>

<div className="Proceso__items flex">
{proceso.map((item) => (
<div className="Proceso__item column" key={item.id}>
    <h2 className="Proceso--numero" style={{color: `${numero}`}}> {item.numero} </h2>
    <h3 className="Proceso--titulo" style={{backgroundColor: `${item.color}`}}>{item.titulo}</h3>
    <span className="Proceso--descripcion" style={{color: `${colortexto}`}} dangerouslySetInnerHTML={{ __html: item.descripcion }}></span>
</div> ))}
</div>

</div>

{/* Analisis */}
<div className="Analisis">
<h2 className="Proceso--numero" style={{color: `${numero}`}}> 01 </h2>
<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Análisis</b> - Página original de Transborde</h3>
<LazyLoad offset={500}> 
<img src={analisisDesk} alt="" className='AnalisisDesk'/>
<img src={analisisMovil} alt="" className='AnalisisMovil'/>
</LazyLoad>
</div>

{/*  Investigación */}
<div className="investigacion">
<h2 className="Proceso--numero" style={{color: `${numero}`}}> 02 </h2>
<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Investigación</b> - Auditoria competitiva</h3>
<LazyLoad offset={500}> 
<img src={auditoria} alt="" />
</LazyLoad>

<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Investigación</b> - Propuestas de valor</h3>
<span style={{color: `${colortexto}`}} className='Descripciones'>Analisamos a los competidores directos e indirectos del sitio para inspirarnos en sus propuestas de valor.</span>
<img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame-357%20(1).webp?alt=media&token=6cfdb53a-eeb9-49e5-b42d-1e7973960634" alt="" />
<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Investigación</b> - User personas</h3>
<LazyLoad offset={500} className='Personas' style={{display: "flex", flexWrap: "wrap"}}> 
<img src={persona1} alt="" />
<img src={persona2} alt="" className='persona2'/>
</LazyLoad>
</div>

{/*  Diseño */}
<div className="Diseño">
<h2 className="Proceso--numero" style={{color: `${numero}`}}> 03 </h2>
<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Diseño</b> - Tipografia y colores</h3>
<LazyLoad offset={500}> 
<img src={Diseño} alt="" />
</LazyLoad>

<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Diseño</b> - Componentes </h3>
<span style={{color: `${colortexto}`}} className='Descripciones'>Transformamos una tabla desestructurada en una <b>tarjeta (card) utilizando espacios negativos, tipografías, 
    colores y otros elementos de UI.</b> Esto facilita la interpretación de la información esencial para comprar un viaje, <b>mejorando así la experiencia del usuario.</b></span>
<LazyLoad offset={500}> 
<img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FGroup%201000002463.webp?alt=media&token=2b0a1561-8a40-4ee1-b8b1-aa54952e0606" alt="" />
</LazyLoad>

<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Diseño</b> - Anatomía Card de viaje </h3>
<LazyLoad offset={500}> 
<img src={anatomia} alt="" />
</LazyLoad>

<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Diseño</b> - Reestructurar información </h3>
<LazyLoad offset={500}> 
<img src={reestructura} alt="" />
</LazyLoad>
</div>

{/*  Resultados */}
<div className="Resultados">
<h2 className="Proceso--numero" style={{color: `${numero}`}}> 04 </h2>
<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Presentacion</b> - Mockups y artes</h3>
<LazyLoad offset={500}> 
<img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20371%20(1).webp?alt=media&token=71999867-bdb8-4ee4-b9af-98727b4f3db2" alt="" />
</LazyLoad>

<h3 className='Presentacion--titulo' style={{fontWeight: "300", color: `${colortexto}`,}}><b>Presentacion</b> - Resultados</h3>
<span style={{color: `${colortexto}`}} className='Descripciones'>  En este proyecto enfrenté varios <b>retos interesantes</b> para mejorar la interfaz y la experiencia de usuario.
     Apliqué diferentes métodos de investigación y técnicas de ideación, siempre pensando en los usuarios objetivo. Para convertir el sitio en una mejor versión, creé componentes 
     y <b>realicé múltiples iteraciones hasta lograr una apariencia óptima</b>.</span>
<LazyLoad offset={500}> 
<img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Transborde%2FFrame%20321.webp?alt=media&token=bf534c10-3d6c-41d2-ad47-d1bced86a8bb" alt="" />
</LazyLoad>

</div>
<Siguiente id={4} colortexto={colortexto}/>
</div>
)}