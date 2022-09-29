import { useState,useEffect,useRef } from 'react';
import { CircularProgress } from '@mui/material'
import { Link,useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import css from '../styles/pages.module.css'

const Details = () => {
    const { countryName } = useParams()
    const [country, setCountry] = useState({})
    const [border,setBorders] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const once = useRef(false)

    const fetchBorder = (country) => {
        const borders = country.borders
        borders.forEach(cod => {
            fetch(`https://restcountries.com/v3.1/alpha/${cod}`)
            .then(res => res.json())
            .then(data => {
                setBorders(prev => [...prev,...data])
            })
        })
    }

    useEffect(() => {
        if (once.current) {
            setIsLoading(true)
            const fetchCountry = async () => {
                try {
                    const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
                    const data = await response.json()
                    const country = data.find(item => item.name.common === countryName)
                    setCountry(country)
                    fetchBorder(country)
                } catch (error) {
                    console.log(error)
                } finally {
                    setIsLoading(false)
                }
            }
            fetchCountry()
        }
        return () => {
            once.current = true
            setBorders([])
        }
    },[countryName])

    return (
        <div className={css.container}>
            { isLoading ? <div className={css.loading__icon}>
                <CircularProgress/>
            </div> : 
            <>
                <div className={css.country__details__wrapper}>
                    <Link to='/'>
                        <button className={css.btn__back}>
                            <KeyboardBackspaceIcon />
                            <span>Back</span>
                        </button>
                    </Link>
                    <div className={css.country__details}>
                            <img className={css.country__details__flag} src={country.flags.svg} alt={country.name.common} />
                        <div className={css.country__details__info}>
                            <h1 className={css.country__details__name}>{country.name.common}</h1>
                            <div className={css.middle}>
                                <div className={css.left}>
                                    <p className={css.detail}>Native Name: <span className={css.oppa}>{country.name.official}</span></p>
                                    <p className={css.detail}>Population: <span className={css.oppa}>{country.population.toLocaleString()}</span></p>
                                    <p className={css.detail}>Region: <span className={css.oppa}>{country.region}</span></p>
                                    <p className={css.detail}>Sub Region: <span className={css.oppa}>{country.subregion}</span></p>
                                    <p className={css.detail}>Capital: <span className={css.oppa}>{country.capital}</span></p>
                                </div>
                                <div className={css.right}>
                                    <p className={css.detail}>Top Level Domain: <span className={css.oppa}>{country.tld}</span></p>
                                    <p className={css.detail}>Currencies: <span className={css.oppa}>{Object.values(country.currencies)[0].name}</span></p>
                                    <p className={css.detail}>Languages: <span className={css.oppa}>{Object.values(country.languages).join(',')}</span></p>
                                </div>
                            </div>
                            <div className={css.bottom}>
                                <p className={css.detail}>Country Borders:&nbsp;</p>
                                <div className={css.borders__wrapper}>
                                    {  border.length > 0 ? border.map((b,_i) => (
                                        <Link to={`/name/${b.name.common}`} key={_i}>
                                            <button className={css.btn__border}>
                                                {b.name.common}
                                            </button>
                                        </Link>
                                    )): <p className={css.detail}><span className={css.oppa}>No borders</span></p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </div>
    )
}

export default Details