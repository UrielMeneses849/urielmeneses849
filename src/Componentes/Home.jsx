import "../Estilos/Home/HomePage.css"
import "../Estilos/Home/Toggle.css"



export default function Home(props){
    // Fondo del Home
    const fondo = props.darkMode ? `url("./images/fondoBlanco.svg")`: `url("./images/fondo.svg")`

    // Icono de la esquina
    let icon = props.darkMode ? "./images/logoBlanco.svg" : "./images/logo.svg"

    // Color de fondo de todo el body
    document.body.style = props.darkMode ? `background-Color: #0b0b0c` : `background-Color: #fafafa`
    
    // Logo de luna
    let luna = props.darkMode ? "./images/lunaDark.svg" : "./images/lunaLight.svg"

    // Logo del sol
    let sol = props.darkMode ? "./images/solDark.svg" : "./images/solLight.svg"

    // Cursor personalizado
    

    return(
        // Nav que cambia el color del toggle
        <div className="Home" style={
                {backgroundImage: `${fondo}`}}>
            <nav 
            // Ponemos un ternario para cambiar la clase, se pone un color por default con el nav sin clase y una con el nav con clase
            className={props.darkMode ? "dark": ""}
        >

            <img 
            src= {icon}
            alt="logo"
            className="logo"
            data-aos="fade-down" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in"/>
        {/* Toggle */}
            <div 
                className="toggler" 
                data-aos="fade-down" 
                data-aos-offset="100"
                data-aos-delay="30"
                data-aos-duration="900"
                data-aos-easing="ease-in">
                <p className="toggler--light"><img src={sol}
                alt=""
                className="toggle"/></p> 
                <div 
                    className="toggler--slider"
                    // Llamado de la funcion
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark"><img src={luna}
                alt=""
                className="toggle"/></p>
            </div>
        </nav>
        {/* Toggle */}

        <div className="Textos-Home">
        <h1 style={{ color: `${props.colortexto}` }} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in">Hola, soy Uriel <br/> Web Developer</h1>
        <ul style={{ color: `${props.colortexto}` }} className="lista-home" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade-up" 
        data-aos-offset="100"
        data-aos-delay="30"
        data-aos-duration="900"
        data-aos-easing="ease-in">
            <li> Diseñador de experiencia de usuario</li>
            <li>Desarrollador Front End</li>
            <li>Ingeniero en computación</li>
        </ul>
        </div>
        </div>
    )
}