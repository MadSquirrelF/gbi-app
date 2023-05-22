import React from 'react';

import styles from './NotFoundBlock.module.scss';
import MissPageSticker from '../../assets/images/404.jpg';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={MissPageSticker} alt="MissPageSticker" />
      <h1>Страница не найдена</h1>
    </div>
  );
};
export default NotFoundBlock;
