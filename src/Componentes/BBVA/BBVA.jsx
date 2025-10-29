import './BBVA.css';
import { useDarkMode } from "../../Hooks/useDarkMode"; 

// --- Rutas de tus imágenes (asegúrate de que estas URLs sean correctas o impórtalas localmente) ---
// Imágenes para el modo LIGHT
const imgCaosLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGemini_Generated_Image_eawpq8eawpq8eawp%201.png?alt=media&token=48d3deac-17fc-4ac9-822c-72adae3cf517";
const imgPipelineLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGemini_Generated_Image_b0gsp3b0gsp3b0gs%201.png?alt=media&token=373a739a-b696-45ef-a1dd-1fb58197c4cc";

// Imágenes para el modo DARK (con fondo #494949 y elementos en blanco)
const imgCaosDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGemini_Generated_Image_kuh94ckuh94ckuh9%20(2).png?alt=media&token=c136c289-4bc0-414d-8ce5-3e0eaf8fd4b3";
const imgPipelineDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FGemini_Generated_Image_kuh94ckuh94ckuh9%20(1)%201.png?alt=media&token=52139720-6824-4f60-ac1e-e7695aeb8f0c";

// --- PLACEHOLDERS para tus logos (AJUSTA ESTAS RUTAS) ---
// Puedes tener versiones light/dark para cada logo si sus colores cambian significativamente
const logoJupyterLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fjupyter-seeklogo%201.svg?alt=media&token=e81abff8-ab8a-40cb-8868-6e94a35e273c"; // Placeholder
const logoPythonLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FPython-logo-notext%201.svg?alt=media&token=26dbc6fb-e17b-4e90-80b1-5f09fe90aae9";   // Placeholder
const logoIJLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FIntelliJ_IDEA_Icon.svg?alt=media&token=32fa3490-1146-453a-9398-a17b45088c13";         // Placeholder (IntelliJ o similar)
const logoPCLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FPyCharm_Icon.svg?alt=media&token=e3162fb3-ca76-495f-8fa4-fc8fbf9da4e4";         // Placeholder (PC o IDE)
const logoAWSLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FAmazon_Web_Services_Logo.svg?alt=media&token=38104fc4-864f-4092-be5f-c3d76f3b886e";       // Placeholder
const logoScalaLight = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FScala-full-color%201.svg?alt=media&token=69509159-5131-46f5-993a-989f1dcd7d40";   // Placeholder


const logoJupyterDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2Fjupyter-seeklogo%202.svg?alt=media&token=55b4e2e0-e376-4cc2-bb00-1d3ec4c69f08"; // Placeholder Dark
const logoPythonDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FPython-logo-notext%201.svg?alt=media&token=26dbc6fb-e17b-4e90-80b1-5f09fe90aae9";   // Placeholder Dark
const logoIJDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FIntelliJ_IDEA_Icon.svg?alt=media&token=32fa3490-1146-453a-9398-a17b45088c13";         // Placeholder Dark
const logoPCDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FPyCharm_Icon.svg?alt=media&token=e3162fb3-ca76-495f-8fa4-fc8fbf9da4e4";         // Placeholder Dark
const logoAWSDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Iconos%2FAmazon_Web_Services_Logo%202.svg?alt=media&token=ebcf4b1c-3f36-45a9-bbb2-bd0a2f54736a";       // Placeholder Dark
const logoScalaDark = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/BBVA%2FScala-full-color%201%20(1).svg?alt=media&token=7fb02d0e-222f-4d66-bae4-ba5a1c305d4b";   // Placeholder Dark



export default function BBVA() {
  
  const { darkMode } = useDarkMode();
  const colortexto = darkMode ? '#fff' : '#333';
  const fondoCard = darkMode ? `#4D4D4D` : `#fff`; 
  const titulos = darkMode ? '#A8D8FF' : '#022169';

  // Selecciona las imágenes de tarjetas basadas en el modo
  const currentImgCaos = darkMode ? imgCaosDark : imgCaosLight;
  const currentImgPipeline = darkMode ? imgPipelineDark : imgPipelineLight;

  // Selecciona los logos basados en el modo
  const currentLogoJupyter = darkMode ? logoJupyterDark : logoJupyterLight;
  const currentLogoPython = darkMode ? logoPythonDark : logoPythonLight;
  const currentLogoIJ = darkMode ? logoIJDark : logoIJLight;
  const currentLogoPC = darkMode ? logoPCDark : logoPCLight;
  const currentLogoAWS = darkMode ? logoAWSDark : logoAWSLight;
  const currentLogoScala = darkMode ? logoScalaDark : logoScalaLight;

  return (
    <section className={`bbva-work-section ${darkMode ? 'dark-mode' : ''}`}>
      
      {/* Sección Superior: Título y Tarjetas */}
      <header className="bbva-work__header">
        <h1 className="bbva-work__title" style={{ color: `${titulos}` }}>Mi trabajo en BBVA</h1>
        <p className="bbva-work__intro" style={{ color: `${colortexto}` }}>
          En Seguros BBVA, mi misión es encontrar las respuestas que los datos esconden para proteger lo que más importa. Más allá del código, mi trabajo consiste en resolver problemas reales: ¿Cómo podemos anticiparnos a un fraude? ¿Cómo podemos hacer que una PyME contrate nuestro seguro? 
          <strong style={{ color: `${colortexto}` }}> Uso la ciencia de datos para responder a estas preguntas.</strong>
        </p>
      </header>

      <div className="bbva-work__cards-container">
        <article className="bbva-work-card" style={{backgroundColor: `${fondoCard}`}}>
          <h2 className="bbva-work-card__title" style={{ color: `${titulos}` }}>Transformando el Caos de Datos en Valor</h2>
          <div className="bbva-work-card__body">
            <p className="bbva-work-card__description" style={{ color: `${colortexto}` }}>
              Mi proceso transforma la aparente anarquía de la información en estructuras lógicas y entendibles
            </p>
            <img 
              src={currentImgCaos} 
              alt="Diagrama de caos a orden" 
              className="bbva-work-card__image" 
            />
          </div>
        </article>

        <article className="bbva-work-card" style={{backgroundColor: `${fondoCard}`}}>
          <h2 className="bbva-work-card__title" style={{ color: `${titulos}` }}>Del Dato Crudo a la Decisión Inteligente</h2>
          <div className="bbva-work-card__body">
            <p className="bbva-work-card__description" style={{ color: `${colortexto}` }}>
              Mi expertise reside en orquestar el ciclo de la data. Desde la extracción de fuentes diversas hasta el modelado y análisis.
            </p>
            <img 
              src={currentImgPipeline} 
              alt="Diagrama de pipeline de datos" 
              className="bbva-work-card__image" 
            />
          </div>
        </article>
      </div>

      {/* --- NUEVA SECCIÓN: Giro de Carrera y Superpoderes --- */}
      <div className="bbva-career-pivot-section">

      <div className='bbva-career-text-block'>
        <p className="bbva-career-pivot__intro" style={{ color: `${colortexto}` }}>
          Hace un año di un giro a mi carrera, <br />
          <strong style={{ color: `${colortexto}` }}>pasé del diseño y desarrollo web a la ciencia de datos en BBVA.</strong> <br />
          Hoy, combino <span className="underline">mi visión creativa</span> con la <span className="underline">lógica analítica</span> para transformar datos en soluciones.
        </p>

        <p className="bbva-career-pivot__philosophy" style={{ color: `${colortexto}` }}>
          convencido de que <strong style={{ color: `${titulos}` }}>la pasión por aprender es la mejor herramienta para evolucionar profesionalmente.</strong>
        </p>
      </div>

        {/* Contenedor de los superpoderes con los logos girando */}
        <div className="superpowers-container">
          <div className="superpowers-circle">
            <span className="superpowers-text" style={{ color: `${colortexto}` }}>Mis nuevos superpoderes</span>
            
            {/* Logos que giran. Posición basada en los grados del círculo */}
            <div className="superpower-logo logo-jupyter">
                <img src={currentLogoJupyter} alt="Jupyter Logo" />
            </div>
            <div className="superpower-logo logo-python" >
                <img src={currentLogoPython} alt="Python Logo" />
            </div>
            <div className="superpower-logo logo-ij" >
                <img src={currentLogoIJ} alt="IntelliJ IDEA Logo" />
            </div>
            <div className="superpower-logo logo-pc">
                <img src={currentLogoPC} alt="PC Logo" />
            </div>
            <div className="superpower-logo logo-aws" >
                <img src={currentLogoAWS} alt="AWS Logo" />
            </div>
            <div className="superpower-logo logo-scala" >
                <img src={currentLogoScala} alt="Scala Logo" />
            </div>
          </div>
          {/* Aquí podrías añadir un segundo círculo si quieres más logos */}
        </div>
      </div>

      {/* --- INICIO DE LA NUEVA SECCIÓN: Experiencia --- */}
      <div className="bbva-experience-section">
        <h2 className="bbva-experience__title" style={{ color: `${titulos}` }}>
          Experiencia
        </h2>
        <p className="bbva-experience__subtitle" style={{ color: `${colortexto}` }}>
          Dentro del banco he participado en diversos proyectos cada uno con propositos diferentes.
        </p>
      
        <div className="bbva-experience__cards-container">
          
          {/* Card 1: Seguros PyME */}
          <article className="bbva-experience-card" style={{ backgroundColor: `${fondoCard}` }}>
            <span className="bbva-experience-card__dot dot-pyme"></span>
            <h3 className="bbva-experience-card__title" style={{ color: `${titulos}` }}>
              Seguros PyME
            </h3>
            <p className="bbva-experience-card__description" style={{ color: `${colortexto}` }}>
              Gestión y resolución de deuda técnica en una plataforma de análisis de <strong style={{ color: `${colortexto}` }}>seguros PyME</strong> (multi-banca), resultando en reducción de errores ya que el desarrollo no encontraba todas las polizas que requerian los stakeholder.
            </p>
          </article>
      
          {/* Card 2: Antifraudes */}
          <article className="bbva-experience-card" style={{ backgroundColor: `${fondoCard}` }}>
            <span className="bbva-experience-card__dot dot-antifraud"></span>
            <h3 className="bbva-experience-card__title" style={{ color: `${titulos}` }}>
              Antifraudes en seguros
            </h3>
            <p className="bbva-experience-card__description" style={{ color: `${colortexto}` }}>
              Diseño e implementación de un <strong style={{ color: `${colortexto}` }}>motor de reglas para la detección de fraude</strong> en seguros de automóviles, enfocado en la identificación de patrones de fraude prematuro, recurrente y de listas negras.
            </p>
          </article>
      
          {/* Card 3: Gobernanza */}
          <article className="bbva-experience-card" style={{ backgroundColor: `${fondoCard}` }}>
            <span className="bbva-experience-card__dot dot-governance"></span>
            <h3 className="bbva-experience-card__title" style={{ color: `${titulos}` }}>
              Gobernanza y Migración de Datos
            </h3>
            <p className="bbva-experience-card__description" style={{ color: `${colortexto}` }}>
              Definición del linaje de datos entre <strong style={{ color: `${colortexto}` }}>sistemas legacy y plataformas next-gen</strong>, creando el diccionario de datos y la documentación esencial para la estrategia de migración.
            </p>
          </article>
      
        </div>
      
        <p className="bbva-experience__more" style={{ color: `${colortexto}` }}>
          Y más...
        </p>
      </div>
      {/* --- FIN DE LA NUEVA SECCIÓN: Experiencia --- */}
    </section>
  );
}