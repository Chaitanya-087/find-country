import React from 'react'
import css from '../styles/components.module.css';
import PacmanLoader from 'react-spinners/PacmanLoader';

const CrazyLoader = ({loading}) => {
  return (
    <div className={css.loading__icon}>
    <PacmanLoader loading={loading} color={'#10b5fc'} size={15}/>
</div>
  )
}

export default CrazyLoader
