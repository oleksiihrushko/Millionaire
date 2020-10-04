import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Home.module.scss";
import hand from "../../images/hand.png";

const Home = () => {
  return (
    <div className={styles.home}>
      <img className={styles.hand} src={hand} alt="hand" />
      <div className={styles.wrapper}>
        <h2>Who wants to be mellionaire?</h2>
        <NavLink to="/game" className={styles.link}>
          Start
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
