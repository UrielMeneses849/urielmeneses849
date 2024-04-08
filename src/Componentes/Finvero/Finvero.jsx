/* eslint-disable react/prop-types */
import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Finvero.css'

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles

export default function Finvero(props){

// Variables del swipper
const progressCircle = useRef(null);
const progressContent = useRef(null);
const onAutoplayTimeLeft = (s, time, progress) => {
  progressCircle.current.style.setProperty('--progress', 1 - progress);
  progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
};

// eslint-disable-next-line react/prop-types
const fondoCard = props.darkMode ? `#494949` : `#F5FFFF`

const fondoSwiper = props.darkMode ? `#15171C` :  `#f0f0f0`

let color = props.darkMode ? `#FFB828` : `#092D5D`

let finvero = props.darkMode ? `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FFV%202.svg?alt=media&token=6d032902-cf95-4ba2-9350-dec7b4ca4ffa` : `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FFV.svg?alt=media&token=b8a704cc-d456-4847-8ac5-40b6912f082d`

return(

<div className="container-finvero">
<img src={finvero} alt="" className="finvero"/>

<span  style={{ color: `${props.colortexto}` }} className='spanFinvero'>Desempeñe el rol de <b style={{ color: `${color}` }} className='textoDestacar'>Diseñador UX/UI</b> en el equipo de CX al realizar algunos diseños, investigaciones, pruebas de usabilidad y KPI´s, participando en los flujos 
    de originación de crédito, dashboards y distintas interfaces para los <b style={{ color: `${color}` }}>servicios y aplicaciones</b> de Finvero en el sector <b style={{ color: `${color}` }}>Fintech. </b></span>

<h3 className='Originacion' style={{ color: `${props.colortexto}` }}>Originación de crédito</h3>

<span className='textoOriginacion' style={{ color: `${props.colortexto}` }}>Creación de flujos para solicitar un crédito considerando a distintos lenders, pensado para los diferentes casos de uso, directo en tienda, desde la aplicación del comercio ó el usuario independiente.</span>

<div className="grid credito">

<div className="card colaboracion">
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Flogo-palacio-de-hierro%201.png?alt=media&token=02aa86de-dc5f-4e6b-a994-9f475139ae93" alt="" className='logoCard2'/>
    
    <span>Creación de un flujo personalizado para la solicitud de la tarjeta de crédito de Palacio de hierro.</span>
</div>

<div className="card cashi">
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2Fcashi-pleca%201.png?alt=media&token=8fa9e6ec-78bd-437d-91d6-2e75907ea91d" alt="" className='logoCard'/>

    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FGroup%203.svg?alt=media&token=600a479d-b833-4bd0-827c-cf0ae50c519b" alt="" className='logoCard'/>

    <span>Créditos otorgados en todas las tiendas de grupo Walmart, a través de toda la republica mexicana, manteniendo y actualizando su flujo de originación.</span>
</div>

<div className="card" style={{backgroundColor: `${fondoCard}`}}>
    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FGroup%2018.png?alt=media&token=523ce9d8-9326-47e0-9e46-2240df64eef3" alt="" className='logoCard'/>
    <div style={{ color: `${props.colortexto}` }}>
    <h3 className='h3-finvero'>Colaboración con diferentes empresas</h3>
    <span>Tuve participación en diferentes proyectos que involucraban distintas empresas</span>
    </div>
</div>
</div>


<h3 className='Originacion' style={{ color: `${props.colortexto}` }}>Un poco de mi trabajo</h3>

<Swiper spaceBetween={30} centeredSlides={false} autoplay={{ delay: 30000, disableOnInteraction: false, }}
        pagination={{ clickable: true, }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        autoHeight={true}
        className="mySwiper desktop" >


        <SwiperSlide style={{backgroundColor: `${fondoSwiper}`}}>
        <div className="imagenes">
        <div className="img1">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F1.png?alt=media&token=a5b9971b-5945-40c7-b00b-2ecca1360b6b" alt="" /></div>
        <div className="img2">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F2.png?alt=media&token=cd15870f-6d6e-4def-b2c2-132c25fe63d2" alt="" /></div>
        <div className="img3">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F3.png?alt=media&token=7b148dd6-c5f2-4195-abbb-858b4150790f" alt="" /></div>
        <div className="img4">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F4.png?alt=media&token=3d5c7336-cd2b-4e02-9216-bb1e66c15e73" alt="" /></div>
       
        <div className="img7">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F7.png?alt=media&token=fae7a91e-5e9c-41ff-b152-73880376429a" alt="" /></div>
        <div className="img8">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F8.png?alt=media&token=ec2afa76-492e-44db-89d6-3f3cc316b96a" alt="" /></div>
        </div>
        </SwiperSlide>

        <SwiperSlide style={{backgroundColor: `${fondoSwiper}`}}>
        <div className="imagenes2">
        <div className="img9">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F9.png?alt=media&token=2f3b23fe-1a5f-4486-ade2-a2d7267ba9dc" alt="" /></div>
        <div className="img10">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F10.png?alt=media&token=b52d9155-f075-45a3-9317-a35d7c9aab3a" alt="" /></div>
        <div className="img11">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F11.png?alt=media&token=e515d101-e7e2-4e7d-a03a-baf3c372c366" alt="" /></div>
        <div className="img12">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F12.png?alt=media&token=eedf27d7-e709-4c28-b36a-24a4ce9fcb67" alt="" /></div>
        <div className="img13">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F13.png?alt=media&token=092b2f97-1f6a-4c2b-8911-f3541da05707" alt="" /></div>
        <div className="img14">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F14.png?alt=media&token=f56532f8-7fe2-4067-bcfc-4eb6a653f0b6" alt="" /></div>
        </div>

        </SwiperSlide>
    <div className="autoplay-progress" slot="container-end">
    <svg viewBox="0 0 48 48" ref={progressCircle}>
    <circle cx="24" cy="24" r="20"></circle>
    </svg>
    <span ref={progressContent}></span>
    </div>
      </Swiper>

{/* Swipper MOVIL */}
<Swiper spaceBetween={30} centeredSlides={false} autoplay={{ delay: 30000, disableOnInteraction: false, }}
        pagination={{ clickable: true, }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        autoHeight={true}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper Movil" >


<SwiperSlide style={{backgroundColor: `${fondoSwiper}`}}>
<div className="imagenesMovil">

        <div className="img1">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F7.png?alt=media&token=fae7a91e-5e9c-41ff-b152-73880376429a" alt="" /></div>
        <div className="img2">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F2.png?alt=media&token=cd15870f-6d6e-4def-b2c2-132c25fe63d2" alt="" /></div>
        <div className="img3">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F3.png?alt=media&token=7b148dd6-c5f2-4195-abbb-858b4150790f" alt="" /></div>
        <div className="img4">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F5.png?alt=media&token=c3553f64-4745-4228-ba90-25750832f4eb" alt="" /></div>

</div>
</SwiperSlide>

<SwiperSlide style={{backgroundColor: `${fondoSwiper}`}}>
<div className="imagenesMovil movil2">

<div className="img5">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F8.png?alt=media&token=ec2afa76-492e-44db-89d6-3f3cc316b96a" alt="" /></div>
<div className="img6">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F1.png?alt=media&token=a5b9971b-5945-40c7-b00b-2ecca1360b6b" alt="" /></div>
<div className="img7">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F11.png?alt=media&token=e515d101-e7e2-4e7d-a03a-baf3c372c366" alt="" /></div>

</div>
</SwiperSlide>

<SwiperSlide style={{backgroundColor: `${fondoSwiper}`}}>
<div className="imagenesMovil movil3">

<div className="img8">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F9.png?alt=media&token=2f3b23fe-1a5f-4486-ade2-a2d7267ba9dc" alt="" /></div>
<div className="img9">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F4.png?alt=media&token=3d5c7336-cd2b-4e02-9216-bb1e66c15e73" alt="" /></div>
<div className="img10">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F12.png?alt=media&token=eedf27d7-e709-4c28-b36a-24a4ce9fcb67" alt="" /></div>
<div className="img11">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F10.png?alt=media&token=b52d9155-f075-45a3-9317-a35d7c9aab3a" alt="" /></div>
<div className="img12">  <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2F14.png?alt=media&token=f56532f8-7fe2-4067-bcfc-4eb6a653f0b6" alt="" /></div>

</div>
</SwiperSlide>


</Swiper>
</div>
)}