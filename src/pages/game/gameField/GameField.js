import React, { useState } from "react";
import styles from "./GameField.module.scss";
import QuestionSvg from "./QuestionSvg";
import { questionList } from "../../../questions.json";
import { useSelector } from "react-redux";

const shuffledQuestions = [];
const variants = ["A", "B", "C", "D"];

const getAnswers = (obj) => {
  const wrongAnswers = obj.wrongAnswers;
  shuffle(wrongAnswers);
  const correctAnswers = obj.correctAnswers;
  shuffle(correctAnswers);
  const answers = [...wrongAnswers.slice(0, 3), correctAnswers[0]];
  shuffle(answers);

  return answers;
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

for (let i = 0; i < questionList.length; i++) {
  shuffledQuestions.push(getAnswers(questionList[i]));
}

const GameField = () => {
  const questionIdx = useSelector((state) => state.qIdx);
  const question = questionList[questionIdx].question;
  const answers = shuffledQuestions[questionIdx];
  const [clicked, setClicked] = useState(false);

  return (
    <div className={styles.gamefield}>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.answers__wrapper}>
        {answers.map((answer, idx) => (
          <QuestionSvg
            key={idx}
            variant={variants[idx]}
            isCorrect={answer.isCorrect}
            answer={answer.content}
            clicked={clicked}
            setClicked={setClicked}
          />
        ))}
      </div>
    </div>
  );
};

export default GameField;
