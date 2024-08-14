
import { Skeleton } from '@chakra-ui/react';
import './ImageStack.css';
import LazyLoad from 'react-lazyload';
import { useState } from 'react';

const ImageStack = () => {
    const [isLoading, setIsLoading] = useState(true);
    const Dashboard = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Proyectos%20Front%2FFrame-1000002514%20(1).webp?alt=media&token=991de07d-9370-497c-ab29-b382635f71cc"
    const imagen1 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Proyectos%20Front%2FSS%201.png?alt=media&token=a62de68a-c238-441f-ab1b-730fb27b556f"
    const imagen2 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Proyectos%20Front%2FCaptura%20de%20pantalla%202024-08-12%20a%20la(s)%2022.34.01%201.png?alt=media&token=c5904c5f-8c6a-4c2f-ac69-d2095183a876"
    const imagen3 = "https://firebasestorage.googleapis.com/v0/b/portafolio-3302a.appspot.com/o/Proyectos%20Front%2FCaptura%20de%20pantalla%202024-08-12%20a%20la(s)%2022.34.01%204.png?alt=media&token=26aa9626-4f70-46a6-87f9-aeb440bf756c"
    
    return (
        <>
    <div className="image-container">
    
     {/* Skeleton visible mientras la imagen carga */}
     {isLoading && (
        <Skeleton height="400px" width="80%" borderRadius="20px" />
      )}
      
      <div className="image-container">
        {/* Imágenes con LazyLoad */}
        <LazyLoad offset={500} height={500} style={{ justifyContent: "center", display: "flex" }}>
          <img 
            src={imagen1} 
            alt="Imagen 1" 
            className="image2 img-left" 
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={() => setIsLoading(false)} // Quitar el Skeleton cuando la imagen se carga
          />
        </LazyLoad>
        <LazyLoad offset={500} height={500} style={{ justifyContent: "center", display: "flex" }}>
          <img 
            src={imagen2} 
            alt="Imagen 2" 
            className="image img-middle" 
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={() => setIsLoading(false)} // Quitar el Skeleton cuando la imagen se carga
          />
        </LazyLoad>
        <LazyLoad offset={500} height={500} style={{ justifyContent: "center", display: "flex" }}>
          <img 
            src={imagen3} 
            alt="Imagen 3" 
            className="image3 img-right" 
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={() => setIsLoading(false)} // Quitar el Skeleton cuando la imagen se carga
          />
        </LazyLoad>
      </div>


    </div>
    <LazyLoad offset={500} height={500} style={{ justifyContent: "center", display: "flex" }} className='Mobile'>
      <img src={Dashboard} alt="" className='Mobile'/>
    </LazyLoad>
    </>
  );
};

export default ImageStack;
