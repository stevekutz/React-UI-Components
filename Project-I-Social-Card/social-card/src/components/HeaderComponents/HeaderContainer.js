import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle';
import HeaderContent from './HeaderContent';
import HeaderText from './HeaderText';
import ImageThumbNail from "./ImageThumbnail";



const HeaderContainer  = () => {
  return (
    <div className = "header-container">
      <ImageThumbNail />
      <HeaderText />


    </div>


  )


};

export default HeaderContainer;