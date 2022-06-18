import React, { useState } from 'react';
import Logo from '../Logo';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const [sidebarName, setSidebarName] = useState('Super admin');

  return (
    <section className={style.admin}>
      <div className={style.admin_border}>
        <div className={style.admin_menu}>
          <div className={style.admin_menu__logo}>
            <Logo id="admin" />
          </div>
          <div className={style.admin_description}>
            <p className={style.admin_description__name}>{sidebarName}</p>
            <p className={style.admin_description__menu}>Админ-меню</p>
          </div>
        </div>
      </div>
      <div className={style.admin_border}>
        <div className={style.admin_ads}>
          <div className={style.admin_ads__logo}>
            <Logo id="ads" />
          </div>
          <p className={style.admin_ads__text}>Объявления</p>
        </div>
      </div>

      <div className={style.admin_exit}>
        <Logo id="exit" />
        <p className={style.admin_exit__text}>Выход</p>
      </div>
    </section>
  );
};

export default Sidebar;
