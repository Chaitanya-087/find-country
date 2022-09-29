import Card from '../components/Card'
import Search from '../components/Search';
import { useLocation } from 'react-router-dom'
import css from '../styles/pages.module.css'
import { CircularProgress } from '@mui/material';
import { useEffect, useRef, useState } from 'react'

const Common = ({ type }) => {
    const location = useLocation()
    let url = ''
    if (type === 'all') {
        url = 'https://restcountries.com/v3.1/all'
    }
    else if (type === 'region') {
        url = `https://restcountries.com/v3.1/region/${location.pathname.split('/')[2]}`
    }

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [countryName, setCountryName] = useState('');
    const once = useRef(false)

    useEffect(() => {
        if (once.current) {
            setLoading(true)
            const getCountries = () => {
                fetch(url).then((res) => res.json()).then(data => {
                    setLoading(false)
                    setCountries(data);
                });
            }
            getCountries();
        }

        return () => {
            once.current = true
        }
    }, [url])

    const SearchCountries = (data) => {
        if (countryName === '') {
            return data
        } else {
            return data.filter((country) => country.name.common.toLowerCase().includes(countryName))
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
        </div>
    )
}

export default Common