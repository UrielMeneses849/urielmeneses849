/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Maquetas.css"

import  { useEffect } from 'react';
export default function MaquetasUI(props) {

    useEffect(() => {
        const handleKeyPress = (event) => {
          if (event.key === 'Escape') {
            props.toggleTab(0);
          }
        };
    
        document.addEventListener('keydown', handleKeyPress);
    
        return () => {
          document.removeEventListener('keydown', handleKeyPress);
        };
      }, [props]);
      
    return(
         <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
          <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)} style={{backgroundColor: `${props.fondoCard}`}}></i>
          <h3 className="services__modal-title" >Maquetas hechas en Figma, React y Material UI</h3>
          <p className="services__modal-description">Visita mis sitios con un click</p>
      
        <h3 className="services__modal-title2">MebloStyle</h3>
        <a href="https://urielmeneses849.github.io/MebloStyle/" target="blank" ><div className="M1" onMouseEnter={props.textEnterVisitar} onMouseLeave={props.textLeave}>
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM1.svg?alt=media&token=5ff18081-ba86-49e6-af9a-abc4bae3ed38" loading="lazy" />
        </div> </a>

        <h3 className="services__modal-title2">Honda Civic</h3>
        <div className="M1 M2" >
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM2.svg?alt=media&token=55056db8-87a8-479b-a129-02415297ba37" loading="lazy"/>
        </div>

        <h3 className="services__modal-title2">Optima Consulting</h3>
        <div className="M1 M3">
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM3.svg?alt=media&token=fcce7c37-d62c-4696-a4e7-e7acf60f12d5" loading="lazy" />
        </div>

        <h3 className="services__modal-title2">Preparación IPN</h3>
        <div className="M1 M4" >
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM4.svg?alt=media&token=b07eed0f-9106-44e5-a532-1047079bc8a6" loading="lazy" />
        </div>

        <h3 className="services__modal-title2">ExploraViajes</h3>
        <div className="M1 M5">
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM5.svg?alt=media&token=629c9908-d368-4d8c-8937-d84f341f9757" loading="lazy"/>
        </div>

        <h3 className="services__modal-title2">Fruta y Fruto</h3>
        <div className="M1 M7">
          <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Maquetas%2FM7.svg?alt=media&token=6568ae0c-0207-4cea-baa8-9143c28e3e9d" loading="lazy" />
        </div>

        </div>
    )
}