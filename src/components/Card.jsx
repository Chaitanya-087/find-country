import React from 'react';
import css from '../styles/components.module.css';
import { Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Card = ({ country }) => {
  return (
    <div className={css.card}>
      <div className={css.image__container}><img className={css.country__flag} src={country.flags.png} alt={`${country}`} /></div>
      <div className={css.country__desc}>
        <Link to={`/name/${country.name.common}`} className={css.country__name}>
          {country.name.common}
          <ChevronRightIcon />
        </Link>
        <p className={css.country__population}>Population: <span className={css.oppa}>{country.population.toLocaleString()}</span></p>
        <p className={css.country__region}>Region: <span className={css.oppa}>{country.region}</span></p>
        <p className={css.country__capital}>Capital: <span className={css.oppa}>{country.capital}</span></p>
      </div>
    </div>
  )
}

export default Card