import React from "react";
import classNames from "classnames";
import { AiFillHeart } from "react-icons/ai";
import { BsChatSquareFill } from "react-icons/bs";
import styles from "./Card.module.css";

const Card = ({ title, likes, order }) => {
  return (
    <div className={classNames([styles.wrapper, styles.wrapperAnime])}>
      <div className={styles.textWrapper}>
        <h1 className={styles.text}>{`${order}. ${title}`}</h1>
      </div>
    </div>
  );
};

export default Card;