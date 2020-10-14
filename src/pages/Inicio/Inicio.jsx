import React from 'react'
import { CopyBlock, dracula } from "react-code-blocks";
import Data from '../../data/data.json'
import {htmlComponent} from '../../data/datacode'
const{inicio} = Data


export const Inicio = () => {
    return (
    
        <>
         <div className="container">
              <div className="row">
                   <h1>{inicio.titulo}</h1>
              </div>
              <div className="row">
                   <p>{inicio.explicacion}</p>
              </div>

              <div className="row">
                  <div className="col"><p>{inicio.declarativo}</p></div>
                  <div className="col"><p>{inicio.basadoComponentes}</p></div>
                   
              </div>
        </div>
        <div className="container">
    <div className="row">
       <div className="col"><h1>{inicio.jsxTitulo}</h1></div>        
    </div>
    <div className="row">
       <div className="col"><p>{inicio.explicacionjsx}</p></div>        
    </div>
    <div className="row">
       <div className="col"><p>{inicio.explicacionjsx2}</p></div>        
    </div>
    <div className="row">
       <div className="col"><p>{inicio.ejemplojsx}</p></div>        
    </div>
    <div className="container">
       <div className="row"><p>{inicio.ejemplojsx2}</p></div>   
       <div className="row"><p>{inicio.ejemplojsx3}</p></div>     
    </div>

        </div>
        <div className="container">
                   
        <CopyBlock
            text={htmlComponent}
            language='jsx'
            theme={dracula}
            showLineNumbers={true}
            wrapLines={true}
            codeBlock
            />
           
           
        </div>

        </>
            
           

         
     
            
    
        
    
    )
}

