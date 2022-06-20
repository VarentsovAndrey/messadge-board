import React from 'react';
import ButtonAdd from '../../../../shared/ButtonAdd';
import style from './ProductName.module.scss';

const ProductName = () => {
  return (
    <div className={style.caption}>
      <div>
        <h1 className={style.title}>Чепчик</h1>
      </div>
      <ButtonAdd />
    </div>
  );
};

export default ProductName;
