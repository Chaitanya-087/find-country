import React from 'react'
import css from '../styles/components.module.css';
import PacmanLoader from 'react-spinners/PacmanLoader';
import Card  from './Card';

const Grid = ({countries,loading}) => {
  return (
    <>
    {loading ? <div className={css.loading__icon}>
                <PacmanLoader loading={loading} color={'#10b5fc'} size={15}/>
            </div> :
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
