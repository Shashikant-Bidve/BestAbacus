import React, { useEffect, useState } from 'react'
import QuestionCard3 from '../Questions/QuestionCard3.jsx';
import questions from "../../json/lvl3/sheet2.json"
import styles from "./Sheet1.module.css"
import Result from '../Result.jsx';

let ans = new Array(45);
let crrt = new Array(45);

const Lvl3Sheet2 = () => {
    
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
                crrt[ind] = 1;
            }
            index++;
        })}
        setRst(true);
        setCorrect(correct);     
    }
  return (
    <>
    
    <div className={styles.container}>
        {questions.questions.map((question, ind) => {
            return <QuestionCard3 isCorrect={crrt[ind] === undefined ? false : true} num1={question.num1} num2={question.num2} num3={question.num3} onAnswerChange={onAnswerChange} index={ind} key={ind}></QuestionCard3>
        })}
    </div>
    <div className={styles.container}>
    <button className={styles.button} onClick={result}>Submit</button>
    {rst && <section>
                <Result correctAnswers={Correct} totalQuestions={questions.questions.length}/>
            </section>}
    </div>
    </>
  )
}

export default Lvl3Sheet2;