import { useEffect,useState } from 'react'
import Axios from 'axios'



//type,payload
const useSearchCountry = (type='',payload='') => {
    const BaseURL = "https://restcountries.com/v3.1/"
    const [countries,setCountries] = useState([]);
    const [countriesFiltered,setCountriesFiltered] = useState([]);
    const [country,setCountry] = useState({});
    const [isLoading,setLoading] = useState(false)

    switch (type) {
        case 'region': {
            Axios.get(BaseURL+'region/'+payload).then(res => {setCountries(res.data)});break;
        }
        case 'name': {Axios.get(BaseURL+'name/'+payload).then(res => {setCountries(res.data)});break;}
        default: {Axios.get(BaseURL+'all').then(res => {setCountries(res.data)});break;} 
    }

    return {countries,countriesFiltered,isLoading}
}

export default useSearchCountry
