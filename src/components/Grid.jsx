import React from 'react'
import css from '../styles/components.module.css';
import Card  from './Card';
import CrazyLoader from './CrazyLoader';

const Grid = ({countries,loading}) => {
  return (
    <>
    {loading ? <CrazyLoader loading={loading} /> : 
                <div className={css.grid}>
                    {
                        countries.map((country, index) => <Card key={index} country={country} />)
                    }
                </div>
            }
    </>
  )
}

export default Grid
