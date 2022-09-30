import React from 'react'
import css from '../styles/components.module.css';
import Card from './Card';
import CrazyLoader from './CrazyLoader';
// import {motion} from 'framer-motion';

const Grid = ({ countries, loading }) => {
  return (
    <>
      {loading ? <CrazyLoader loading={loading} /> : countries.length > 0 ?
        <div className={css.grid}>
          {
            countries.map((country, index) => <Card key={index} country={country} />)
          }
        </div> : <h2>Country not found!!</h2>
      }
    </>
  )
}

export default Grid
