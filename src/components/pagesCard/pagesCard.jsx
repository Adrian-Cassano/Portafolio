import React from "react";

import PAGES from "../../Array/Array";

import styles from "./pagesCard.module.css";

const pagesCard = () => {
  return (
    <div id={styles.MasterContainer}>
      {PAGES?.map((pag) => {
        return (
          <div key={pag.id}>
            <div id={styles.PagesName}>{pag.nombre}</div>
            <div id={styles.PagePhoto}>{pag.description}</div>
            <a id={styles.Link} href={pag.link}>Podes verla ingresado Aqui </a>
          </div>
        );
      })}
    </div>
  );
};
export default pagesCard;
