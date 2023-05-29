import React from "react";

import PAGES from "../../Array/Array";

import styles from "./pagesCard.module.css";

const pagesCard = () => {
  return (
    <div id={styles.MasterContainer}>
      {PAGES?.map((pag) => {
        return <div>{pag.nombre}</div>;
      })}
    </div>
  );
};
export default pagesCard;
