import React from 'react'

function Card({imgUrl,title,description}) {
  return (
    
      <>
      <div className='card'>
        <img src={imgUrl}  />
        <div className='card-content'>
            <h2 className='card-title'>{title}</h2>
            <p className='card-description'>{description}</p>
        </div>
      </div>
      </>
    
  )
}

export default Card
