import React from "react";
import styles from "./GameField.module.scss";
import QuestionSvg from "./QuestionSvg";
import { questionList } from "../../../questions.json";
import { useSelector } from "react-redux";

const getAnswers = (obj) => {
  const wrongAnswers = obj.wrongAnswers;
  shuffle(wrongAnswers); //перемешиваем все неправильные
  const correctAnswers = obj.correctAnswers;
  shuffle(correctAnswers); //перемешиваем все правильные
  const answers = [...wrongAnswers.slice(0, 3), ...correctAnswers.slice(0, 1)]; //складываем 3 неправильных ответа и 1 правильный
  shuffle(answers); //перемешиваем доступные ответы

  return answers;
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let shuffledQuestions = [];

for (let i = 0; i < questionList.length; i++) {
  shuffledQuestions.push(getAnswers(questionList[i]));
}

const vars = ["A", "B", "C", "D"];

const GameField = () => {
  const questionIdx = useSelector((state) => state.qIdx);
  const question = questionList[questionIdx].question;
  const answers = shuffledQuestions[questionIdx];

  return (
    <div className={styles.gamefield}>
      <h2 className={styles.question}>{question}</h2>
      <div className={styles.answers__wrapper}>
        {answers.map((answer, idx) => (
          <QuestionSvg
            key={idx}
            variant={vars[idx]}
            isCorrect={answer.isCorrect}
            answer={answer.content}
          />
        ))}
      </div>
    </div>
  );
};

export default GameField;
