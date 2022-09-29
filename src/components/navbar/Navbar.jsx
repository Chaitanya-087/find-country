import './navbar.css'
import { useState } from 'react';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import switchTheme from '../../helpers/switchTheme';

const Navbar = () => {
    const [theme,setTheme] = useState('dark')
    const toggleTheme = () => {
        if(theme === 'dark'){
            switchTheme('dark')
            setTheme('light')
        }else{
            switchTheme('light')
            setTheme('dark')
        }
    }
    return (
        <header className='navbar__wrapper'>
            <div className='navbar'>
                <span className='nav__title' >
                    Where in the world?
                </span>
                <div className='btn-theme' onClick={toggleTheme}>
                    {theme === 'light' ? <NightlightOutlinedIcon />:<NightlightRoundIcon /> }
                    <span className='theme-name'>{theme}Theme</span>
                </div>
            </div>
        </header>
    )
}

export default Navbar
