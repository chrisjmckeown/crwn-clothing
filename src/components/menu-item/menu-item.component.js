import React from 'react';
import './menu-item.styles.scss';

export const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${size} menu-item`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='content'>
        <div className='title'>{title.toUpperCase()}</div>
        <div className='subtitle'>SHOP NOW</div>
      </div>
    </div>
  );
};

export default MenuItem;