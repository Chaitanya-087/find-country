import './home.css'
import { useEffect, useRef, useState} from 'react'
import Grid from '../../components/grid/Grid';
import  Container  from '../../components/container/Container';
import  Search  from '../../components/search/Search';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countryName, setCountryName] = useState('');
  const once = useRef(false)
  useEffect(() => { 

    if (once.current){
    setLoading(true)
    const getCountries = () => {
      fetch('https://restcountries.com/v3.1/all').then((res) => res.json()).then(data => {
        setLoading(false)
        setCountries(data);
      });
    }
    getCountries();
  }
  
  return () => {
    once.current = true
  }
  }, [])

  const SearchCountries = (data) => {
    if (countryName === '') {
      return data
    } else {
      return data.filter((country) => {
        return country.name.common.toLowerCase().includes(countryName.toLowerCase())
      })
    }
  }


  return (
    <Container>
      <Search setCountryName={setCountryName}/>
      <Grid data={SearchCountries(countries)} loading={loading} />
    </Container>
  )
}

export default Home