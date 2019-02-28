import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  return (
    <div className = 'footer-container'>
      <div className = 'footerIMG bubble'>
        <img
          src="https://img.icons8.com/ios/50/000000/speech-bubble.png"
          alt = 'bubble'
        />
      </div>

      <div className = 'footerIMG recycle'>
        <img
          src="https://img.icons8.com/ios/50/000000/synchronize.png"
          alt = 'recycle'
        />
      </div>

      <div className = 'footerIMG like'>
        <img
          src="https://img.icons8.com/ios/50/000000/hearts.png"
          alt = 'like'
        />
      </div>

      <div className = 'footerIMG send'>
        <img
          src="https://img.icons8.com/ios/50/000000/filled-message.png"
          alt = 'send'
        />
      </div>



    </div>
  )
};

export default FooterContainer;
