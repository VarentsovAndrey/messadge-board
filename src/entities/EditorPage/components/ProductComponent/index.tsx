import React, { FC } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../../../../shared/Logo';
import style from './ProductComponent.module.scss';

interface IProps {
  name: string;
  category: string;
  price: number;
}

const ProductComponent: FC<IProps> = ({ name, category, price }) => {
  const { search } = useLocation();
  const isEdit = new URLSearchParams(search).get('edit') === 'true';
  return (
    <section className={style.product}>
      <div className={style.product_name}>
        <p className={style.product_name__title}>Название товара</p>
        {isEdit ? (
          <input type="text" className={style.product_name__input} value="Чепчик" />
        ) : (
          <div className={style.product_name__input}>{name}</div>
        )}
      </div>

      <div className={style.product_component}>
        <div className={style.product_category}>
          <p className={style.product_category__title}>Категория</p>
          <div className={style.product_category__input}>
            <p className={style.product_category__item}>{category}</p>
            <button type="button" className={style.product_category__button}>
              <Logo id="arrow-down" />
            </button>
          </div>
        </div>

        <div className={style.product_price}>
          <p className={style.product_price__title}>Стоимость</p>
          <div className={style.product_price__item}> {price} </div>
        </div>
      </div>

      <div className={style.product_phone}>
        <p className={style.product_phone__title}>Телефон</p>
        <div className={style.product_name__input}>
          <input type="tel" />
        </div>
      </div>

      <div className={style.product_description}>
        <p className={style.product_description__title}>Описание</p>

        <textarea
          name="textArea"
          id="textArea"
          placeholder="Введите текст (до 3000 символов)"
          className={style.product_description__input}
        />
      </div>

      <div className={style.product_foto}>
        <p className={style.product_foto__title}>Фотография</p>
        <div className={style.product_foto__input}>
          <button type="button" className={style.product_foto__button}>
            Выбрать файл
          </button>
        </div>
      </div>

      <div className={style.product_location}>
        <p className={style.product_location__title}>Местоположение</p>

        <input type="text" placeholder="Введите адрес" className={style.product_name__input} />
      </div>
    </section>
  );
};

export default ProductComponent;
