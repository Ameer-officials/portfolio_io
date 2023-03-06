import React from 'react'
import './work.css'

const Plot = ({name  , icon , tag , detail}) => {
  return (
    <div className={name} >
        <div className="work-link">

        <span>{icon}</span>
        <h4>{tag}</h4>
        <p>{detail}</p>
       </div>

    </div>
  )
}

export default Plot
