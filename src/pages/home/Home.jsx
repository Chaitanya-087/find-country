import React,{useState} from 'react'
import Search from '../../components/search/Search'
import useSearchCountry from '../../helpers/useSearchCountry';
import Card from '../../components/card/Card';
import './home.css'

const Home = () => {
    const [region,setRegion] = useState('all')
    const [countryName,setCountryName] = useState('')
    const {countriesFiltered} = useSearchCountry(region,countryName);
    const searchParams = {
      region,
      setRegion,
      countryName,
      setCountryName
    }
  return (
    <div className='home'>
      <Search searchParams = {searchParams} />
      <div className='cards-grid'>
        {countriesFiltered.map((country,index) => {
          return <Card key={index} country={country} />
        })}
      </div>
    </div>
  )
}

export default Home