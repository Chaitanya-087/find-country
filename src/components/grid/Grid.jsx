import React from 'react'
import './grid.css'
import Card from '../card/Card'
import CircularProgress from '@mui/material/CircularProgress';

const Grid = ({data,loading}) => {
  return (loading ? <div className="loading-icon"><CircularProgress /></div> : 
    <div className='cards-grid'>
      {
        data.map((country, index) => {
          return (
            <Card key={index} country={country} />
          )
        })
      }
    </div>
  )
}

export default Grid