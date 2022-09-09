import { useEffect,useState } from 'react'

const useSearchCountry = (region,searchedValue) => {
    const [countries,setCountries] = useState([]);
    const [isLoading,setLoading] = useState(false)
    
    useEffect(() => {
        setLoading(true)
        const getCountries = async () => {
            const response = await fetch('https://restcountries.com/v3.1/all')
            const data = await response.json()
            setCountries(data)
            setLoading(false)
        }
        getCountries()
    },[])

    let countriesFiltered = region.toLowerCase() === 'all' ?   countries : countries.filter(country => country.region.toLowerCase().includes(region.toLowerCase()))
    countriesFiltered.sort((a,b) =>a.name.common > b.name.common ? 1 : -1)
    if (searchedValue){
        countriesFiltered = countriesFiltered.filter(country => country.name.common.toLowerCase().startsWith(searchedValue.toLowerCase()))
    }
    return {countriesFiltered,isLoading,setLoading}
}

export default useSearchCountry
