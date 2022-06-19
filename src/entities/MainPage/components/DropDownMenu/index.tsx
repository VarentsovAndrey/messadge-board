import React, { FC, SetStateAction } from 'react';
import Logo from '../../../../shared/Logo';
import style from './DropDownMenu.module.scss';

interface IProps {
  active: boolean;
  setActive: any;
}

const DropDownMenu: FC<IProps> = ({ active, setActive }) => {
  const handleClick = () => {
    setActive(false);
  };
  const handleKeyDown = (e: { keyCode: number }) => {
    if (e.keyCode === 27) {
      setActive(false);
    }
  };

  return (
    <div
      className={active ? style.dropDownMenu_active : style.dropDownMenu}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}>
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
