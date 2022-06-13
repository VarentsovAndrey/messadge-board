import React from 'react';
import Logo from '../../../../shared/Logo';
import style from './Table.module.scss';

const Table = () => {
  return (
    <div className={style.table}>
      <div className={style.table_name}>
        <p className={style.table_item}>Название объявления</p>
        <div className={style.table_button}>
          <button type="button" className={style.table_button__arrow}>
            <Logo id="arrows" />
          </button>
        </div>
      </div>

      <p className={style.table_item__category}>Категория</p>
      <p className={style.table_item__data}>Дата публикации</p>
      <p className={style.table_item__publish}>Публикация</p>
    </div>
  );
};

export default Table;
