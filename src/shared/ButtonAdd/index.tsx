import React from 'react';
import Logo from '../Logo';
import style from './ButtonAdd.module.scss';

const ButtonAdd = () => {
  return (
    <div>
      <button type="button" className={style.buttonAdd_name}>
        Добавить
        <div className={style.buttonAdd_img}>
          <Logo id="plus" />
        </div>
      </button>
    </div>
  );
};

export default ButtonAdd;
