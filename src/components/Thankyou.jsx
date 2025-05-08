import React from 'react';
import message from '../assets/message.png';
import BackToHome from './BackToHome';
import '../styles/BackToHome.css';
import '../styles/Thankyou.css';


const Thankyou = () => {
  return (
    <div className="container-thankyou">
      <img src={message} alt="message sent icon" className='image-message-sent' loading='lazy'/>
      <p>Your Message Sent Successfully.</p>
      <h2>Thank you !</h2>
      <BackToHome />
    </div>
  );
};

export default Thankyou;
