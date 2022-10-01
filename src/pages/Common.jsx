import Search from '../components/Search';
import { useEffect, useState,useRef} from 'react'
import css from '../styles/pages.module.css'
import GoTop from '../components/GoTop';
import Grid from '../components/Grid';


const Common = ({ API_URL }) => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([])
    const [loading, setLoading] = useState(true);
    const once = useRef(false)

    useEffect(() => {
        if (once.current) {
            setLoading(true)
            const getCountries = async () => {
                try {
                    const res = await fetch(API_URL)
                    const data = await res.json()
                    setCountries(data)
                    setFilteredCountries(data)
    
                } catch(err) {
                    console.error(err)
                } finally {
                    setLoading(false)
                }
            }
            getCountries();
        }
        return  () => {
            once.current = true
            setCountries([])
            new AbortController()
        }
    }, [API_URL])



    return (
     
        <div className={css.container}>
            <Search countries={countries} setFilteredCountries={setFilteredCountries}/>
            <Grid countries={filteredCountries} loading={loading} />
            <GoTop />
        </div>
    )
}

export default Common