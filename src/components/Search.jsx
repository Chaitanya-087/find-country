import css from '../styles/components.module.css';

import React, {useState } from 'react'
import { Link ,useLocation} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const Search = ({setCountryName}) => {
    const [openMenu, setOpenMenu] = useState(false)
    const location = useLocation()
    const region = location.pathname.includes('region') ? location.pathname.split('/')[2] : 'all'
    
    const toggleMenu = () => {
        setOpenMenu(prev => !prev)
    }

    return (
        <div className={css.search__form}>
            <form onSubmit={(e) => e.preventDefault()} className={css.input__wrapper}>
                <SearchIcon className={css.search__icon} />
                <input className={css.input} type='text' placeholder='Search for a country...' onChange={(e) => setCountryName(e.target.value)}/>
            </form>
            <div className={css.custom__select}>

                <div className={css.select__container} onClick={toggleMenu}>
                    <span>{region}</span>
                    <KeyboardArrowUpIcon className={css.arrow__icon} data-rotate={openMenu} />
                </div>

                <ul className={css.select__list} onClick={toggleMenu} data-expanded={openMenu}>
                    <li className={css.select__item}>
                        <Link to='/'>all</Link>
                    </li>
                    <li className={css.select__item}>
                        <Link to='/region/africa'>africa</Link>
                    </li>
                    <li className={css.select__item}>
                        <Link to='/region/america'>america</Link>
                    </li>
                    <li className={css.select__item}>
                        <Link to='/region/asia'>asia</Link>
                    </li>
                    <li className={css.select__item}>
                        <Link to='/region/oceania'>oceania</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Search