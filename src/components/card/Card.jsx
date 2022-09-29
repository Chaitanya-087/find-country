import React from 'react'
import './card.css'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

const Card = ({ country }) => {
  return (
      <div className='card'>
        <div className='image__container'><img className='country__flag' loading='lazy' src={country.flags.png} alt={`${country}`} /></div>
        <div className='country__desc'>
          <span className='country__name'>{country.name.common}</span>
          <p className='country__population'>Population: <span className='oppa'>{country.population.toLocaleString()}</span></p>
          <p className='country__region'>Region: <span className='oppa'>{country.region}</span></p>
          <p className='country__capital'>Capital: <span className='oppa'>{country.capital}</span></p>
        </div>
        <Link to={`/name/${country.name.common}`} className='moreinfo-btn'>
          <IconButton>
              <KeyboardDoubleArrowRightIcon />
          </IconButton>
        </Link>
      </div>
  )
}

export default Card