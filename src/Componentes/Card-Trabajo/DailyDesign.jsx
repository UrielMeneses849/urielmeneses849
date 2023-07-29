import "../../Estilos/Trabajo/EstilosCards/Daily.css"

export default function DailyDesign(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>
    
        <h3 className="services__modal-title">Diseños Diarios</h3>
        <p className="services__modal-description">Mejora continua en el diseño de interfaces </p>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>LOGIN Page</h3>
        <div className="D1" style={{backgroundImage: `url("./images/Diseños/D1.svg")`}}>        
        </div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>PAYMENT Page</h3>
        <div className="D1" style={{backgroundImage: `url("./images/Diseños/D2.svg")`}}>        
        </div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>USER Page</h3>
        <div className="D1" style={{backgroundImage: `url("./images/Diseños/D3.svg")`}}>        
        </div>

        </div>
    )
}