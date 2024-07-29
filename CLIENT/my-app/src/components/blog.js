import React from 'react';
// import styles from '../css/blog.css';
import '../css/blog.css';

const Blog = () => {
    return (
        <div className='blog'>
            <h4 className='h4'>Latest Blog</h4>
            <div className='blog-inner'>
                <div className='blog-content'>
                    <div className='in-blog'>
                        <div className='im'>
                            <div className='in-blog-icon'>
                                <a href="#"><i className="fas fa-calendar">20th June 2024</i></a>
                                <a href="#"><i className='fas fa-user'>Admin</i></a>
                            </div>
                            <img src="../img/imm2.jpg" alt="img1" />
                        </div>
                        <div className='in-blog-content'>
                            <h2>Amazing Burger</h2>
                            <p className='p'>Lorem ipsum dolor sit amet</p>
                            <button className='btn'>read more</button>
                        </div>
                    </div>
                </div>
                <div className='blog-content'>
                    <div className='in-blog'>
                        <div className='im'>
                            <div className='in-blog-icon'>
                                <a href="#"><i className="fas fa-calendar">20th June 2024</i></a>
                                <a href="#"><i className='fas fa-user'>Admin</i></a>
                            </div>
                            <img src="../img/imm3.jpg" alt="img2" />
                        </div>
                        <div className='in-blog-content'>
                            <h2>Amazing Burger</h2>
                            <p className='p'>Lorem ipsum dolor sit amet</p>
                            <button className='btn'>read more</button>
                        </div>
                    </div>
                </div>
                <div className='blog-content'>
                    <div className='in-blog'>
                        <div className='im'>
                            <div className='in-blog-icon'>
                                <a href="#"><i className="fas fa-calendar">20th June 2024</i></a>
                                <a href="#"><i className='fas fa-user'>Admin</i></a>
                            </div>
                            <img src="../img/imm4.jpg" alt="img3" />
                        </div>
                        <div className='in-blog-content'>
                            <h2>Amazing Burger</h2>
                            <p className='p'>Lorem ipsum dolor sit amet</p>
                            <button className='btn'>read more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;
