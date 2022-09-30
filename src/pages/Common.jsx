import Card from '../components/Card'
import Search from '../components/Search';
import { useEffect, useState } from 'react'
import css from '../styles/pages.module.css'
import { useLocation } from 'react-router-dom'
import { CircularProgress } from '@mui/material';
import GoTop from '../components/GoTop';

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
        return () => {
            new AbortController()
        }
    }, [url])

    const SearchCountries = (data) => {
        if (data.length > 0) {
            if (countryName === '') {
                return data
            } else {
                return data.filter((country) => country.name.common.toLowerCase().startsWith(countryName))
            }
        }
    }

    return (
        <div className={css.container}>
            <Search setCountryName={setCountryName} />
            {loading ? <div className={css.loading__icon}><CircularProgress /></div> :
                <div className={css.grid}>
                    {
                        SearchCountries(countries).map((country, index) => <Card key={index} country={country} />)
                    }
                </div>
            }
            <GoTop />
        </div>
    )
}

export default Common