import { useState } from 'react';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import NightlightOutlinedIcon from '@mui/icons-material/NightlightOutlined';
import switchTheme from '../helpers/switchTheme';
import {useNavigate} from 'react-router-dom'
import css from '../styles/components.module.css';

const Navbar = () => {
    const navigate = useNavigate()
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
        <header className={css.navbar__wrapper}>
            <div className={css.navbar__container}>
                <h3 onClick={() => navigate('/')} className={css.navbar__title}>
                    Where in the world?
                </h3>
                <div className={css.btn__theme} onClick={toggleTheme}>
                    {theme === 'light' ? <NightlightOutlinedIcon />:<NightlightRoundIcon /> }
                    <span>{theme}Theme</span>
                </div>
            </div>
        </header>
    )
}

export default Navbar
