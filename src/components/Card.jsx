import React from 'react'


const Card = ({img,name,detail}) => {
  return (
    <div className="card">
      <img src={img} />
      <h2>{name}
      </h2>
      <p>{detail}</p>
    </div>
  )
}

export default Card
