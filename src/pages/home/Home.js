import React from "react";
import styles from "./Home.module.scss";
import hand from "../../images/hand.png";
import { useDispatch } from "react-redux";
import pageSlice from "../../redux/page/pageSlice";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <div className={styles.home}>
      <img className={styles.hand} src={hand} alt="hand" />
      <div className={styles.wrapper}>
        <h2>Who wants to be mellionaire?</h2>
        <button
          className={styles.link}
          onClick={() => dispatch(pageSlice.actions.setPage("game"))}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Home;
