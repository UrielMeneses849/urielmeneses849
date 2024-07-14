/* eslint-disable react/prop-types */
import LazyLoad from "react-lazyload";
import "../Estilos/Home/HomePage.css"
import { useDarkMode } from "../Hooks/useDarkMode";

import Banner from "./Banner"

export default function Home(){
    const {darkMode} = useDarkMode();

    const FlechaScroll = darkMode ? "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFlecha%20Negra.svg?alt=media&token=3bfae33d-f8ce-432f-88fa-1d4cdecae8c8" : "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/HomePage%2FFlechaBlanca.svg?alt=media&token=d1da3034-64db-4edf-a518-a2e591f997e0";
  
    // Color de fondo de todo el body
    document.body.style = darkMode ? `background-Color: #15171C` : `background-Color: #f0f0f0`

    return(
        <div className="Home" >

        <Banner />
        <a href="#trabajo">
        <LazyLoad offset={500} height={500}>
        <img src={FlechaScroll} alt="" className="imagenFlechaMovil" />
        </LazyLoad>
        </a>
        </div>
    )
}
