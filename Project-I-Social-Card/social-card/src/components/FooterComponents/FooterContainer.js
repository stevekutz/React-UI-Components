import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  let count = 0;

  function handleClick(e) {
    let recycled = root.querySelector('.counter');
    count++;
    recycled.textContent = count.toString();
  }


  return (
    <div className = 'footer-container'>
      <div className = 'footerIMG bubble'>
        <img
          src="https://img.icons8.com/ios/50/000000/speech-bubble.png"
          alt = 'bubble'
        />
      </div>

      <div
        className = 'footerIMG sync'
      >
        <img
          src="https://img.icons8.com/ios/50/000000/synchronize.png"
          alt = 'sync'
        />
      </div>

      <div
        onClick={handleClick}
        className = 'footerIMG like'>
        <img
          className = 'active'
          src="https://img.icons8.com/ios/50/000000/hearts.png"
          alt = 'like-empty'
        />


        <div className = "counter">0</div>



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
