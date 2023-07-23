import React from 'react'
import images from '../constants/images'
export default function usableProp( props ) {
    const { title, description, buttonText } = props;

  return (
    <div>
        <span>Chase the new Flavour</span><br />
        <img src={images.spoon} alt="spoon" />
        <h1>{ title }</h1>
        <p>{ description }</p>
             <button>{ buttonText }</button>
    </div>
  )
}
