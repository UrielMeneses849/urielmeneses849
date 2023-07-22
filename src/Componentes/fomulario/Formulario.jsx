import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Formulario(props){

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
    'service_h3tkipw',
     'template_fvwhyup',
      form.current,
    'aaqWymk-FYyhsMfhu')

      e.target.reset()
  };


    const bordeCard = props.darkMode ? `2px solid #f9f9f9` : `2px solid #484848`
    const fondoForm = props.darkMode ? `#0b0b0c`: `#fafafa`
    const placeholder = props.darkMode ? `#fafafa` : `#0b0b0c`
    return(
        <form className="contact_form" ref={form} onSubmit={sendEmail}>
        {/* Input del nombre */}
            <div className="contact-form-div" data-aos="fade-down" 
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="800"
           data-aos-easing="ease-in">
                <label className="contact_form-tag" style={{ color: `${props.colortexto}`, backgroundColor: `${fondoForm}` }}>Nombre</label>
                <input type="text" name="name" 
                className="contact_form-input" placeholder="Ingresa tu nombre" 
                style={{border: `${bordeCard}`, color: `${placeholder}`}}
                 required/>
            </div>
        {/* Input de correo */}
        <div className="contact-form-div" data-aos="fade-down" 
           data-aos-offset="200"
           data-aos-delay="50"
           data-aos-duration="800"
           data-aos-easing="ease-in">
                <label className="contact_form-tag" style={{ color: `${props.colortexto}`, backgroundColor: `${fondoForm}` }}>Correo Electronico</label>
                <input type="email" name="email" 
                className="contact_form-input" placeholder="Ingresa tu correo" 
                style={{border: `${bordeCard}`, color: `${placeholder}`}}
                required/>
            </div>

        {/* Input de mensaje personalizado */}
        <div className="contact-form-div contact_form-area"
        data-aos="fade-down" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in">
                <label className="contact_form-tag" style={{ color: `${props.colortexto}`, backgroundColor: `${fondoForm}` }}>Dejame un mensaje :)</label>
                <textarea name="project" 
                className="contact_form-input" placeholder="¿En que te puedo ayudar?" 
                style={{border: `${bordeCard}`, color: `${placeholder}`}}
                />
            </div>
        <button className="boton-form" onMouseEnter={props.textEnter} onMouseLeave={props.textLeave}
        data-aos="fade" 
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="800"
        data-aos-easing="ease-in">Enviar <i className="uil uil-message" ></i></button>
        </form>
    )
}