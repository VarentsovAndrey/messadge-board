import React from 'react';
import Logo from '../../../../shared/Logo';

import style from './ButtonBack.module.scss';

const ButtonBack = () => {
  return (
    <div className={style.buttonBack}>
      <Logo id="arrow-back" />
      <p className={style.buttonBack_text}>Вернуться назад</p>
    </div>
  );
};

export default ButtonBack;
