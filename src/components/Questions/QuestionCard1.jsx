import React from 'react';
import styles from './QuestionCard1.module.css';

const QuestionCard1 = ({ isCorrect = false,num1, num2, onAnswerChange, index}) => {
    return (
        <div className={styles.container}>
          <div className={styles.number}>
            {/* <span className={styles.sign}>{}</span> */}
            <span>{Math.abs(num1)}</span>
          </div>
          <div className={styles.number}>
            <span className={styles.sign}>{num2 >= 0 ? '+' : '-'}</span>
            <span>{Math.abs(num2)}</span>
          </div>
          <hr className={styles.dash} />
          <input
            type="text"
            onChange={(e) => onAnswerChange(e.target.value, index)}
            className={`${styles.input} ${isCorrect ? styles.green : styles.red}`}
          />
        </div>
      );
};

export default QuestionCard1;