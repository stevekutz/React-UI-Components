import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div className = "title-container">
      <h1 className = "title">
        Lambda School &#160;
        <span className = "title-extra">
          @LambdaSchool
        </span>
        <span className = "title-date">
           &#160;-&#160; 26 Jan
        </span>

      </h1>
    </div>

  )

};

export default HeaderTitle;