import "../../Estilos/Trabajo/EstilosCards/Maquetas.css"

export default function MaquetasUI(props) {
    return(
        <div className="cardActiva-content">
            <i className="uil uil-times services__modal-closed" onClick={()=> props.toggleTab(0)}></i>
            <h3 className="services__modal-title" >Maquetas hechas en Figma, React y Material UI</h3>
                    <p className="services__modal-description">Visita mis sitios con un click</p>
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>MebloStyle</h3>
        <div className="M1" style={{backgroundImage: `url("./images/maquetas/M1.svg")`}}>
        </div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Honda Civic</h3>
        <div className="M2" style={{backgroundImage: `url("./images/maquetas/M2.svg")`}}>
        </div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Optima Consulting</h3>
        <div className="M3" style={{backgroundImage: `url("./images/maquetas/M3.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Preparación IPN</h3>
        <div className="M4" style={{backgroundImage: `url("./images/maquetas/M4.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>ExploraViajes</h3>
        <div className="M5" style={{backgroundImage: `url("./images/maquetas/M5.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>FashionFusion</h3>
        <div className="M6" style={{backgroundImage: `url("./images/maquetas/M6.svg")`}}></div>

        <br />
        <br />
        <h3 className="services__modal-title" style={{fontSize: "1.5rem"}}>Fruta y Fruto</h3>
        <div className="M7" style={{backgroundImage: `url("./images/maquetas/M7.svg")`}}></div>

        </div>
    )
}