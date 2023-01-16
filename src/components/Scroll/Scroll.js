import React, {useState, useEffect} from 'react'
import './Scroll.css'

const Scroll = () => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        window.addEventListener ('scroll', () => {
            if (window.scrollY > 200) {
                setVisible(true);
            }
            else {
                setVisible(false);
            }
        })
    });

    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='my__scroll'>
            {visible && (
                <button type='button' className='my__scroll-button button__circle' onClick={ScrollToTop}>
                    <p>🔝</p> 
                </button>
            )}
        </div>
    );
  }
  
  export default Scroll;
  