/* eslint-disable react/prop-types */
import "../Estilos/Footer/Footer.css"

export default function Footer(props){
    const bordeCard = props.darkMode ? `3px solid #f9f9f9` : `3px solid #121212`

    const gmail = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2Fgmailblanco.svg?alt=media&token=600226f4-f2a4-42b1-94c7-cc0c758b0b4a" : 
    "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2Fgmail.svg?alt=media&token=ee9fff60-1c47-4a1d-b359-3861c51d528f"

    const git = props.darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2FGithubblanco.svg?alt=media&token=49036cd2-8744-4e2e-9ef4-d7f83e369894" :
     "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2FGithub.svg?alt=media&token=e3e6a581-48df-467c-b0fd-710283a924e9"

    const Linkdin = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2FlinkdinNegro.svg?alt=media&token=33c38206-5317-4638-b6a7-c9434d6b22d5"

    const Behance = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2Fbehance.svg?alt=media&token=828fec83-89c7-48e8-9bef-63edde247f64"

    const arrow = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Footer%2Farrow.svg?alt=media&token=e3d6a545-f427-475d-b73b-d61f4cd54097"

    return(
        <footer height={900} className="footer" id="contact">
        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }} >Contacto</h2>
        <h3 className="subtitulo">Sigueme y trabajemos juntos :)</h3>
        <div className="container_footer_formulario">
        <div className="contacto" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

           <a href="https://www.linkedin.com/in/esaul-uriel-meneses-torres-83475a2a0/" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}>
            <img src={Linkdin} alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}` }}> <img src={arrow} alt="arrow" className="arrow" /> <b>UrielMen</b> </span>
            </div></a> 

            <a href="mailto:urielmeneses849@gmail.com" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}>
            <img src={gmail} alt="linkdn" className="linkdn"/>
            <span className="texto_abajo" style={{ color: `${props.colortexto}` }}> <img src={arrow} alt="arrow" className="arrow" /> <b id="gmail_correo">urielmeneses849@gmail.com</b> </span>
            </div></a>

            <a href="https://github.com/UrielMeneses849" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}>
            <img src={git} alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}`  }}> <img src={arrow} alt="arrow" className="arrow" /> <b>urielmeneses849.github.io</b> </span>
            </div></a>

            <a href="https://www.behance.net/urielmeneses" className="enlace" target="blank"><div className="contacto1" style={{border: `${bordeCard}`}}>
            <img src={Behance} alt="linkdn" className="linkdn" />
            <span className="texto_abajo" style={{ color: `${props.colortexto}` }}> <img src={arrow} alt="arrow" className="arrow" /> <b>urielmeneses</b> </span>
            </div></a>

            
            </div>
            
        </div>
        <h3 className="subtitulo" style={{fontSize: "13px"}}>@urielmeneses849 / 2022</h3>
        </footer>
    )
}