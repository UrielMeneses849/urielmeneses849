/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import { useNavigate } from 'react-router-dom';
import Siguiente from "../NextProject";

import data from "../../JSON/servicios.json"
import trabajos from "../../JSON/trabajos.json"

import './Finvero.css'

import { Link } from 'react-router-dom';
import { useDarkMode } from '../../Hooks/useDarkMode';

export default function Finvero(){

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

    const fondoCard = darkMode ? `#494949` : `#F5FFFF`
    const colortexto = darkMode ? `#e0e0e0` : `#0b0b0c`
    let color = darkMode ? `#FFB828` : `#092D5D`
    let finvero = darkMode ? `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FFV%202.svg?alt=media&token=6d032902-cf95-4ba2-9350-dec7b4ca4ffa` : `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FFV.svg?alt=media&token=b8a704cc-d456-4847-8ac5-40b6912f082d`
    const process = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FProcess%20DarkMode.svg?alt=media&token=573a50e4-1f1a-4352-97e2-ffa04b3655f1" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FProcess%20Light.svg?alt=media&token=9e3e5197-2285-4ffc-b25a-66a4c07bad17"
    const processMovil = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FProcess%20Movil.svg?alt=media&token=89f28a7f-eed2-402a-9244-cfc692d5c055" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FProcess%20Movil%20Light.svg?alt=media&token=44a4cfd1-ab2a-4758-bf62-69308fc49434"
    return (
        <div className="container-finvero">
            <LazyLoad offset={600} once style={{ display: "flex", gap: "24px", alignItems: "center" }}>
                <Link to="/">
                    <i className="uil uil-arrow-circle-left ArrowBack" onClick={handleBackClick} style={{ textDecoration: "none", color: `${color}`}}></i>
                </Link>
                <img src={finvero} alt="" className="finvero" />
            </LazyLoad>
            <span style={{ color: `${colortexto}` }} className='spanFinvero'>
                En mi rol de <b style={{ color: `${color}` }} className='textoDestacar'>Diseñador UX/UI</b> realice diseños, investigaciones, analisis, pruebas de usabilidad y KPI´s, participando en los flujos de originación de crédito, dashboards y distintas interfaces para los <b style={{ color: `${color}` }}>servicios y aplicaciones</b> de Finvero en el sector <b style={{ color: `${color}` }}>Fintech. </b>
            </span>
            <div className="grid credito">
                <div className="card colaboracion">
                    <span>He <b>participado</b> y dado opinión en los servicios de Finvero como diseñador de producto.</span>
                    {data.map(item => (
                        <div className="icono-Text" key={item.id}>
                            <LazyLoad offset={500}>
                                <img src={item.logo} alt="" />
                            </LazyLoad>
                            <div className="tituloySpan">
                                <h3>{item.servicio}</h3>
                                <span>{item.descripcion}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="card cashi">
                    <LazyLoad offset={500}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Fcashi-pleca%201.png?alt=media&token=8fa9e6ec-78bd-437d-91d6-2e75907ea91d" alt="" className='logoCard' />
                    </LazyLoad>
                    <LazyLoad offset={500}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Fwalmart.svg?alt=media&token=828ebafa-0631-4aa7-82a7-fed6a0ba5da8" alt="" className='logoCard' />
                    </LazyLoad>
                    <span>Finvero se encarga de llevar la gestión y analisis de las solicitudes de crédito manteniendo y actualizando su flujo de originación de crédito para grupo Walmart.</span>
                </div>
                <div className="card colab" style={{ backgroundColor: `${fondoCard}` }}>
                    <LazyLoad offset={500}>
                        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Fempresas.svg?alt=media&token=561a59b1-422b-45c5-ac07-0026772195ad" alt="" className='logoCard' />
                    </LazyLoad>
                    <div style={{ color: `${colortexto}` }}>
                        <h3 className='h3-finvero'>Colaboración con diferentes empresas</h3>
                        <span>Tuve participación en diferentes proyectos que involucraban distintas empresas</span>
                    </div>
                </div>
                <div className="DescripcionTrabajoFinvero">
                    <h3 style={{color: `${colortexto}`}}>¿Mi trabajo?</h3>
                    <div className="tagTrabajo">
                        <div className="tagT">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Ficono1.svg?alt=media&token=9040f5c3-974b-47fd-b9f3-e9fed763b282" alt="" />
                            <h5>Investigación <br /><b>e innovación.</b></h5>
                        </div>
                        <div className="tagT">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Ficono2.svg?alt=media&token=d39275c9-b969-44ea-976e-cd4003a36512" alt="" />
                            <h5>Analisis y <br /><b>mejora del diseño.</b></h5>
                        </div>
                        <div className="tagT">
                            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Ficono3.svg?alt=media&token=246a9e4a-39fa-451e-b35b-cd06167923b7" alt="" />
                            <h5>Enfoque en el <br /><b>usuario.</b></h5>
                        </div>
                    </div>
                </div>
            </div>

            <LazyLoad offset={500}>
            <img src={process} alt="" className='process'/>
            </LazyLoad>

            <LazyLoad offset={500}>
            <img src={processMovil} alt="" className='processMovil'/>
            </LazyLoad>

            <h3 className='Originacion' style={{ color: `${colortexto}` }}>Un poco de mi trabajo en UI</h3>
            <div className="trabajos flex">

                {trabajos.map(item => (
                    <div className="cardTrabajo column" key={item.id}>
                        <h3 style={{color: `${colortexto}`}}>{item.descripcion}</h3>
                        <LazyLoad offset={500} height={500} style={{ display: "flex", justifyContent: "center" }}>
                            <img src={item.imagen} alt="" className= {item.captura ? "captura" : "imagenUI"} />
                        </LazyLoad>
                    </div> ))}

            </div>

            <h2 className="Titulo_trabajo masT" style={{textAlign:"center", margin: "12px auto", padding: 0,  lineHeight: "1.15", color: `${colortexto}`}}>¡Tengo mucho más trabajo para mostrar!</h2>
            <span className="textos" style={{textAlign:"center", margin: "0 auto", color: `${colortexto}`}}>Ponte en contacto conmigo y conoce más de mi pasion por crear productos digitales y del increible mundo de las fintech</span>
            
            <Siguiente id={2}/>
        </div>
    );
}
