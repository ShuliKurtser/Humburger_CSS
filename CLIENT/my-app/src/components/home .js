import React from 'react'
// import styles from './css/home';
// import styles from'../css/home.css';
import styled from 'styled-components';//npm install styled-components

import '../css/home.css';

const StyledBackground = styled.div`

  background-image: url(img/background.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #333;
  padding: 20px;
`;
const Home  = () => {
  return (
    <StyledBackground>
    <div className='home'>
        <div className='home-content'>
            <div className='inner-content'>
                <h3 className='h3'>Meal of the day...</h3>
                <p className='p'>Lorem ipsum dolor sit,amet...</p>
                <button className="btn">
                    <b>Explore menu</b></button>
            </div>
            <div className='inner-content-img'>
                <img src="./img/cover.png"alt="cover.png"/>
            </div>
        </div>
    </div>
    </StyledBackground>
  )
}

export default Home