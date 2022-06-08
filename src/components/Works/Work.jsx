import React from 'react';

const Work = (props) => {
  return (
    <article className="works__item">
      <a href="#" className="works__image _ibg">
        <img src="img/work01.png" alt="work 01" />
      </a>
      <div className="works__body">
        <a className="works__title">{props.title}</a>
        <div className="works__info">
          <div className="works__yaer">{props.data}</div>
          <div className="works__category">{props.category}</div>
        </div>
        <div className="works__text text">{props.text}</div>
      </div>
    </article>
  );
}
export default Work;