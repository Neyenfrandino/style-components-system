//Esto no representa los botones ni los estilos para que podamos reutilizarlos. Aqui solo lo estamos representado elegantemente en un pag.
//El codigo podemos obtenerlos de los componentes.
import { ButtonVersionOne } from "../../components/buttons/buttons.components"
import Bento from "../../components/bento/bento.component"
// import './buttons-routes-styles.scss'

const BottonsRoutes = () =>{

    const code = 
    `
    import './button.style.scss';

    const BUTTON_TYPE_CLASSES ={
        google: 'google-sign-in',
        inverted: 'inverted'
    }
    const Button = ({ children, buttonType, ...otherProps }) => {
        return(
            <button className={\`button-container \${BUTTON_TYPE_CLASSES[buttonType]}\`} {...otherProps} >
                {children}
            </button>
        )
    }
    
    export default Button;


    Styles :
    
    .button-container {
        min-width: 165px;
        width: auto;
        height: 50px;
        letter-spacing: 0.5px;
        line-height: 50px;
        padding: 0 35px 0 35px;
        font-size: 15px;
        background-color: black;
        color: white;
        text-transform: uppercase;
        font-family: 'Open Sans Condensed';
        // font-weight: bolder;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        margin-right: 20px;
        
      
        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: black;
          border: 1px solid black;
        }
      
        &.google-sign-in {
          background-color: #4285f4;
          color: white;
      
          &:hover {
            background-color: #357ae8;
            border: none;
          }
        }
      
        &.inverted {
          background-color: rgba(242, 242, 242, 0.1);
          color: black;
          border: 1px solid black;
          
      
          &:hover {
            background-color: black;
            color: white;
            border: none;
          }
        }
      }


    //Este componente Button es un botón reutilizable en 
    React que acepta diferentes tipos (buttonType) para aplicar 
    diferentes estilos de clase CSS. Utiliza un objeto 
    BUTTON_TYPE_CLASSES para asignar clases específicas a cada tipo 
    de botón, como "google" o "inverted". Luego, en la clase del 
    botón, concatena la clase base "button-container" con 
    la clase correspondiente al tipo de botón seleccionado, 
    permitiendo así cambiar el estilo del botón según el tipo 
    especificado. Por ejemplo, si buttonType es "google", 
    el botón tendrá la clase "button-container google-sign-in".
    `;

    return(
       <>
        <Bento component={ <ButtonVersionOne>Hola mundo</ButtonVersionOne> } codeComponent={code} uniqueId={'color1'}/>
       </>
      
    )
}

export default BottonsRoutes