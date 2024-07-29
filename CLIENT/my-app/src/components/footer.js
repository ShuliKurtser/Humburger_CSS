import React from 'react'
import '../css/footer.css';
// npm install @fortawesome/fontawesome-free
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <div className='copyright'>
        <p className='p'>burger shop</p>
        <div className='social'>
            <i className='fab fa-facebook'></i>
            <i className='fab fa-instagram'></i>
            <i className='fab fa-google-plus'></i>
        </div>
    </div>
  )
}

export default Footer