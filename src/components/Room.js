import React from 'react'
import { Link } from 'react-router-dom'
import defaultImg from '../images/room-1.jpeg'
import PropTypes from 'prop-types'


export default function Room({room}) {
  const {name,slug,images,price} = room;

  return (
    <article className="room">
      <div className="img-container">
        <div className="price-top">
          <h6>${price}</h6>
          <p>Per night</p>
        </div>
        <img src={images[0] || defaultImg} alt={name}/>
        <Link to={`/rooms/${slug}`} className="room-link btn-primary">page </Link>
        <div className="room-info">{name}</div>
      </div>
    </article>
  )
}

Room.propTypes = {
  room:PropTypes.shape({
    name:PropTypes.string.isRequired,
    slug:PropTypes.string.isRequired,
    images:PropTypes.arrayOf(PropTypes.string).isRequired,
    price:PropTypes.number.isRequired      
  })
}