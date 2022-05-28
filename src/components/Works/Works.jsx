import React from 'react';
import Work from './Work';

const Works = () => {
  return (
    <div className='works'>
      <div className='wrapper'>
        <div className="conteiner">
          <h1 className="works__main-title title">Works</h1>
          <Work />
          <Work />
          <Work />
          <Work />

        </div>
      </div>
    </div>
  );
}
export default Works;