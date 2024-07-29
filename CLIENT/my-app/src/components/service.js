import React from 'react'
// import styles from'../css/service.css';
import '../css/service.css';

const Service = () => {
  return (
    <div className='service'>
<h4 className='h4'>Services</h4>
<div className='container '>
    <div className='b-container'>
        <i className='fas fa-clock'></i>
        <h2 className='h2'>24*7 Service</h2>
    </div>
    <div className='b-container'>
        <i className='fas fa-biking'></i>
        <h2 className='h2'>Home Delavery</h2>
    </div>
    <div className='b-container'>
        <i className='fas fa-glass-martini'></i>
        <h2 className='h2'>Beverages</h2>
    </div>
</div>
    </div>
  )
}

export default Service