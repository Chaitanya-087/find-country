import { CircularProgress } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { useTheme } from '../../helpers/useTheme';
import { Link,useParams } from 'react-router-dom';
import './details.css'
import useSearchCountry from '../../helpers/useSearchCountry';

const Details = () => {
    const { changeTheme } = useTheme()
    const {countriesFiltered,isLoading} = useSearchCountry('all',useParams().countryName)
    const country = countriesFiltered[0]
    
    return (
        <div className='container details'>
            { isLoading ? <CircularProgress className='loading-icon' /> : 
            <>
                <div className='country__details__wrapper'>
                    <Link to='/find-country'>
                        <button className='btn-back' style={{ backgroundColor: changeTheme("element") , color: changeTheme("text") }}>
                            <KeyboardBackspaceIcon />
                            <span>Back</span>
                        </button>
                    </Link>
                    <div className='country__details'>
                        <div className='country__details__image'>
                            <img className='country__details__flag' src={country?.flags?.svg} alt={country?.name?.common} />
                        </div>
                        <div className='country__details__info'>
                            <h1 className='country__details__name'>{country?.name?.common}</h1>
                            <div className='middle'>
                                <div className='left'>
                                    <p className='detail'>Native Name: <span className="oppa">{country?.name?.official}</span></p>
                                    <p className='detail'>Population: <span className="oppa">{country?.population.toLocaleString()}</span></p>
                                    <p className='detail'>Region: <span className="oppa">{country?.region}</span></p>
                                    <p className='detail'>Sub Region: <span className="oppa">{country?.subregion}</span></p>
                                    <p className='detail'>Capital: <span className="oppa">{country?.capital}</span></p>
                                </div>
                                <div className='right'>
                                    <p className='detail'>Top Level Domain: <span className='oppa'>{country?.tld}</span></p>
                                    <p className='detail'>Currencies: <span className='oppa'>{country?.currencies && Object.values(country.currencies)[0].name}</span></p>
                                    <p className='detail'>Languages: <span className='oppa'>{country?.languages && Object.values(country.languages).join(',')}</span></p>
                                </div>
                            </div>
                            <div className='bottom'>
                                <p className='detail'>Country Borders:&nbsp;</p>
                                <div className='borders__wrapper'>
                                    <p className='detail'><span className='oppa'>{country?.borders && Object.values(country?.borders).join(',')}</span></p>
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
