/* eslint-disable react/prop-types */
import { useState, Suspense } from "react"
import "./Habilidades-card.css"
import "./Tecnologias-cont.css"
import "./educacion.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import LazyLoad from 'react-lazyload';
// Cards de contenido oculto
import Diseñador from "./Cards_skills/Diseñador"
import Desarrollador from "./Cards_skills/Desarrollador"
import Ingeniero from "./Cards_skills/Ingeniero"
import { useDarkMode } from "../../Hooks/useDarkMode";

export default function Habilidades(props){
    const {darkMode} = useDarkMode();

    const fondoCard = darkMode ? `#494949` : `#eeeeee`

    const bordeCard = darkMode ? `` : `1px solid #121212`

    // const next = darkMode ? `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FNextD.svg?alt=media&token=05c58d04-3733-4ccb-9200-ec62f8dc0cea` : `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FNextL.svg?alt=media&token=a1046b51-d423-4845-ad06-eef262f6eaa3`

    const sql = darkMode ? `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FsqlD.svg?alt=media&token=64780816-23e0-48b9-a1a7-95eebc25d190` : `https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FsqlL.svg?alt=media&token=f8e6c1c1-ac54-44bc-bb44-61103e8bbd1c`
    
    // modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [open2, setOpen2] = useState(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

    const [open3, setOpen3] = useState(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);

    return(
    <section className="skills" id="habilidades">
         <h2 className="Titulo_trabajo" style={{ color: `${props.colortexto}` }} >Habilidades</h2>

        <div className="c1">
        <h3 className="subtitulo" >Tecnologías</h3>
        
        <section className="skills__container" >

            <div className="contenedorSkillText">
                <h2 className="tituloCard" style={{ color: `${props.colortexto}` }}>Frontend</h2>
                <div className="skills__content" style={{backgroundColor: `${fondoCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
               
                    <div className="div1"> 
                    <LazyLoad offset={200} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Freact.svg?alt=media&token=93f30986-31eb-4454-bc49-f1c34d9f9a05"/>
                    </LazyLoad></div>
                    <div className="div2"> 
                    <LazyLoad offset={200} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FCSS%20(2).svg?alt=media&token=9b87d4c8-8dde-459a-b1d2-2d941add9190"  />
                    </LazyLoad>
                    </div>
                    <div className="div3"> 
                    <LazyLoad offset={200} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FMUI.svg?alt=media&token=42e05fca-4ea1-4b8e-98a4-d6662a4dd703"  />
                    </LazyLoad>
                    </div>
                    <div className="div4"> 
                    <LazyLoad offset={200} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FFM.png?alt=media&token=7fb4bf3c-f8de-42a3-bf07-8649de7c9e94"  />
                    </LazyLoad>
                    </div>
                    <div className="div5"> 
                    <LazyLoad offset={200} >
                    <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Ftailwindcss-icon-svgrepo-com%201.png?alt=media&token=dd4391a3-4bfd-486b-a960-371be12183b0"  />
                    </LazyLoad>
                    </div>


                </div>
            </div>

            <div className="contenedorSkillText">
                <h2 className="tituloCard" style={{ color: `${props.colortexto}` }}>Herramientas</h2> 
                <div className="skills__content Herramientas" style={{backgroundColor: `${fondoCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

                <div className="div1"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fgit.svg?alt=media&token=be1eac56-0c13-4a24-afec-d09cec6349d9"  />
                </LazyLoad>
                </div>
                <div className="div2"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FDev%20tools.svg?alt=media&token=5e38b6e0-a347-425e-b653-7f74ebae6506"  />
                </LazyLoad>
                </div>
                <div className="div3"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fmjml.svg?alt=media&token=a47ec1ad-b337-4edb-8b23-851dbce471e0"  />
                </LazyLoad>
                </div>

                </div>
            </div>
            
            <div className="contenedorSkillText">
                <h2 className="tituloCard" style={{ color: `${props.colortexto}` }}>Diseño UX</h2> 
                <div className="skills__content UX-Content" style={{backgroundColor: `${fondoCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

                <div className="div1"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Ffigma.svg?alt=media&token=dfddd449-5bb2-482c-ad4c-37dce58c0f99"  />
                </LazyLoad>
                </div>
                <div className="div2"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fnotion-svgrepo-com.svg?alt=media&token=1bb052c7-6351-41b5-919b-32fe69d70fa0"  />
                </LazyLoad>
                </div>
                <div className="div3"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fhotjar.svg?alt=media&token=5016c2a3-0bc0-4659-9bc1-e554a2480a1d"  />
                </LazyLoad>
                </div>
                    
                </div>
            </div>
            
            <div className="contenedorSkillText">
                <h2 className="tituloCard" style={{ color: `${props.colortexto}` }}>Desarrollo y metricas</h2> 
                <div className="skills__content FW" style={{backgroundColor: `${fondoCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

                <div className="div1"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fvite.svg?alt=media&token=7556ec6d-a92d-4f0c-a5b0-5588150346ca"  />
                </LazyLoad>
                </div>
                {/*  */}
                <div className="div2"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FAnalytics.svg?alt=media&token=51d95724-6002-4bde-89cf-809872116145"/>
                </LazyLoad>
                </div>

                </div>
            </div>
            
            <div className="contenedorSkillText">
                <h2 className="tituloCard" style={{ color: `${props.colortexto}` }}>Base de datos</h2> 
                <div className="skills__content BD" style={{backgroundColor: `${fondoCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>

                <div className="div1"> 
                <LazyLoad offset={200} >
                <img src={sql} />
                </LazyLoad>
                </div>
                <div className="div2"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fmysql-logo-svgrepo-com.svg?alt=media&token=8e461e0e-100c-4748-a2a2-ee459955799c"  />
                </LazyLoad>
                </div>
                <div className="div3"> 
                <LazyLoad offset={200} >
                <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Ffirebase-1-logo-svgrepo-com%20(1).svg?alt=media&token=9aedcee5-fd8a-4322-8f54-aafe840c6cfb"  />
                </LazyLoad>
                </div>

                </div>
            </div>
            
        </section>
        </div>

        <div className="c2">
        <h3 className="subtitulo">Mi nivel técnico</h3>

        {/* ? Cards informativas */}
        <section className="services__container grid" >

            {/* Contenedor 1 */}
        <div className="services__content" style={{backgroundColor: `${fondoCard}` , border: `${bordeCard}`}} onMouseEnter={props.textEnter} 
        onMouseLeave={props.textLeave} >
                <div>
        {/* Parte visible de la card  */}
            <i className="uil uil-web-grid services__icon" style={{ color: `${props.colortexto}`}}></i>
            <h3 className="services__title" style={{ color: `${props.colortexto}` }}>UX <br /> Designer</h3>
            </div> 
            <span className="services__button" onClick={handleOpen} style={{ color: `${props.colortexto}` }}>Ver más
            <i className="uil uil-arrow-right services__button-icon"></i></span>
        </div>

        <Modal open={open} onClose={handleClose}>
        <Box className="modal-contenedor">
        <Suspense fallback={<div>Loading...</div>}>
        <Diseñador fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose = {handleClose}/>
        </Suspense>  
        </Box>
        </Modal>

            {/* Contenedor 2 */}
        <div className="services__content" style={{backgroundColor: `${fondoCard}`,  border: `${bordeCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
                <div>
            <i className="uil uil-arrow services__icon" style={{ color: `${props.colortexto}`}}></i>
            <h3 className="services__title" style={{ color: `${props.colortexto}`}}>Web <br /> Developer</h3>
            </div> 
            <span className="services__button" onClick={handleOpen2} style={{ color: `${props.colortexto}`}}>Ver más 
            <i className="uil uil-arrow-right services__button-icon"></i></span>
        </div>

        <Modal open={open2} onClose={handleClose2}>
        <Box className="modal-contenedor">
        <Suspense fallback={<div>Loading...</div>}>
        <Desarrollador fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose2 = {handleClose2}/>
        </Suspense>  
        </Box>
        </Modal>

            {/* Contenedor 3 */}
            <div className="services__content" style={{backgroundColor: `${fondoCard}`, border: `${bordeCard}`}} onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}>
            <div>
            <i className="uil uil-graduation-cap services__icon" style={{color: `${props.colortexto}`}}></i>
            <h3 className="services__title" style={{color: `${props.colortexto}`}}>Ingeniero en <br /> Computación</h3>
            </div> 
            <span className="services__button" onClick={handleOpen3} style={{color: `${props.colortexto}`}}>Ver más <i className="uil uil-arrow-right services__button-icon"></i></span>
        </div>
        </section>
        <Modal open={open3} onClose={handleClose3}>
        <Box className="modal-contenedor">
        <Suspense fallback={<div>Loading...</div>}>
        <Ingeniero fondoCard = {fondoCard} colortexto = {props.colortexto} handleClose3 = {handleClose3}/>
        </Suspense>  
        </Box>
        </Modal>
        </div>

        <div className="c3">
        <h3 className="subtitulo" >Educación</h3>

        <section className="Educacion_container" >

        
        <div className="texto imgizquierda">
        <span className="TextoEducacion" style={{ color: `${props.colortexto}` }}><b style={{fontSize: "1.5vw", lineHeight: 1.15, fontWeight: 500}}>Ingeniería en computación</b> <br /> <h4 className="SubtituloTextosEducación">IPN - ESIME <br /> <br /><i className="uil uil-calendar-alt" /> 2019 - 2024</h4></span>
        </div>
        
        <LazyLoad height={500} offset={100} className="iconoE">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fingeniero%20L.png?alt=media&token=c60c7de8-73bb-48b1-ad82-a000d7b9441c" alt="ing"  className="iconoE"/>
        </LazyLoad>

        <LazyLoad height={500} offset={100} className="imgizquierda">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fipn.svg?alt=media&token=7bc23ee6-3d23-49d2-986f-e33839a6ff81"  loading="lazy"className="ipn"/>    
        </LazyLoad>

        <LazyLoad height={500} offset={100} className="texto imgizquierda">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2FFront.svg?alt=media&token=d633958f-11ad-4b4a-a861-7b67aecf2048"  loading="lazy"/>
        </LazyLoad>

        <LazyLoad height={500} offset={100} className="iconoE">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fweb%20D.svg?alt=media&token=ce126c58-000b-4519-87d3-2966bc206811" alt="webd"  className="iconoE"/>
        </LazyLoad>

        <div className="imgizquierda" >
        <span className="TextoEducacion" style={{ color: `${props.colortexto}` }} ><b style={{fontSize: "1.5vw", lineHeight: 1.15, fontWeight: 500}}>Desarrollo Front-End</b> <br /> <h4 className="SubtituloTextosEducación">Oracle Next Education <br /> <br /> <i className="uil uil-calendar-alt" /> 2023</h4></span>
        </div>
        
        <div className="texto imgizquierda">
        <span className="TextoEducacion" style={{ color: `${props.colortexto}` }}><b style={{fontSize: "1.5vw", lineHeight: 1.15, fontWeight: 500}}>Diseño de experiencia de usuario</b> <br /> <h4 className="SubtituloTextosEducación">Google <br /> <br /><i className="uil uil-calendar-alt" /> 2022 - 2023</h4></span>
        </div>

        <LazyLoad offset={200} className="iconoE">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2FDise%C3%B1ador.svg?alt=media&token=f0eb4553-5304-45b4-8065-63af43a81749" className="iconoE" />
        </LazyLoad>

        <LazyLoad offset={200} className="imgizquierda" >
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fux.svg?alt=media&token=753ca56c-b229-4e20-8043-39dfda77b32d"  loading="lazy"/>
        </LazyLoad>

        <LazyLoad offset={200} className="texto imgizquierda">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fcecy.svg?alt=media&token=b6b6f6a7-68db-46e1-8882-0f217cc38ce2"  loading="lazy"/>
        </LazyLoad>

        <LazyLoad offset={200} className="iconoE">
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Ftec.svg?alt=media&token=5647141a-7cf0-493e-b19b-f077ee780f52"/>
        </LazyLoad>

        <div className="imgizquierda">
        <span className="TextoEducacion" style={{ color: `${props.colortexto}`}}><b style={{fontSize: "1.5vw", lineHeight: 1.15, fontWeight: 500}}>Soporte y mantenimiento a equipos de computo</b> <br /> <h4 className="SubtituloTextosEducación">CECyTEM <br /> <br /> <i className="uil uil-calendar-alt" /> 2015 - 2018</h4></span>
        </div>

        </section>
        {/* Seccion educacion responsiva */}
        <section className="contenedorEducacionResponsivo">

        <div className="Ing-Resp">
        <LazyLoad offset={200} >
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fingeniero%20L.png?alt=media&token=c60c7de8-73bb-48b1-ad82-a000d7b9441c" loading="lazy"/>
        </LazyLoad>
        <span className="TextoEducacion" style={{ textAlign: "center", color: `${props.colortexto}` }}><b style={{fontSize: "4.5vw", fontWeight: 500}}>Ingeniería en computación</b> <br /> <h4 className="SubtituloTextosEducación">IPN - ESIME <br /> 
        <i className="uil uil-calendar-alt" /> 2019 - 2024</h4></span>
        </div>

        <div className="Front-Resp">
        <LazyLoad offset={200} >
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Fweb%20D.svg?alt=media&token=ce126c58-000b-4519-87d3-2966bc206811" loading="lazy"/>
        </LazyLoad>
        <span className="TextoEducacion" style={{textAlign: "center", color: `${props.colortexto}` }} ><b style={{fontSize: "4.5vw", fontWeight: 500}}>Desarrollo Front-End</b> <br /> <h4 className="SubtituloTextosEducación">Oracle Next Education <br /> 
        <i className="uil uil-calendar-alt" /> 2023</h4></span>    
        </div>

        <div className="UX-Resp">
        <LazyLoad offset={200} >
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2FDise%C3%B1ador.svg?alt=media&token=f0eb4553-5304-45b4-8065-63af43a81749" loading="lazy"/>
        </LazyLoad>
        <span className="TextoEducacion" style={{ textAlign: "center", color: `${props.colortexto}` }}><b style={{fontSize: "4.5vw", fontWeight: 500}}>Diseño de experiencia de usuario</b> <br /> <h4 className="SubtituloTextosEducación">Google <br />  
        <i className="uil uil-calendar-alt" /> 2022 - 2023</h4></span>
        </div>

        <div className="Tec-Resp">
        <LazyLoad offset={200} >
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Educacion%2Ftec.svg?alt=media&token=5647141a-7cf0-493e-b19b-f077ee780f52" loading="lazy"/>
        </LazyLoad>
        <span className="TextoEducacion" style={{textAlign: "center", color: `${props.colortexto}`}}><b style={{fontSize: "4.5vw", lineHeight: 1.15, fontWeight: 500}}>Soporte y mantenimiento de computo</b> <br /> <h4 className="SubtituloTextosEducación">CECyTEM <br />  
        <i className="uil uil-calendar-alt" /> 2015 - 2018</h4></span>
        </div>

        </section>


        </div>
    </section>
    )
}