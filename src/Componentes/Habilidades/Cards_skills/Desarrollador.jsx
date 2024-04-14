/* eslint-disable react/prop-types */
import  { useEffect } from 'react';

export default function Desarrollador(props){

    
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
        <div className="services__modal-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}`}}>
        
        <i className="uil uil-times services__modal-close" onClick={props.handleClose2}></i>
                    <h3 className="services__modal-title">Desarrollador Frontend</h3>
                    <p className="services__modal-description">2 años de experiencia con trabajos de calidad</p>
                    <ul className="services__modal-services grid">

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Desarrollo en React <i className="uil uil-react"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Optimización del performance <i className="uil uil-mobile-android"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Creacion de elementos de interaccion <i className="uil uil-user-exclamation"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Frameworks CSS (Material UI & Tailwind CSS)</p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Colaboración con diseñadores UX/UI <i className="uil uil-browser"></i></p>
                        </li>

                        <li className="services__modal-service" style={{ color: `${props.colortexto}` }}>
                            <i className="uil uil-check-circle services__modal-icon"></i>
                            <p className="services__modal-info">Micro-Animaciones con Framer Motion <i className="uil uil-brain"></i></p>
                        </li>

                    </ul>
        </div>
    )
}