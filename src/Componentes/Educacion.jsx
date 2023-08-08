/* eslint-disable react/prop-types */
import "../Estilos/Educacion/Educacion.css"
export default function Educacion(props){

    return(
    <>   
        <section className="qualification " data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out">
        <h3 className="subtitulo-edu" style={{ color: `${props.colortexto}` }} data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="700"
        data-aos-easing="ease-in-out">Mi formación academica</h3>

        <div className="qualification__container">
            <div className="qualification_tabs">

                <div className="qualification__button qualification__active button-flex">
                    <i className="uil uil-graduation-cap qualification__icon" style={{ color: `${props.colortexto}` }}></i>
                   <h3 className="educacion" style={{ color: `${props.colortexto}` }}> Educacion </h3>
                </div>

            </div>
        <div className="qualification__sections">
            <div className="qualification__content">

        {/* Secciones de la linea del tiempo */}
        {/* Seccion 1 */}
        <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title" style={{ color: `${props.colortexto}` }}>Front - End</h3>

                        <span className="qualification__subtitle">Oracle Next Education</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  2023 
                        </div>
                    </div>
        </div>
        
        {/* Seccion 2 */}
        <div className="qualification__data">
            <div></div>
            <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification_line">
                    </span>

                    <div>
                        <h3 className="qualification__title" style={{ color: `${props.colortexto}` }}>UX Designer</h3>

                        <span className="qualification__subtitle">Coursera Google</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  2022 - 2023
                        </div>
                    </div>
                </div>
        </div>
    
        {/* Seccion 3 */}
        <div className="qualification__data">
                    <div>
                        <h3 className="qualification__title" style={{ color: `${props.colortexto}` }}>Ingeniero en computación</h3>

                        <span className="qualification__subtitle">IPN - ESIME</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  2019 - Present 
                        </div>
                    </div>

                    <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification_line">
                    </span>
                </div>
        </div>

        {/* Seccion 4 */}
        <div className="qualification__data">
            <div></div>
            <div>
                    <span className="qualification__rounder"></span>
                    <span className="qualification_line">
                    </span>

                    <div>
                        <h3 className="qualification__title" style={{ color: `${props.colortexto}` }}>Tecnico en soporte</h3>

                        <span className="qualification__subtitle">CECyTEM</span>
                        <div className="qualification__calender">
                            <i className="uil uil-calendar-alt"></i>  2015 - 2018
                        </div>
                    </div>
                </div>
        </div>

    
  
    </div>
    </div>
    </div>
    
        </section>
    </>

    )
}