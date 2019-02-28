import React from 'react';
import moment from 'moment';
import './Header.css';

const HeaderTitle = () => {

  const dateParams = { day: 'numeric', month: 'short'};
  let getTheDate  = () => new Date().toLocaleDateString( 'en-US', dateParams);

  return (
    <div className = "title-container">
      <h1 className = "title">
        Lambda School &#160;
        <span className = "title-extra">
          @LambdaSchool
        </span>
        <span className = "title-date">
           &#160;-&#160;{moment().format('DD MMM').toLowerCase()}
        </span>

      </h1>
    </div>

  )

};

export default HeaderTitle;