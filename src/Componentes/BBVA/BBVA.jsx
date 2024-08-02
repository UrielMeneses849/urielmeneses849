import './BBVA.css'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import LazyLoad from "react-lazyload";
import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

export default function BBVA(){

    let LogoBBVA = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGroup-1000002457.webp?alt=media&token=d4f3371c-2e0d-4df5-bf39-b3f1c01084d2"
    let Arte1 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FFrame-1000002506.webp?alt=media&token=83e2b384-b068-4130-a38a-207065427d35"
    let carrera = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FFrame-1000002498.webp?alt=media&token=f83a5ed7-b013-4d6c-8c25-4388452ea792"
    let pc = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGo-digital-bbva.x.im1592495088965im-removebg-preview-1.webp?alt=media&token=78cb0bc9-2309-4e0e-baf2-d4e6ef2d7d33"
    let manos = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2Fhandshake_dark.im1712051370644im-1.webp?alt=media&token=9cb21f9a-e32e-43b7-9a82-49bb4e135eac"

    let foto1 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FWhatsApp%20Image%202024-07-31%20at%2010.27.34%20PM%20(2).jpeg?alt=media&token=86fb7083-ace7-48d7-84c8-904857fe5904"
    let foto2 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FWhatsApp%20Image%202024-07-31%20at%2010.27.34%20PM%20(1).jpeg?alt=media&token=293f0864-0f65-47bb-a293-403333b63f1e"
    let foto3 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FWhatsApp%20Image%202024-07-31%20at%2010.27.34%20PM.jpeg?alt=media&token=2bcdf1b1-ebba-49b4-831c-38f41c8da67e"
    let foto4 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FWhatsApp%20Image%202024-07-31%20at%2010.27.33%20PM.jpeg?alt=media&token=58765085-22c6-40e5-899a-7e55edfee414"
    
return(

<div className='ContainerBBVA'>

 <div className="ContainerBBVA__Contenido">

    <div className="ContainerBBVA--Textos">

        <div className="ContainerBBVA__Logo-Inf">
            <div className="BBVALogo">
            <h2 className="tituloCardTrabajo" style={{color: "#fff"}}> Fui parte del</h2>
            <img src={LogoBBVA} alt="" />
            </div>

        <div className="ContainerBBVA--Info">
        <i className="uil uil-info-circle services__button-icon"></i>    
        <span>Este evento reunió a <b>profesionales en programación con al menos 2 años de experiencia</b> provenientes de diversas disciplinas.</span>
        </div>
        </div>

        <div className="ContainerBBVA__Arte-Texto">
             <img src={Arte1} alt="" />
            <div className="separadorIMG"></div>
            <span style={{color: "#fff"}} >Tuve el honor de ser <b>uno de los 60 profesionales seleccionados de entre 300 solicitantes</b> para participar en un prestigioso 
            evento organizado por BBVA Bancomer.</span>
            </div>

        <div className="ContainerBBVA__Carrera">

        <h2 className="TituloCarrera">Impacto en mi carrera profesional</h2>

            <div className="ContainerBBVA__Arte-Texto" id='carrera'>
            <img src={carrera} alt="" className='ImgCarrera'/>
            <span style={{color: "#fff"}}>Este evento me impulsó a <b>alcanzar nuevos niveles de excelencia</b>, reforzando mi compromiso con la <b>mejora continua y la innovación.</b> </span>
            </div>

        </div>

    </div>

   
    <div className="ContainerBBVA--Slider">
    <div className="ContainerBBVA__TituloDesc">
    <h2 className="TituloCarrera" style={{color: "#fff"}}>Un poco de esta increible experiencia</h2>
    <span style={{color: "#fff"}}>El evento tuvo lugar en el <b>piso 50 de la torre BBVA </b></span>
    </div>

    {/* <div className="BBVA__Slider">
        <button className='ButtonSlider' id='Left' ><i className="uil uil-angle-left-b services__button-icon" style={{color: "#fff"}}></i>  </button>
        <div className="BBVA__Slider-Contenido">
        <img src={foto1} alt="" className='ImgCarrera'/>
        </div>
        <button className='ButtonSlider' id='Right' ><i className="uil uil-angle-right-b services__button-icon" style={{color: "#fff"}}></i>  </button>
    </div> */}

<Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        lazy={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><LazyLoad offset={500} height={500}><img src={foto1} alt="" className='ImgCarrera swiper-lazy'/></LazyLoad><div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div></SwiperSlide>
        <SwiperSlide><LazyLoad offset={500} height={500}><img src={foto2} alt="" className='ImgCarrera swiper-lazy'/></LazyLoad></SwiperSlide>
        <SwiperSlide><LazyLoad offset={500} height={500}><img src={foto3} alt="" className='ImgCarrera swiper-lazy'/></LazyLoad></SwiperSlide>
        <SwiperSlide><LazyLoad offset={500} height={500}><img src={foto4} alt="" className='ImgCarrera swiper-lazy'/></LazyLoad></SwiperSlide>
       
      </Swiper>
    </div>
    

    <div className="ContainerBBVA--footer">
    <div className="ContainerBBVA__Arte-Texto">
    <img src={manos} alt="" className='ImgCarrera'/>
    <span style={{color: "#000"}}>Durante el evento, demostré mis habilidades a través de <b>pruebas técnicas</b>, actividades enfocadas en <b>destreza, organización, negociación y el trabajo en equipo.</b>  </span>
    </div>

    <div className="ContainerBBVA__Arte-Texto">
    <img src={pc} alt="" className='ImgCarrera'/>
    <span style={{color: "#000"}}>Este entorno competitivo me permitió destacar mis <b>competencias técnicas y colaborativas</b>, consolidando mi perfil como un profesional en tecnología. </span>
    </div>
    </div>
 </div>

</div>
)}