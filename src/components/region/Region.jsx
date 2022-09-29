import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Grid from '../grid/Grid';
import Container from '../container/Container';
import Search from '../search/Search';

const Region = () => {
    const { region } = useParams()
    const [countries,setCountries] = useState([])
    const [loading,setLoading] = useState(false)
    const [countryName,setCountryName] = useState('')

    useEffect(() => {
        setLoading(true)
        const getCountries = () => {
            fetch(`https://restcountries.com/v3.1/region/${region}`).then((res) => res.json()).then(data => {
                setLoading(false)
                setCountries(data);
            });
        }
        getCountries();
    }, [region])

    const SearchCountries = (data) => {
        if (countryName === '') {
          return data
        } else {
          return data.filter((country) => {
            return country.name.common.toLowerCase().startsWith(countryName.toLowerCase())
          })
        }
      }
    
    return (
        <Container>
            <Search setCountryName={setCountryName}/>
            <Grid data={SearchCountries(countries)} loading={loading} />
        </Container>
    )
}

export default Region