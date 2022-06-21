import React from 'react';

const Work = (props) => {
  return (
    <article className="works__item">
      <p className="works__image _ibg">
        <img src="img/work01.png" alt="work 01" />
      </p>
      <div className="works__body">
        <p className="works__title">{props.title}</p>
        <div className="works__info">
          <div className="works__year">{props.data}</div>
          <div className="works__category">{props.category}</div>
        </div>
        <div className="works__text text">{props.text}</div>
      </div>
    </article>
  );
}
export default Work;