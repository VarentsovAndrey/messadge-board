import React, { useState } from 'react';
import Logo from '../../../../shared/Logo';
import style from './InputSearch.module.scss';

const InputSearch = () => {
  return (
    <div className={style.search}>
      <div className={style.search_input}>
        <input type="text" placeholder="Найти объявление" className={style.search_text} />
        <button type="button" className={style.search_button}>
          <Logo id="search" />
        </button>
      </div>
      <div className={style.search_arrows}>
        <p className={style.search_page}>1—8 из 145</p>
        <button type="button" className={style.search_toggle}>
          <Logo id="arrow-left" />
        </button>
        <button type="button" className={style.search_toggle}>
          <Logo id="arrow-right" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
