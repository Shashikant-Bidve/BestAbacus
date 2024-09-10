import React, { useEffect, useState } from 'react'
import QuestionCard1 from '../Questions/QuestionCard1';
import questions from "../../json/lvl1/sheet1.json"
import styles from "./Sheet1.module.css"

let ans = new Array(25);

const Sheet1 = () => {
    
    let [rst, setRst] = useState(false);
    let [Correct, setCorrect]= useState(0);
    
    const onAnswerChange = (answer, index) => {
        ans[index] = parseInt(answer);
    }

    const result = () => {
        
        let correct = 0;
        
        let index = 0;
        {questions.questions.map((question, ind) => {
            
            if(question.answer === ans[index]){                
                correct++;
            }
            index++;
        })}
        setRst(true);
        setCorrect(correct);
        console.log(Correct);
        
    }
  return (
    <>
    
    <div className={styles.container}>
        {questions.questions.map((question, ind) => {
            return <QuestionCard1 num1={question.num1} num2={question.num2} onAnswerChange={onAnswerChange} index={ind} key={ind}></QuestionCard1>
        })}
    </div>
    <div className={styles.container}>
    <button className={styles.button} onClick={result}>Submit</button>
    {rst && <button className={styles.button}>
        Correct: {Correct}
    </button>}
    </div>
    </>
  )
}

export default Sheet1;