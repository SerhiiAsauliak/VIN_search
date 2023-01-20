import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../assets/not-found.svg';
import arrowLeft from '../../assets/arrow-left.svg';
import s from './not-found.module.css'

export const NotFound = () => {
  return (
    
    <div className={s.main}>
        <div className='full-page'>
            <img src={errorImg} alt="not found" />
            <h3>Sorry. Page not found</h3>
            <p> We can't seem to find the page you're looking for</p>
            <div className={s.link}>
              <img className={s.arrowImg} src={arrowLeft} alt="arrowLeft" />
              <Link to='/'>Go back</Link>
            </div>
        </div>
    </div>
  );
};

