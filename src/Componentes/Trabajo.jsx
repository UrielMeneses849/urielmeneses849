/* eslint-disable react/prop-types */
import "../Estilos/Trabajo/Titulos-textos.css"
import { Link } from "react-router-dom"
import data from "../JSON/data.json"
import { useDarkMode } from "../Hooks/useDarkMode"
import LazyLoad from "react-lazyload";
import { useState } from "react";
// import LazyLoad from 'react-lazyload';

export default function Trabajo(props){

    const {darkMode} = useDarkMode();
    const colorTag = darkMode ? `#949494` : `#454545`
    const colorBoton = darkMode ? `#fafafa` : `#121212`
    const colortextoBoton = darkMode ? `#121212` : `#fafafa`
    const [trabajos, setTrabajos] = useState(false);

    return(
        <div className="Trabajo" id="trabajo">
   
        <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }}>Mi trabajo</h2>
        <div className="Content-Trabajo">

        <span className="DescripcionTrabajo" style={{ color: `${props.colortexto}` }}>Aquí hay una recopilación de <b>mi experiencia profesional</b> que demuestra mi pasión por crear productos y sitios web memorables de alta calidad,<b> un reflejo de mi dedicación.</b> He tenido la oportunidad de participar en diversas iniciativas que han permitido poner en práctica mis <b>habilidades creativas y técnicas. </b>
        <br /> <br />
            Mi trayectoria profesional en el campo del <b>diseño UX/UI y el desarrollo frontend </b>en el <b>sector fintech ha sido una verdadera fuente de aprendizaje y crecimiento</b> en el ámbito financiero y tecnológico.</span>
        
            {data.slice(0,4).map(item => (
           
            <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
            
            <div className={item.reverse ? "loaderTrabajosReverse" : "LoaderTrabajos"}>
            <img src={item.CardArte} alt="Tarjeta" />
            </div>
           
            <div className="textosCardTrabajo">

            <div className="tituloTrabajoCard">
            <LazyLoad offset={500} height={500}>
            { darkMode ? ( item.LogoDark ? <img src={item.LogoDark} alt="logo" className="LogoimgT"/>  : 
             
            ( item.Logo ? <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3> )) : 
            
            (item.Logo ? <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/> : <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>)}
            </LazyLoad>
            <div className="tag" >
                {item.tagName === "Diseño UX/UI" ? <i className="uil uil-web-grid nav_icon" style={{ color: "#FCCA3F"}}></i> : <i className="uil uil-brackets-curly nav_icon" style={{ color: "#8A97FF"}}></i>}
                <h4 style={{ color: `${colorTag}` }}>{item.tagName}</h4>
            </div>
            </div>
            <span className="descripcionCardTrabajo" dangerouslySetInnerHTML={{ __html: item.descripcion }} style={{ color: `${props.colortexto}` }}/>

            {/* * Boton */}
            { item.path == "" ?  <a href={item.link} target="_blank" rel="noreferrer" > 
            <button style={{ background: `${colorBoton}` }} className="VerProyectoBoton" >
            <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24" >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill={colortextoBoton}
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
            </div>
            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
            </button> </a> 
            :
            <Link key={item.id} to={`${item.path}`}>
            <button style={{ background: `${colorBoton}` }} className="VerProyectoBoton">
            <div className="svg-wrapper-1">
            <div className="svg-wrapper">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24" >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                fill={colortextoBoton}
                d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                ></path>
            </svg>
            </div>
            </div>
            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
            </button> </Link>}
            {/*  Boton */}
            </div>
            </div>

            ))}

            { trabajos ? (
            <>
                {data.slice(3).map(item => (
                <div className={item.reverse ? "contenedorTrabajos reverse" : "contenedorTrabajos"} key={item.id}> 
                    <LazyLoad offset={1000} height={1000} className={item.reverse ? "loaderTrabajosReverse" : "LoaderTrabajos"}>
                    <img src={item.CardArte} alt="Tarjeta" />
                    </LazyLoad>
                    <div className="textosCardTrabajo">
                    <div className="tituloTrabajoCard">
                        <LazyLoad offset={500} height={500}>
                        {darkMode ? (
                            item.LogoDark ? (
                            <img src={item.LogoDark} alt="logo" className="LogoimgT"/>  
                            ) : (
                            item.Logo ? (
                                <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/>
                            ) : (
                                <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>
                            )
                            )
                        ) : (
                            item.Logo ? (
                            <img src={item.Logo} alt="logo" className={item.LogoSmall ? "LogoimgTsmall" : "LogoimgT"}/>
                            ) : (
                            <h3 className="tituloCardTrabajo" style={{ color: `${props.colortexto}` }}>{item.tituloCard}</h3>
                            )
                        )}
                        </LazyLoad>
                        <div className="tag">
                        {item.tagName === "Diseño UX/UI" ? (
                            <i className="uil uil-web-grid nav_icon" style={{ color: "#FCCA3F"}}></i>
                        ) : (
                            <i className="uil uil-brackets-curly nav_icon" style={{ color: "#8A97FF"}}></i>
                        )}
                        <h4 style={{ color: `${colorTag}` }}>{item.tagName}</h4>
                        </div>
                    </div>
                    <span className="descripcionCardTrabajo" dangerouslySetInnerHTML={{ __html: item.descripcion }} style={{ color: `${props.colortexto}` }}/>
                    {item.path === "" ? (
                        <a href={item.link} target="_blank" rel="noreferrer"> 
                        <button style={{ background: `${colorBoton}` }}>
                            <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24" >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill={colortextoBoton}
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
                        </button>
                        </a> 
                    ) : (
                        <Link key={item.id} to={`${item.path}`}>
                        <button style={{ background: `${colorBoton}` }}>
                            <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24" >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill={colortextoBoton}
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                                </svg>
                            </div>
                            </div>
                            <span style={{ color: `${colortextoBoton}` }}>Ver proyecto</span>
                        </button>
                        </Link>
                    )}
                    </div>
                </div>
                ))}
            </>
            ) : null}


        </div>
    </div>
    )
    }

    // json
    // {
    //     "id": 4,
    //     "CardArte": "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FMebloStyleCard.svg?alt=media&token=ed277368-8839-4c9d-b6d3-d5c4ed7e614f" ,
    //     "tituloCard": "MebloStyle",
    //     "tagName" : "Desarrollo Frontend",
    //     "descripcion" :"Como <b>diseñador y desarrollador</b> independiente, he sido responsable de todo el proceso de creación de la plataforma, asegurando una <b>experiencia de usuario fluida</b> y una <b>interfaz atractiva</b>. El resultado es una tienda en línea elegante que también refuerza la marca con un diseño visual atractivo.",
    //     "reverse" : true,
    //     "path" : "",
    //     "link": "https://www.figma.com/proto/OEUAg55cfBxwJ71eERMcUc/Daily-Design?node-id=2190-769&t=CMoHh9fu2lQkxIvo-1&scaling=scale-down-width&content-scaling=fixed&page-id=2190%3A647"
    //   },
    //   {
    //     "id": 5,
    //     "CardArte": "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FFrame%20224.svg?alt=media&token=d0847321-cc49-48f7-9d16-194bf3b09784" ,
    //     "Logo": "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FGroup%2025.svg?alt=media&token=7582774f-26f5-4c07-9e86-408341bc062e",
    //     "LogoSmall" : true,
    //     "tagName" : "Diseño UX/UI",
    //     "descripcion" :"Como diseñador UX/UI, tuve el placer de colaborar con Sushi Zen, un restaurante de sushi emergente que busca ofrecer una experiencia auténtica y moderna a sus clientes. Mi participación en este proyecto abarcó desde el <b>branding</b> hasta el <b>diseño detallado del menú</b> y los posters promocionales.",
    //     "path" : "",
    //     "link" : "https://www.figma.com/proto/fZTUgmsjuaQ096Ik3SFyE5/Sushi-Zen?node-id=63-334&t=kfkg8s9qQ7iPMhpY-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=63%3A334"
      
    //   },
    //   {
    //     "id": 6,
    //     "CardArte": "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Trabajos%2FBodaCard.svg?alt=media&token=8a6a0d67-c7be-414f-9183-1dd32cbc599a" ,
    //     "tituloCard": "Boda",
    //     "tagName" : "Diseño UX/UI",
    //     "descripcion" :"Diseñé una elegante página web para una boda, el sitio incluía fotos, historia de los novios, itinerario y un registro de invitados, y una sección de información sobre la ceremonia y la recepción. Utilicé un <b>diseño responsivo para asegurar que la página se viera impecable en todos los dispositivos.</b> ",
    //     "reverse" : true,
    //     "path" : "",
    //     "link" : "https://boda.asgerath.com"
    //   }