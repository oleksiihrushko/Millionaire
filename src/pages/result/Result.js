import React from "react";
import styles from "../home/Home.module.scss";
import hand from "../../images/hand.png";
import { questionList } from "../../questions.json";
import { useSelector } from "react-redux";

const Result = () => {
  const questionIdx = useSelector((state) => state.qIdx);

  return (
    <div className={`${styles.home} ${styles.home__result}`}>
      <img className={styles.hand} src={hand} alt="hand" />
      <div className={styles.wrapper}>
        <span>Total Score</span>
        {questionIdx === 0 ? (
          <h2 className={styles.result__title}>Nothing earned</h2>
        ) : (
          <h2>{questionList[questionIdx - 1].price}$ earned</h2>
        )}
        <a className={styles.link} href="/millionaire">
          Try again
        </a>
      </div>
    </div>
  );
};

export default Result;
