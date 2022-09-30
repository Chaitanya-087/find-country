import Search from '../components/Search';
import { useEffect, useState } from 'react'
import css from '../styles/pages.module.css'
import { useLocation } from 'react-router-dom'
import GoTop from '../components/GoTop';
import Grid from '../components/Grid';

const Common = ({ type }) => {
    const location = useLocation()
    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countryName, setCountryName] = useState('');

    let url = ''
    switch(type) {
        case 'region' : url = `https://restcountries.com/v3.1${location.pathname}`; break
        default: url = 'https://restcountries.com/v3.1/all'
    }

    useEffect(() => {
        window.scrollTo({top:0,behavior:'smooth'})
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
    }, [url])

    const SearchCountries = data => {
                 return data.filter((country) => country.name.common.toLowerCase().startsWith(countryName))
            }

    return (
     
     <div className={css.container}>
            <Search setCountryName={setCountryName} />
            <Grid countries={SearchCountries(countries)} loading={loading} />
            <GoTop />
        </div>
    )
}

export default Common