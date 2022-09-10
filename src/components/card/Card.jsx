import React from 'react'
import './card.css'
import { useTheme } from '../../helpers/useTheme';

const Card = ({country}) => {
    const {changeTheme} = useTheme();
  return (
    <div className='card' style={{backgroundColor:changeTheme('element')}}>
      <div className='image__container'><img className='country__flag' src={country.flags.png} alt={`${country}`}/></div>
      <div className='country__desc'>
        <span className='country__name'>{country.name.common}</span>
        <p className='country__population'>Population: <span className='oppa'>{country.population.toLocaleString()}</span></p>
        <p className='country__region'>Region: <span className='oppa'>{country.region}</span></p>
        <p className='country__capital'>Capital: <span className='oppa'>{country.capital}</span></p>
      </div>
    </div>
  )
}

export default Card
