import React from 'react';
const Works = () => {
  return (
    <div className='Works'>
      <article className="works__item">
        <a href="#" className="works__image _ibg">
          <img src="img/work01.png" alt="work 01" />
        </a>
        <div className="works__body">
          <a className="works__title">Designing Dashboards</a>
          <div className="works__info">
            <div className="works__yaer">2020</div>
            <div className="works__category">Dashboard</div>
          </div>
          <div className="works__text text">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
        </div>
      </article>
    </div>
  );
}
export default Works;