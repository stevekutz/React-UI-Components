import React from 'react';
import './Header.css';
import logo from '../HeaderComponents/gudLambda.jpg';

const ImageThumbNail = () => {
  return (
    <div className = "headerIMG">

   <img
    /* src = 'https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png' */
   /* src = 'https://pbs.twimg.com/profile_images/973277209644249089/0Te2jtBH_400x400.jpg' */
   src = {logo}
     alt = "lambda-logo"
   />

    </div>

  )
};

export default ImageThumbNail;