import React from 'react'
import './Card.css';

export default function Card({ name, desc, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <h2>{name}</h2>
      <p>{desc}</p>
    </div>
  )
}
