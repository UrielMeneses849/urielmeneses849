
export default function Ingeniero(props){
    return(
    <div className="services__modal-content">  
    <i className="uil uil-times services__modal-close" onClick={()=> props.toggleTab(0)}></i>

    <h3 className="services__modal-title">Ingeniero del I.P.N</h3>
    <p className="services__modal-description">4 años de carrera estudiando todo lo relacionado acerca del basto mundo de la computación</p>
    <ul className="services__modal-services grid">

    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Diseño y programación de bases de datos (SQL Server)</p>
    </li>

    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Armado de circuitos electronicos programables (Pics y Arduinos) </p>
    </li>

    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Gestión de proyectos: Capacidad para liderar y gestionar proyectos de desarrollo </p>
    </li>

    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Resolución de problemas: Habilidad para identificar y analizar problemas técnicos</p>
    </li>

    <li className="services__modal-service">
        <i className="uil uil-check-circle services__modal-icon"></i>
        <p className="services__modal-info">Analisis de señales analogicas y digitales</p>
    </li>
    </ul>
    </div>
    )
}