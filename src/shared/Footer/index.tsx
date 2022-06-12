import React from 'react';
import Logo from '../Logo';
import style from './Footer.module.scss';

const Footer = () => {
  return (
    <section className={style.footer}>
      <div className={style.footer_logo}>
        <Logo id="svg" />
      </div>
      <p className={style.footer_text}>Доска объявлений</p>
      <p className={style.footer_info}>&copy; ООО «Доска диджитал», 2022</p>
    </section>
  );
};

export default Footer;
