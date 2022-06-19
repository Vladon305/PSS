import React from 'react';
import Work from './Work';

const Works = (props) => {
  let workElements = props.works
    .map(w => <Work title={w.title} data={w.data} category={w.category} text={w.text} key={w.id} />);

  return (
    <div className='works'>
      <main className="page">
        <div className="container">
          <h1 className="works__main-title title">Works</h1>
          {workElements}
        </div>
      </main>
    </div>
  );
}
export default Works;