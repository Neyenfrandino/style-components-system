
import { useState } from 'react';
import CodeEditorWindow from '../code-editor-window/code-editor-window.component'

import './bento.style.scss'

const Bento = ({ component, codeComponent, uniqueId }) => {

    const [ currentColor, setCurrentColor ] = useState({})

    let code = `${codeComponent}`

    const handleOnChange = (e) => {
        const { id, value } = e.target;
        
        setCurrentColor(prevState => ({
            ...prevState,
            [id]: value
        }));
    }
    
    return(
        <div className='container'>
            
            <div className='container__component' style={currentColor[uniqueId] ? { backgroundColor: currentColor[uniqueId] } : null}>
                <div className='component'>
                    { component }
                </div>

                <div className="container__component__color-picker-section">
                    <label htmlFor={uniqueId}>Contrast background color: </label>
                    <input type="color" id={`${uniqueId}`} onChange={(event)=>{
                        handleOnChange(event)
                    }} />
                </div>

            </div>

            <div className='container__component--large'>
                <CodeEditorWindow code={code} language={'React'} />
            </div>


        </div>
    )
}

export default Bento