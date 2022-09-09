import React, { useState } from 'react'
import Search from '../../components/search/Search'
import useSearchCountry from '../../helpers/useSearchCountry';
import CircularProgress from '@mui/material/CircularProgress';
import Card from '../../components/card/Card';
import {Link} from 'react-router-dom'
import './home.css'

const Home = () => {

  const [region, setRegion] = useState('all')
  const [countryName, setCountryName] = useState('')
  const { countriesFiltered, isLoading,setLoading} = useSearchCountry(region, countryName);
  const [showSome, setShowSome] = useState(8)
  let displayCountries = countriesFiltered.slice(0, showSome)

  const searchParams = {
    region,
    setRegion,
    countryName,
    setCountryName
  }

  const fetchMore = () => {
    setLoading(true)
    setTimeout(() => {
      setShowSome(showSome + 8)
      displayCountries = [...displayCountries, ...countriesFiltered.slice(showSome - 8, showSome)]
      setLoading(false)
    }, 1000)
  }

  window.onscroll = () => {
    if ((window.innerHeight + Math.round(document.documentElement.scrollTop) + 200 >= document.documentElement.offsetHeight) && ( showSome < countriesFiltered.length)) {
      fetchMore()
    }
    else return
  }

  return (
    <div className='container home'>
      <Search searchParams={searchParams} />
      <div className='cards-grid' data-loading={isLoading}>
        {displayCountries.map((country, index) => {
          return <Link key={index} to={`/find-country/${country.name.common}`}>
                  <Card country={country} />
                 </Link>
        })}
      </div>
        {isLoading && <CircularProgress className='loading-icon' />}
    </div>
  )
}

export default Home