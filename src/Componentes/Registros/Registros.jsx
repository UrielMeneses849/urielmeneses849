import './Registros.css';
import { useDarkMode } from "../../Hooks/useDarkMode"; 

// --- IMPORTANTE ---
// Añade aquí la URL de tu imagen del colibrí
const colibriLogo = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2Fcolibri_1.png?alt=media&token=3ebf4850-50f0-44cd-94e2-af587773ecf9";

export default function Registros() {
  /* Variables */
  const { darkMode } = useDarkMode();
  
  // Defino los colores como en tu componente BBVA
  const colortexto = darkMode ? '#fff' : '#333';
  // En tu diseño, los títulos principales son negros/blancos, no de color.
  const tituloPrincipal = darkMode ? '#fff' : '#000'; 
  // Colores para los highlights en el texto
  const highlightGem = darkMode ? '#FF8A8A' : '#D90000';
  const highlightSma = darkMode ? '#70DFDF' : '#00A0A0';
  const resultado = darkMode ? 'https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2FFrame%201000002569.svg?alt=media&token=35975bea-8ac0-4744-851e-a09d70140ab5' : 'https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2FFrame%201000002570.svg?alt=media&token=be21bb62-b0d6-4a7d-95e9-22c321aaf0b1'

  return (
    <section className={`registros-section ${darkMode ? 'dark-mode' : ''}`}>
      
      {/* --- 1. Título --- */}
      <header className="registros-header">
        <h1 className="registros-title" style={{ color: tituloPrincipal }}>
          De 2 Semanas a 4 Días
        </h1>
        <div className="registros-subtitle-logo">
          <h2 className="registros-subtitle" style={{ color: tituloPrincipal }}>
            Automatización
          </h2>
          <img 
              src={colibriLogo} 
              alt="Colibrí logo" 
              className="registros-colibri-logo" 
            /> 
          
        </div>
        <h2 className="registros-subtitle-bottom" style={{ color: tituloPrincipal }}>
          200,000 Registros
        </h2>
      </header>

      {/* --- 2. Descripción --- */}
      <p className="registros-intro" style={{ color: colortexto }}>
        Me encontré con un desafío para <strong style={{ color: highlightGem }}>el equipo de la Gobernadora del Estado de México</strong> y la <strong style={{ color: highlightSma }}>Secretaría del Medio Ambiente</strong>: un equipo de 5 personas intentaba capturar manualmente 200,000
        registros de Excel en una plataforma web, con una fecha límite de dos semanas que era imposible de cumplir.
      </p>

      {/* --- 3. Métricas (KPIs) --- */}
      <div className="registros-kpi-container">
        
        <div className="kpi-card" style={{ color: colortexto }}>
          <span className="kpi-number">200,000+</span>
          <span className="kpi-label">Registros migrados.</span>
        </div>
        
        <div className="kpi-card" style={{ color: colortexto }}>
          <span className="kpi-number">-70%</span>
          <span className="kpi-label">Tiempo reducido.</span>
        </div>

        <div className="kpi-card" style={{ color: colortexto }}>
          <span className="kpi-number">5 Personas</span>
          <span className="kpi-label">Equipo desbloqueado.</span>
        </div>

        <div className="kpi-card" style={{ color: colortexto }}>
          <span className="kpi-number">Selenium</span>
          <span className="kpi-label">Tecnología clave.</span>
        </div>

      </div>
      
      {/* --- Aquí continuará el resto de tu maquetación --- */}
        {/* --- 4. La Restricción (Texto Izquierda, Imagen Derecha) --- */}
      <div className="registros-row restriccion-row">
        <div className="registros-text-col">
          <h3 className="registros-section-title" style={{ color: tituloPrincipal }}>
            La restricción
          </h3>
          <p className="registros-section-text" style={{ color: colortexto }}>
            Por motivos de seguridad, no se me otorgó acceso a la base de datos para una ingesta directa. La solución debía operar del lado del cliente.
          </p>
        </div>
        <div className="registros-image-col">
           <img 
              src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2FGemini_Generated_Image_mrzsysmrzsysmrzs%201.png?alt=media&token=749c79a0-b4f4-4c72-afcf-2491714fca9d" 
              alt="Diagrama de restricción de acceso a base de datos" 
              className="registros-diagram-image" 
            /> 
        </div>
      </div>

      {/* --- 5. La Solución (Imagen Izquierda, Texto Derecha) --- */}
      <div className="registros-row solucion-row">
        <div className="registros-image-col">
          {/* --- Placeholder para la imagen de "Solución" --- */}
          <img 
              src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2FSolucion.png?alt=media&token=1d73a835-f48b-483e-8ee2-cc7973cd8884" 
              alt="Diagrama de automatización RPA con Selenium" 
              className="registros-diagram-image" 
            /> 
          {/* --- Placeholder para la Captura de Pantalla --- */}
           <img 
              src="https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Registros%2FSS.png?alt=media&token=b1e4e4c9-4624-4a80-8d7a-e415eb719fed" 
              alt="Captura de la interfaz de la aplicación" 
              className="registros-screenshot-image" 
            /> 
        </div>
        <div className="registros-text-col">
          <h3 className="registros-section-title" style={{ color: tituloPrincipal }}>
            La solución
          </h3>
          <p className="registros-section-text" style={{ color: colortexto }}>
            Desarrollé una herramienta de automatización usando Selenium en Python con 4 funciones:
          </p>
          <ul className="registros-solution-list" style={{ color: colortexto }}>
            <li><strong>Extracción:</strong> El script leía el archivo Excel (.xlsx) fila por fila.</li>
            <li><strong>Casteo:</strong> Limpiaba y formateaba los datos para que coincidieran con los campos del formulario.</li>
            <li><strong>Automatización:</strong> Navegaba el DOM de la plataforma web, llenaba los inputs y enviaba el formulario, simulando la captura humana.</li>
            <li><strong>Entrega:</strong> Empaqueté el Script como un ejecutable (.exe) con una interfaz gráfica simple, permitiendo que el equipo lo instalara y ejecutara en sus propias máquinas.</li>
          </ul>
        </div>
      </div>

      {/* --- 6. El Resultado (Texto Arriba, Gráfico Abajo) --- */}
      <div className="registros-row resultado-row">
        <div className="registros-text-col full-width">
          <h3 className="registros-section-title" style={{ color: tituloPrincipal }}>
            El resultado
          </h3>
          <p className="registros-section-text" style={{ color: colortexto }}>
            La implementación de la herramienta RPA fue decisiva. El equipo de la Secretaría no solo cumplió la fecha límite, sino que finalizó la carga de 200,000 registros en 4 días. La automatización eliminó el riesgo de error humano en la captura y liberó al equipo de una tarea manual intensiva, rescatando un proyecto de alto impacto.
          </p>
        </div>
        <div className="registros-image-col full-width">
           {/* --- Placeholder para el Gráfico --- */}
             <img 
              src={resultado} 
              alt="Gráfico de Registros vs Tiempo" 
              className="registros-graph-image" 
            />
        </div>
      </div>
    </section>
  );
}