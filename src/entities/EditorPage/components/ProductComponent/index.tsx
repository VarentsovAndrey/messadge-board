import React from 'react';
import Logo from '../../../../shared/Logo';
import style from './ProductComponent.module.scss';

const ProductComponent = () => {
  return (
    <div>
      <div className={style.product_name}>
        <p className={style.product_name__title}>Название товара</p>
        <div className={style.product_name__input}>Чепчик</div>
      </div>

      <div className={style.product_component}>
        <div className={style.product_category}>
          <p className={style.product_category__title}>Категория</p>
          <div className={style.product_category__input}>
            <p className={style.product_category__item}>Детская одежда</p>
            <button type="button" className={style.product_category__button}>
              <Logo id="arrow-down" />
            </button>
          </div>
        </div>

        <div className={style.product_price}>
          <p className={style.product_price__title}>Стоимость</p>
          <div className={style.product_price__item}> 15 000 </div>
        </div>
      </div>

      <h3>Стоимость</h3>
      <input type="text" />
      <h3>Телефон</h3>
      <input type="text" />
      <h3>Описание</h3>
      <input type="text" />
      <h3>Фотография</h3>
      <input type="text" />
      <h3>Местоположение</h3>
      <input type="text" />
    </div>
  );
};

export default ProductComponent;
