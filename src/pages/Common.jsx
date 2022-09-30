import Search from '../components/Search';
import { useEffect, useState,useRef } from 'react'
import css from '../styles/pages.module.css'
import { useLocation } from 'react-router-dom'
import GoTop from '../components/GoTop';
import Grid from '../components/Grid';
import { useMemo } from 'react';

const Common = ({ type }) => {
    const location = useLocation()
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countryName, setCountryName] = useState('');
    const once = useRef(false)
    let url = ''
    switch(type) {
        case 'region' : url = `https://restcountries.com/v3.1${location.pathname}`; break
        default: url = 'https://restcountries.com/v3.1/all'
    }

    useEffect(() => {
        window.scrollTo({top:0,behavior:'smooth'})
        if (once.current) {
            setLoading(true)
            const getCountries = async () => {
                try {
                    const res = await fetch(url)
                    const data = await res.json()
                    setCountries(data)
    
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
            new AbortController()
        }
    }, [url])

   const Filteredata = useMemo(() => {
        if (countryName === '') return countries
        return countries.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()))
   },[countryName,countries]) 
   
    return (
     
        <div className={css.container}>
            <Search setCountryName={setCountryName} />
            <Grid countries={Filteredata} loading={loading} />
            <GoTop />
        </div>
    )
}

export default Common