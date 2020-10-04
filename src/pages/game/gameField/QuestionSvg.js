import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import qIdxSlice from "../../../redux/qIdx/qIdxSlice";
import wrongAnswerSlice from "../../../redux/wrongAnswer/wrongAnswerSlice";
import styles from "./GameField.module.scss";

const svgCfg = {
  inactive: ["#D0D0D8", "white"],
  correct: ["#47D867", "#E6FAEA"],
  incorrect: ["#EC6259", "#FDEEED"],
};

const QuestionSvg = ({ variant, isCorrect, answer }) => {
  const [status, setStatus] = useState("inactive");

  const wrongAnswer = useSelector((state) => state.wrongAnswer);

  if (wrongAnswer && isCorrect) {
    status !== "correct" && setStatus("correct");
  }

  const dispatch = useDispatch();
  let history = useHistory();

  const clickHandler = () => {
    if (isCorrect) {
      setStatus("correct");
      setTimeout(() => {
        dispatch(qIdxSlice.actions.nextQuestion());
        setStatus("inactive");
      }, 2000);
    } else {
      setStatus("incorrect");
      dispatch(wrongAnswerSlice.actions.setWrongAnswer());
      setTimeout(() => {
        history.push("/result");
      }, 2000);
    }
  };

  return window.innerWidth < 1280 ? (
    <svg
      className={styles.svg}
      width="320"
      height="56"
      viewBox="0 0 320 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickHandler}
    >
      <path id="stroke1" d="M303 28L320 28" stroke={svgCfg[status][0]} />
      <path id="stroke2" d="M0 28L17 28" stroke={svgCfg[status][0]} />
      <path
        id="stroke3"
        d="M32.8175 5.31576C34.9762 2.29361 38.4615 0.5 42.1754 0.5H277.825C281.539 0.5 285.024 2.29361 287.183 5.31576L303.386 28L287.183 50.6842C285.024 53.7064 281.539 55.5 277.825 55.5H42.1754C38.4615 55.5 34.9762 53.7064 32.8175 50.6842L16.6145 28L32.8175 5.31576Z"
        fill={svgCfg[status][1]}
        stroke={svgCfg[status][0]}
      />
      <text x="40" y="34" fontSize="18" fill="#ff8b37">
        {variant}
      </text>
      <text x="70" y="33" fontSize="14" fill="#1C1C21">
        {answer}
      </text>
    </svg>
  ) : (
    <svg
      className={styles.svg}
      width="405"
      height="72"
      viewBox="0 0 405 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={clickHandler}
    >
      <path d="M388 36L405 36" stroke={svgCfg[status][0]} />
      <path d="M0 36L17 36" stroke={svgCfg[status][0]} />
      <path
        id="stroke3"
        d="M38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344Z"
        fill={svgCfg[status][1]}
        stroke={svgCfg[status][0]}
      />
      <text x="50" y="43" fontSize="20" fill="#ff8b37">
        {variant}
      </text>
      <text x="80" y="42" fontSize="18" fill="#1C1C21">
        {answer}
      </text>
    </svg>
  );
};

export default QuestionSvg;
