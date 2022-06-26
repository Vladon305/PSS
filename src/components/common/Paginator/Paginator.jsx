import React from 'react';


const Paginator = ({ totalUsersCount, pageSize, page, onPageChange }) => {

  // let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

  let pages = [];
  // pagesCount
  for (let i = 1; i <= 20; i++) {
    pages.push(i)
  }

  return (
    <div className='pagination'>
      {pages.map(p => {
        return <span
          className={page === p ? 'selectedPage' : null}
          key={p}
          onClick={(e) => {
            onPageChange(p);
          }}>{p}</span>
      })}
    </div>
  )
}

export default Paginator;