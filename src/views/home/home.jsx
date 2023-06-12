import React from "react";

import fotoperfil from "../../Img/FotoCvChica.png";
import gitHub from "../../Img/GitHub.png";
import linkedin from "../../Img/Linkedin.png";
import whatsapp from "../../Img/WhatsApp.png";

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
          <div className={styles.NavBarItemContainer}>
            <a className={styles.NavBarItem} href="#adrianCassano">
              Adrian Cassano
            </a>
          </div>
          <div className={styles.NavBarItemContainer}>
            <a className={styles.NavBarItem} href="#sobreMi">
              Sobre mi
            </a>
          </div>
          <div className={styles.NavBarItemContainer}>
            <a className={styles.NavBarItem} href="#portafolio">
              Portafolio
            </a>
          </div>
          <div className={styles.NavBarItemContainer}>
            <a className={styles.NavBarItem} href="#educacion">
              Educacion
            </a>
          </div>
        </div>
      </div>
      <section className={styles.Section} id="adrianCassano">
        <div className={styles.InfoContainer}>
          <div className={styles.Titulo}>Adrian Cassano</div>
          <div>Bienvenidos a mi portafolio como desarrollador fronted</div>
          <div>
            Si quieres ponerte en contacto conmigo a{" "}
            <a href="https://wa.link/j2l168">
              <img src={whatsapp} alt="WhatsApp" />
            </a>
            <a href="https://www.linkedin.com/in/adrian-cassano-938766263/">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="https://github.com/Adrian-Cassano/AC-ARG">
              <img src={gitHub} alt="github" />
            </a>
          </div>
        </div>
      </section>
      <div className={styles.Barra}>BARRA</div>
      <section className={styles.Section} id="sobreMi">
        <div className={styles.InfoContainer}>
          <div className={styles.Titulo}>Sobre Mi</div>
          <div>
            Empecé mis estudios como desarrollador fronted por mi cuenta por
            cursos en internet, HTML, CSS, JavaScript, Estructura de datos
            después continúe con React, Redux(RTK), Hooks, Promesas, Node.js.
            Los cuales implemente en mis paginas que mostrare a continuacion
          </div>
        </div>
      </section>
      <div className={styles.Barra}>BARRA</div>
      <section className={styles.Section} id="portafolio">
        <div className={styles.InfoContainer}>
          <div className={styles.Titulo}>Portafolio</div>
          <div>
            <PagesCard />
          </div>
        </div>
      </section>
      <div className={styles.Barra}>BARRA</div>
      <section className={styles.Section} id="educacion">
        <div className={styles.InfoContainer}>
          <div className={styles.Titulo}>Educacion</div>
          <div>
            Estudie por mi cuenta con cursos de Udemy Y otros cursos de
            desarrollo web, me capacite tecnologías como JavaScript, React.js,
            Redux(RTK), HTML, CSS, CSS Modules, Node.js, GIT / GITHUB los cuales
            utilice en mis dos proyectos.Tambien tengo conocimeintos de Backend
            pero nos los implemente
          </div>
        </div>
      </section>
    </div>
  );
};

export default home;
