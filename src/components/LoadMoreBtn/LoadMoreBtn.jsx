import React from 'react';
import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ nextPage, currentPage, maxPage }) => {
    return (
        <button
          className={s.button} onClick={nextPage} disabled={currentPage >= maxPage} >
                  Load More 
        </button>
    );
};

export default LoadMoreBtn;