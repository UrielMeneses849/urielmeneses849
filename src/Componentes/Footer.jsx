/* eslint-disable react/prop-types */
import "../Estilos/Footer/Footer.css"

import Formulario from "./fomulario/Formulario"
export default function Footer(props){
    const bordeCard = props.darkMode ? `3px solid #f9f9f9` : `3px solid #121212`
    const gmail = props.darkMode ? './images/iconos/gmailblanco.svg' : './images/iconos/gmail.svg'
    const git = props.darkMode ? './images/iconos/Githubblanco.svg' : './images/iconos/Github.svg'


    return(
        <div className="footer" id="contacto">
        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }} >Contacto</h2>
        <h3 className="subtitulo">Sigueme y trabajemos juntos :)</h3>
        <div className="container_footer_formulario">
            <div className="contacto" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

           <a href="https://www.linkedin.com/in/urielmen/" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}
           data-aos="fade" 
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="800"
           data-aos-easing="ease-in"><img src="./images/iconos/linkdinNegro.svg" alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}` }}> <img src="./images/iconos/arrow.svg" alt="arrow" className="arrow" /> <b>UrielMen</b> </span>
            </div></a> 

            <a href="mailto:urielmeneses849@gmail.com" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}
            data-aos="fade" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in"><img src={gmail} alt="linkdn" className="linkdn"/>
            <span className="texto_abajo" style={{ color: `${props.colortexto}`, fontSize: "15px" }}> <img src="./images/iconos/arrow.svg" alt="arrow" className="arrow" /> <b id="gmail_correo">urielmeneses849@gmail.com</b> </span>
            </div></a>

            <a href="https://github.com/UrielMeneses849" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}
            data-aos="fade" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in"><img src={git} alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}`, fontSize: "15px" }}> <img src="./images/iconos/arrow.svg" alt="arrow" className="arrow" /> <b>urielmeneses849.github.io</b> </span>
            </div></a>

            <a href="https://www.behance.net/urielmeneses" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}
            data-aos="fade" 
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="800"
            data-aos-easing="ease-in"><img src="./images/iconos/behance.svg" alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}` }}> <img src="./images/iconos/arrow.svg" alt="arrow" className="arrow" /> <b>urielmeneses</b> </span>
            </div></a>

            </div>
            <div className="formulario">
            <Formulario 
            darkMode = {props.darkMode}
            colortexto = {props.colortexto}
            textEnter = {props.textEnter}
      textLeave = {props.textLeave}/>
                
            </div>
        </div>
        </div>
    )
}