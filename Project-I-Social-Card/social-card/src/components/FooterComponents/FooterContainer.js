import React from 'react';
import './Footer.css';

const FooterContainer = () => {
  let count = 0;

  function handleClick() {
    let recycled = root.querySelector('.counter');
    count++;
    recycled.textContent = count.toString();
  }

  function handleIMG () {
    let hollowHeartIMG = root.querySelector('.hollow');
    let solidHeartIMG = root.querySelector('.solid');

    hollowHeartIMG.classList.toggle('hidden');
    solidHeartIMG.classList.toggle('active');


  }


  // "https://img.icons8.com/ios/50/000000/hearts-filled.png"

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
        onMouseOver={handleIMG}


        className = 'footerIMG like'>
        <img
          className = 'hollow active'
          src="https://img.icons8.com/ios/50/000000/hearts.png"
          alt = 'like-empty'
        />
        <img
          className = 'solid hidden'
          src="https://img.icons8.com/ios/50/000000/hearts-filled.png"
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
