import "../Estilos/Acerca/Acerca.css"

export default function About(props){

    return(
        <div className="container-about" id="acerca">
        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}`}} data-aos="fade-down" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in">Acerca de mi</h2>

        <h3 className="subtitulo" data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">Diseñador UX y Front-End Developer</h3>

        <div className="container-foto-texto" data-aos="fade-up" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <img className="imagen-about"
            alt="imagen"
            src="./images/Persona.jpg"/>
            <div className="textos-about" style={{ color: `${props.colortexto}`}}> Soy un <b>desarrollador Front-end </b>con una sólida formación en 
            diseño de experiencia de usuario por parte de Google y una amplia experiencia en la creación de interfaces atractivas y funcionales.
             Con un enfoque centrado en el usuario y un ojo atento a los detalles, me esfuerzo por proporcionar experiencias digitales 
             excepcionales que combinen una interfaz intuitiva con un diseño visualmente atractivo.
             <a href="./images/CV.pdf" className="CV" target="blank" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}> Descargar CV <i className="uil uil-file-download-alt"></i> </a>
             </div>
        </div>
        </div>
    )
}