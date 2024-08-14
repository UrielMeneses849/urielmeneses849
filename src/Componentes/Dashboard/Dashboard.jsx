import './Dashboard.css'
import { Heading, Text, Link } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'
import Imagenes from './Imagenes'

export default function Dashboard(){

    
return(
<div className='Container__Dashboard'>
<Heading 
  as='h2' 
  fontSize={{ base: "2xl", md: "3xl", lg: "5xl" }} // Tamaño diferente según el dispositivo
  noOfLines={{base: 3, md: 3}} // Número de líneas
  w={{base: "90%", md: "80%", lg: "70%"}} // Ancho
  textAlign="center" 
  fontFamily="poppins" 
  m="3% auto" 
  zIndex="100"
>
  Demostración de mi destreza en Frontend UI
</Heading>


{/* Contenedor para el Skeleton y la imagen */}
    <div style={{ width: '100%', margin: "2% auto", display: "flex", justifyContent: "center"}}>
      
      </div>
      <Imagenes />


      <Button 
        colorScheme='teal' 
        size='lg' 
        bg="#997CE3" 
        as={Link} 
        href="https://urielmeneses849.github.io/Dashboard/" 
        target='_blank' 
        borderRadius="15px" 
        w={{ base: "50%", lg: "10%" }}
        _hover={{ 
            bg: "#7C61C0", // Un color más oscuro
            transform: "scale(1.05)", // Aumenta ligeramente el tamaño
            transition: "all 0.3s ease-in-out", // Transición suave
            textDecoration: "none" // Sin subrayado
        }}
        >
        Visitar
        </Button>

<Text fontSize={{base: 'md', md: 'xl'}} fontFamily="poppins" w="80%" m={{base: "10% auto" , lg: "3% auto" }}> A través de estos proyectos,<b> demuestro mi capacidad para diseñar y desarrollar interfaces de usuario intuitivas y atractivas. </b>
   </Text>

</div>
)}

// Cada proyecto refleja una atención meticulosa al detalle, una comprensión profunda de la experiencia del usuario y una destreza técnica en Frontend.