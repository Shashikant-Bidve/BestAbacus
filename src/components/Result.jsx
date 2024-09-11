import React from 'react'
import styles from "./Result.module.css";

const Result = ({ correctAnswers, totalQuestions }) => {
  const percentage = (correctAnswers / totalQuestions) * 100;
  const strokeDashoffset = 440 - (440 * percentage) / 100;

  return (
    <div className={`${styles.circularContainer}`}>
      <svg className={`${styles.progressRing}`} width="150" height="150">
        <circle
          className={`${styles.progressRingCircle}`}
          stroke="green"
          strokeWidth="10"
          fill="lightGreen"
          r="70"
          cx="75"
          cy="75"
          style={{ strokeDashoffset }}
        />
      </svg>
      <div className={`${styles.scoreText}`}>
        {correctAnswers} / {totalQuestions}
      </div>
    </div>
  );
}

export default Result