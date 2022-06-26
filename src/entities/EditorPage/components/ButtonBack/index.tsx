import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../../../shared/Logo';

import style from './ButtonBack.module.scss';

const ButtonBack = () => {
  const navigate = useNavigate();
  return (
    <div className={style.buttonBack} onClick={() => navigate(-1)}>
      <Logo id="arrow-back" />
      <p className={style.buttonBack_text}>Вернуться назад</p>
    </div>
  );
};

export default ButtonBack;
