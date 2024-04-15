/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Daily.css"

export default function DailyDesign(props) {
    return(
        <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
            <i className="uil uil-times services__modal-closed" onClick={props.handleClose}></i>
    
        <h3 className="services__modal-title">Diseños Diarios</h3>
        <p className="services__modal-description">Mejora continua en el diseño </p>

        <h3 className="services__modal-title2">Artes realizados para Finvero</h3>
        <div className="D1 finv">         
        <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2Fgo%20bravo1.svg?alt=media&token=4b680b03-007f-446f-a29e-39a878f496cf" loading="lazy"/>        
        </div>
        <div className="D1 finv" >
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2Fgo%20bravo.svg?alt=media&token=9aff63b4-dd6e-4992-a7b6-cff02a3da65f" loading="lazy" />        
        </div>
        <div className="D1 finv" >
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FPagos.svg?alt=media&token=0730f0b8-5447-4566-a1e0-922ba54c290a" loading="lazy" />        
        </div>
        <div className="D1 finv" >
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FBoton%20de%20pago.svg?alt=media&token=49a5e276-895d-4078-92b1-0de082a12c69" loading="lazy" />        
        </div>
        <div className="D1 finv" >
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FLink%20de%20pago.svg?alt=media&token=c075976a-f876-4a78-ab26-0f09268f06c9" loading="lazy" />        
        </div>
        <div className="D1 finv" >
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FPlugin.svg?alt=media&token=a4edf60d-5e57-425a-8952-102f6a31f3d4" loading="lazy" />        
        </div>
       

        <h3 className="services__modal-title2">LOGIN Page</h3>
        <div className="D1">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D1.svg?alt=media&token=77960760-e76a-4871-867c-180c9426ea8f" loading="lazy" />        
        </div>
  
        <h3 className="services__modal-title2">PAYMENT Page</h3>
        <div className="D1">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D2.svg?alt=media&token=fda90dd6-4739-4e50-a986-bf772a5bc1f8" loading="lazy" />        
        </div>

        <h3 className="services__modal-title2">USER Page</h3>
        <div className="D1">
            <img src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D3.svg?alt=media&token=929bde7b-b40b-42fd-b405-499fe67c1fc7" loading="lazy" />        
        </div>

        </div>
    )
}