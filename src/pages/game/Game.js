import React, { useState } from "react";
import styles from "./Game.module.scss";
import GameField from "./gameField/GameField";
import Menu from "./menu/Menu";

const Game = () => {
  const [translateX, setTranslateX] = useState("100vw");
  const [showMenu, setShowMenu] = useState(false);

  const toggleOpenMenu = () => {
    if (translateX === "100vw") {
      setShowMenu(true);
      setTimeout(() => {
        setTranslateX("0");
      }, 0);
    } else {
      setTranslateX("100vw");
      setTimeout(() => {
        setShowMenu(false);
      }, 600);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.game}>
        {window.innerWidth < 768 && (
          <button
            className={styles.menu__btn}
            onClick={toggleOpenMenu}
          ></button>
        )}
        <GameField />
      </div>
      {window.innerWidth < 768 ? (
        showMenu && (
          <div
            className={styles.menu}
            style={{ transform: `translateX(${translateX})` }}
          >
            <button
              className={`${styles.menu__btn} ${styles.menu__btnClose}`}
              onClick={toggleOpenMenu}
            ></button>
            <Menu />
          </div>
        )
      ) : (
        <div className={styles.menu}>
          <Menu />
        </div>
      )}
    </div>
  );
};

export default Game;
