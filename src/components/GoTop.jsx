import React,{useState} from 'react'
import css from '../styles/components.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const GoTop = () => {
    const [visible, setVisible] = useState(false)
    window.onscroll = () => { 
        const scrolled = window.pageYOffset
        if (scrolled > 300) {
            setVisible(true)
        } else {
            setVisible(false)
        }
    }
    const scrollToTop = () => { 
        window.scrollTo({top: 0, behavior: 'smooth'})
    }
  return (
    <div className={css.goto__top} onClick= {scrollToTop} data-visible={visible}>
        <KeyboardArrowUpIcon />
    </div>
  )
}

export default GoTop
