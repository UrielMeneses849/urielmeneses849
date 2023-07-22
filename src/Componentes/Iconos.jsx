import "../Estilos/Iconos/Iconos.css"
export default function Iconos(){

    return(
        
        <ul className="iconos" data-aos="fade-up" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
            <li className="icono"><img 
            src="./images/iconos/figma.svg"
            alt=""
            className="icon-figma"/></li>
            <li className="icono"><img 
            src="./images/iconos/html.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/css.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/js.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/react.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/vite.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/sql.svg"
            alt=""
            className="icon" /></li>
            <li className="icono"><img 
            src="./images/iconos/git.svg"
            alt=""
            className="icon" /></li>
        </ul>
       
    )
}