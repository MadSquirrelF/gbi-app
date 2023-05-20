import React from 'react'
import styles from './Up.module.scss';

type UpProps = {
  value: number;
  handleUpButton: () => void;
};


const Up: React.FC<UpProps> = ({ value, handleUpButton }) => {


  return (
    <div className={value < 300 ? styles.root : styles.show}
      onClick={() => handleUpButton()}>
      <span>🚀</span>
    </div>
  )
}

export default Up;