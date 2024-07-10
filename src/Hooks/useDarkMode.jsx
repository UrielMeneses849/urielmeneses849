import { useContext } from "react";
import { DarkModeContext } from "../Componentes/DarkModeContext";

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
  
    return context;
  }