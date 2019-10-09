import React from 'react';
import s from './Main.module.css';
import { ReactComponent as Heart } from '../../images/svg/heart.svg';

const main = () => {
  return (
    <main className={s.main}>
      <div className={s.container}>
        <button type="button" className={s.sector1}>
          <Heart className={s.icon1} />
        </button>
        <button type="button" className={s.sector2}>
          <Heart className={s.icon2} />
        </button>
        <button type="button" className={s.sector3}>
          <Heart className={s.icon3} />
        </button>
        <button type="button" className={s.sector4}>
          <Heart className={s.icon4} />
        </button>
        <button type="button" className={s.sector5}>
          <Heart className={s.icon5} />
        </button>
        <button type="button" className={s.sector6}>
          <Heart className={s.icon6} />
        </button>
        <button type="button" className={s.sector7}>
          <Heart className={s.icon7} />
        </button>
        <button type="button" className={s.sector8}>
          <Heart className={s.icon8} />
        </button>
      </div>
      {/* <Header />
      <Section /> */}
    </main>
  );
};

export default main;
