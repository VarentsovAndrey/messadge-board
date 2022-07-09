import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../../../shared/Logo';
import DropDownMenu from '../DropDownMenu';

import style from './ItemsField.module.scss';

interface IProps {
  id: number;
  name: string;
  category: string;
  data: string;
  publication: string;
}

const ItemsField: FC<IProps> = ({ id, name, category, data, publication }) => {
  const [modalActive, setModalActive] = useState(false);

  const handleOpenMenu = () => {
    setModalActive(true);
  };

  return (
    <div>
      <div className={style.itemsField}>
        <p className={style.itemsField_name}>{name}</p>
        <p className={style.itemsField_category}>{category}</p>
        <p className={style.itemsField_data}>{data}</p>
        <p className={style.itemsField_publication}>{publication}</p>
        <button type="button" className={style.itemsField_button} onClick={handleOpenMenu}>
          <Logo id="edit" />
        </button>
      </div>
      {/* Хороший подход, что именно через пропсы флаг прокидываешь, чтобы показывать или прятать
модалку, а не условным рендерингом в jsx именно снаружи компонента.
Обычно так и делают, то есть сам компонент по сути решает, как ему рисоваться, глядя на пропсы свои.  */}
      <DropDownMenu active={modalActive} setActive={setModalActive} id={id} />
    </div>
  );
};

export default ItemsField;
