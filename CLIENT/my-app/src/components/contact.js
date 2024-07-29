import React from 'react'
// import styles from'../css/contact.css'
import '../css/contact.css';

const Contact = () => {
    const [opinion, setOpinion] = React.useState('');

    const handleOpinionChange = (e) => {
        setOpinion(e.target.value);
        e.target.style.height = 'auto'; // Сброс высоты на автоматическую
        e.target.style.height = e.target.scrollHeight + 'px'; // Установка высоты по контенту
    };
    return (
        <div className='contact'>
            <h4 className='h4'>Contact us</h4>
            <div className='contact-sec'>
                <div className='contact-inner'>
                    <div className='contact-inner-col'>
                        <div className='map'>
                        <iframe 
                                src="https://www.google.com/maps/embed" 
                                width="600" //70%
                                height="450" //370px
                                style={{ border: 0 }}
                                loading="lazy" 
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>
                    <div className='contact-inner-col'>
                        <h2>How can we Help?</h2>
                        <p>500 Terry Francois Street, San Francisco, CA 94158</p>
                        <p>We want to hear from you, write us:</p>
                        <form>
                        <input type="text" name="name" id="name" placeholder='Please enter your name' />
                            <input type="email" name="email" id="email" placeholder='Please enter your email' />
                            <input type="tel" name="phone" id="phone" placeholder='Please enter your mobile number' />
                            {/* <input type="text" name="opinion" id="opinion" placeholder='Give your opinion' /> */}
                            <textarea 
                                name="opinion" 
                                id="opinion" 
                                placeholder='Give your opinion' 
                                value={opinion}
                                onChange={handleOpinionChange}
                                style={{ resize: 'none', overflow: 'hidden' }} // Для отключения возможности изменения размера вручную и скрытия полосы прокрутки
                            />
                            <button className="btn">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact