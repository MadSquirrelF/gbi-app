import React from 'react';

import styles from './NotFoundBlock.module.scss';
import MissPageSticker from '../../assets/images/misspage.png';

export const NotFoundBlock: React.FC = () => {
  return (
    <div className={styles.root}>
      <img src={MissPageSticker} alt="MissPageSticker" />
    </div>
  );
};
export default NotFoundBlock;
