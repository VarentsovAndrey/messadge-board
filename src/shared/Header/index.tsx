import React from 'react';
import Logo from '../Logo';

import style from './Header.module.scss';

const Header = () => {
  return (
    <section className={style.header}>
      <div className={style.logo}>
        <Logo id="svg" />
      </div>
      <div className={style.link}>
        <Logo id="link" />
        <p className={style.link_profile}>Профиль</p>
      </div>
    </section>
  );
};

export default Header;
