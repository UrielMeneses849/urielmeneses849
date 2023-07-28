import "../../Estilos/Trabajo/EstilosCards/Maquetas.css"

export default function MaquetasUI(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>
            <h3 className="services__modal-title" >Maquetas hechas en Figma, React y Material UI</h3>
                    <p className="services__modal-description">Visita mis sitios con un click</p>
        <br />
        <h3 className="services__modal-title">MebloStyle</h3>
        <div className="M1" style={{backgroundImage: `url("./images/maquetas/M1.svg")`}}>
        </div>

        <br />
        <br />
        <h3 className="services__modal-title">Honda Civic</h3>
        <div className="M2" style={{backgroundImage: `url("./images/maquetas/M2.svg")`}}>
        </div>

        <br />
        <br />
        <h3 className="services__modal-title">Optima Consulting</h3>
        <div className="M3" style={{backgroundImage: `url("./images/maquetas/M3.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title">Preparación IPN</h3>
        <div className="M4" style={{backgroundImage: `url("./images/maquetas/M4.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title">ExploraViajes</h3>
        <div className="M5" style={{backgroundImage: `url("./images/maquetas/M5.svg")`}}></div>

        </div>
    )
}