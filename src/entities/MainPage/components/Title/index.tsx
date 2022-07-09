import React from 'react';
import ButtonAdd from '../../../../shared/ButtonAdd';
import style from './Title.module.scss';

const Title = () => {
  return (
    <div className={style.caption}>
      <div>
        <h1 className={style.title}>Объявления</h1>
        {/* Количество объявлений подвязать бы на длину массива с данными */}
        <h3 className={style.subtitle}>Всего: 45</h3>
      </div>
      <ButtonAdd />
    </div>
  );
};

export default Title;
