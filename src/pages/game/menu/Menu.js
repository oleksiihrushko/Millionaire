import React from "react";
import { useSelector } from "react-redux";
import { questionList } from "../../../questions.json";

import styles from "./Menu.module.scss";
import MenuSvg from "./MenuSvg";

const Menu = () => {
  const questionIdx = useSelector((state) => state.qIdx);

  return (
    <div className={styles.menu}>
      <div className={styles.svg__wrapper}>
        {questionList.map((obj, idx) =>
          questionIdx === idx ? (
            <MenuSvg
              key={obj.price}
              price={obj.price}
              color={"#FF8B37"}
              fontColor={"#FF8B37"}
            />
          ) : questionIdx < idx ? (
            <MenuSvg
              key={obj.price}
              price={obj.price}
              color={"#D0D0D8"}
              fontColor={"#1C1C21"}
            />
          ) : (
            <MenuSvg
              key={obj.price}
              price={obj.price}
              color={"#D0D0D8"}
              fontColor={"#D0D0D8"}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
