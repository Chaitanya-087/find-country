import React,{useState} from 'react'
import { useTheme } from '../../helpers/useTheme';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import './search.css'

const Search = ({searchParams}) => {
    const {region,setRegion,setCountryName } = searchParams
    const [openMenu,setOpenMenu] = useState(false)
    const { theme,changeTheme} = useTheme();
    const toggleMenu = () => {
        setOpenMenu(prev => !prev)
    }
    
    return (
        <div className='search-form'>
            <form onSubmit={(e) => e.preventDefault()} className='input-wrapper' style={{backgroundColor:changeTheme("element")}}>
                <SearchIcon className='search-icon' data-theme={theme}/>
                <input className='input' type='text'  placeholder='Search for a country...' data-theme={theme} onChange = {(e)=>setCountryName(e.target.value)}/>
            </form>
                <div className='custom-select' style={{backgroundColor:changeTheme("element")}} >
                    <div className='select-container' onClick={toggleMenu}>
                        <span style={{color:changeTheme("text")}}>{region === 'all'? 'Filter by Region' : region}</span>
                        <KeyboardArrowUpIcon className='arrow-icon' data-rotate={openMenu} />
                    </div>
                    <div className='select-list' style={{backgroundColor:changeTheme("element")}} data-expanded = {openMenu}>
                        <div className='select-item' onClick={() => {setRegion('All');setOpenMenu(!openMenu)}}>All</div>
                        <div className='select-item' onClick={() => {setRegion('Africa');setOpenMenu(!openMenu)}}>Africa</div>
                        <div className='select-item' onClick={() => {setRegion('America');setOpenMenu(!openMenu)}}>America</div>
                        <div className='select-item' onClick={() => {setRegion('Asia');setOpenMenu(!openMenu)}}>Asia</div>
                        <div className='select-item' onClick={() => {setRegion('Oceania');setOpenMenu(!openMenu)}}>Oceania</div>
                    </div>
                </div>
        </div>
    )
}

export default Search