import React from 'react';
import Logo from '../../../../shared/Logo';
import style from './DropDownMenu.module.scss';

const DropDownMenu = () => {
  return (
    <div className={style.dropDownMenu}>
      <div className={style.dropDownMenu_item}>
        <Logo id="eye" />
        <p className={style.dropDownMenu_item__watch}>Просмотреть</p>
      </div>
      <div className={style.dropDownMenu_item}>
        <Logo id="editor" />
        <p className={style.dropDownMenu_item__edit}>Редактировать</p>
      </div>
      <div className={style.dropDownMenu_item}>
        <Logo id="delete" />
        <p className={style.dropDownMenu_item__delete}>Удалить</p>
      </div>
    </div>
  );
};

export default DropDownMenu;
