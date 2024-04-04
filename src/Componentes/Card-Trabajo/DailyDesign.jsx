/* eslint-disable react/prop-types */
import "../../Estilos/Trabajo/EstilosCards/Daily.css"

export default function DailyDesign(props) {
    return(
        <div className="cardActiva-content" style={{backgroundColor: `${props.fondoCard}`, color: `${props.colortexto}` }}>
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>
    
        <h3 className="services__modal-title">Diseños Diarios</h3>
        <p className="services__modal-description">Mejora continua en el diseño </p>

        <h3 className="services__modal-title2">Artes realizados para Finvero</h3>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2Fgo%20bravo.png?alt=media&token=b04f6650-da8c-4ac8-aa07-f42aca5417e4")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2Fgo%20bravo1.png?alt=media&token=42d8ee0f-52dd-49e0-a7f6-9bed38ec11c1")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FPagos%20a%20la%20medida.png?alt=media&token=c7be3f1e-d421-4876-b6b5-50b46527df3d")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FCheckout.png?alt=media&token=5a2ab8b0-5bf3-42c2-b243-92a7de691364")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FPlugin.png?alt=media&token=06a8de2b-ca49-4998-b4c1-0a5ea6e8f3c5")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FBoton%20de%20pago.png?alt=media&token=145e3eb6-2b42-4cd5-83f5-21c2aff73809")`}}>        
        </div>
        <div className="D1 finv" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Finvero%2FPagina1Slider%2FIlustraciones%2FLink%20de%20pago.png?alt=media&token=a70e84d6-64c4-417d-a220-d45f5c7b2aba")`}}>        
        </div>

        <h3 className="services__modal-title2">LOGIN Page</h3>
        <div className="D1" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D1.svg?alt=media&token=77960760-e76a-4871-867c-180c9426ea8f")`}}>        
        </div>
  
        <h3 className="services__modal-title2">PAYMENT Page</h3>
        <div className="D1" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D2.svg?alt=media&token=fda90dd6-4739-4e50-a986-bf772a5bc1f8")`}}>        
        </div>

        <h3 className="services__modal-title2">USER Page</h3>
        <div className="D1" style={{backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/D3.svg?alt=media&token=929bde7b-b40b-42fd-b405-499fe67c1fc7")`}}>        
        </div>

        </div>
    )
}