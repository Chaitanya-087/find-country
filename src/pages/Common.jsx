import Search from '../components/Search';
import { useEffect, useState,useRef } from 'react'
import css from '../styles/pages.module.css'
import { useLocation } from 'react-router-dom'
import GoTop from '../components/GoTop';
import Grid from '../components/Grid';
// import { useMemo } from 'react';

const Common = ({ type }) => {
    const location = useLocation()
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([])
    const [loading, setLoading] = useState(true);

    const once = useRef(false)

    let url = ''
    switch(type) {
        case 'region' : url = `https://restcountries.com/v3.1${location.pathname}`; break
        default: url = 'https://restcountries.com/v3.1/all'
    }

    useEffect(() => {
        if (once.current) {
            setLoading(true)
            const getCountries = async () => {
                try {
                    const res = await fetch(url)
                    const data = await res.json()
                    setCountries(data)
                    setFilteredCountries(data)
    
                } catch(err) {
                    console.error(err)
                } finally {
                    setLoading(false)
                }
            }
            getCountries();
        }
        return  () => {
            once.current = true
            setCountries([])
            new AbortController()
        }
    }, [url])

//    const Filteredata = useMemo(() => {
//         if (countryName === '') return countries
//         return countries.filter(country => country.name?.common.toLowerCase().includes(countryName.toLowerCase()))
//    },[countryName,countries]) 

    return (
     
        <div className={css.container}>
            <Search countries={countries} setFilteredCountries={setFilteredCountries}/>
            <Grid countries={filteredCountries} loading={loading} />
            <GoTop />
        </div>
    )
}

export default Common