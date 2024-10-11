import React from 'react'
import './Button.css';

export default function button({ text, onClick }) {
  return (
    <button className="custom-button" onClick={onClick}>{text}</button>
  )
}
