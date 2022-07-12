import './navbar.css'
import { useState } from 'react';
import { IconButton } from '@mui/material';
import {useTheme} from '../../helpers/useTheme'
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';

const Navbar = () => {
    const {theme,toggleTheme,changeTheme} = useTheme();
    const [darkMode,setDarkMode] = useState(false)
    const toggleIcon = () => {
        toggleTheme();
        setDarkMode(prev => !prev)
    }

  return (
    <header className='navbar__wrapper' style={{backgroundColor:changeTheme('element')}}>
        <div className='navbar'>
            <span className='nav__title' >
                Where in the world?
            </span>
            <div onClick={toggleIcon} className='btn-theme'>
                <IconButton style={{color:changeTheme('text')}}>
                    {darkMode ? <NightlightRoundIcon /> : <NightlightOutlinedIcon/> }
                </IconButton>
                <p className='theme-name'>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</p>
            </div>
        </div>
    </header>
  )
}

export default Navbar
