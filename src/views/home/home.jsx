import React from "react";

import fotoperfil from "../../Img/FotoCvChica.png";
import PagesCard from "../../components/pagesCard/pagesCard";

import styles from "./home.module.css";

const home = () => {
  return (
    <div id={styles.MasterContainer}>
      <div id={styles.NavBarcontainer}>
        <div id={styles.FotoContainer}>
          <img id={styles.Foto} src={fotoperfil} alt="foto" />
        </div>
        <div id={styles.NavBar}>
          <div className={styles.NavBarItem}>Adrian Cassano</div>
          <div className={styles.NavBarItem}>Sobre mi</div>
          <div className={styles.NavBarItem}>Portafolio</div>
          <div className={styles.NavBarItem}>Educacion</div>
          <div className={styles.NavBarItem}>Habilidades</div>
          <div className={styles.NavBarItem}>Contacto</div>
        </div>
      </div>
      <div className={styles.InfoContainer}>
        <div className={styles.Titulo}>Adrian Cassano</div>
        <div>Bienvenidos a mi portafolio como desarrollador fronted</div>
        <div>Si quieres ponerte en contacto conmigo a </div>
        <button id={styles.Button}>Descarga mi cv</button>
        <div>Iconos</div>
      </div>
      <div className={styles.Barra}>BARRA</div>
      <div className={styles.InfoContainer}>
        <div className={styles.Titulo}>Sobre Mi</div>
        <div>
          Empecé mis estudios como desarrollador fronted por mi cuenta por
          cursos en internet, HTML, CSS, JavaScript, Estructura de datos después
          continúe con React, Redux, Hooks, Promesas, Node.js. Los cuales
          implemente en mis paginas que mostrare a continuacion
        </div>
      </div>
      <div className={styles.Barra}>BARRA</div>
      <div className={styles.InfoContainer}>
        <div className={styles.Titulo}>Portafolio</div>
        <div>
        <PagesCard/>
        </div>
      </div>
    </div>
  );
};

export default home;
