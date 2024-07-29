import React from 'react'

import '../css/about.css';

export  default function About () {
    return (
        <div className='about'>
            <h4 className='h4'>About Us</h4>
            <div className='about-content'>
                <div className='about-box'>
                    <h3 className='h3'>Welcome to burger King</h3>
                    <p className='p'>Lorem ipsum dolor...</p>
                    <div className='about-inner'>
                        <h5><i className='fas fa-check-square'></i>Fresh Bun</h5>
                        <h5><i className='fas fa-check-square'></i>Good Vagetable</h5>
                        <h5><i className='fas fa-check-square'></i>Availble 24*7</h5>
                        <h5><i className='fas fa-check-square'></i>Affortable Price</h5>
                        <h5><i className='fas fa-check-square'></i>Best Quality</h5>
                        <h5><i className='fas fa-check-square'></i>Veg $ Non-Veg</h5>
                    </div>
                </div>
                <div className='about-box'>
                    <img src="./img/img-7.png" alt="img-7"/>
                </div>
            </div>
        </div>
    )
}
