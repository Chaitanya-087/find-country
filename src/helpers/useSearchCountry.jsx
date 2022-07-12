

import { useEffect,useState } from 'react'

const useSearchCountry = (region,searchedValue) => {
    const [countries,setCountries] = useState([]);
    useEffect(() => {
        const getCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const data = await response.json()
            setCountries(data)
        }
        getCountries()
    },[])
    let countriesFiltered = region.toLowerCase() === 'all' ?   countries : countries.filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
    countriesFiltered.sort((a,b) =>a.name.common > b.name.common ? 1 : -1)
    if (searchedValue){
        countriesFiltered = countriesFiltered.filter(country => country.name.common.toLowerCase().includes(searchedValue.toLowerCase()))
    }
    return {countriesFiltered}
}

export default useSearchCountry
