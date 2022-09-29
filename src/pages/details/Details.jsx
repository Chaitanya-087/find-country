import './details.css'
import { useState,useEffect,useRef } from 'react';
import { CircularProgress } from '@mui/material'
import { Link,useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Container from '../../components/container/Container';

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
        <Container>
            { isLoading ? <div className="loading-icon">
                <CircularProgress/>
            </div> : 
            <>
                <div className='country__details__wrapper'>
                    <Link to='/'>
                        <button className='btn-back'>
                            <KeyboardBackspaceIcon />
                            <span>Back</span>
                        </button>
                    </Link>
                    <div className='country__details'>
                            <img className='country__details__flag' src={country.flags.svg} alt={country.name.common} />
                        <div className='country__details__info'>
                            <h1 className='country__details__name'>{country.name.common}</h1>
                            <div className='middle'>
                                <div className='left'>
                                    <p className='detail'>Native Name: <span className="oppa">{country.name.official}</span></p>
                                    <p className='detail'>Population: <span className="oppa">{country.population.toLocaleString()}</span></p>
                                    <p className='detail'>Region: <span className="oppa">{country.region}</span></p>
                                    <p className='detail'>Sub Region: <span className="oppa">{country.subregion}</span></p>
                                    <p className='detail'>Capital: <span className="oppa">{country.capital}</span></p>
                                </div>
                                <div className='right'>
                                    <p className='detail'>Top Level Domain: <span className='oppa'>{country.tld}</span></p>
                                    <p className='detail'>Currencies: <span className='oppa'>{Object.values(country.currencies)[0].name}</span></p>
                                    <p className='detail'>Languages: <span className='oppa'>{Object.values(country.languages).join(',')}</span></p>
                                </div>
                            </div>
                            <div className='bottom'>
                                <p className='detail'>Country Borders:&nbsp;</p>
                                <div className='borders__wrapper'>
                                    {  border.length > 0 ? border.map((b,_i) => (
                                        <Link to={`/name/${b.name.common}`} key={_i}>
                                            <button className='border-btn'>
                                                {b.name.common}
                                            </button>
                                        </Link>
                                    )): <p className='detail'><span className='oppa'>No borders</span></p>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </Container>
    )
}

export default Details
