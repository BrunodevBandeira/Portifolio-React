import React from 'react';
import styles from "./Main.module.scss";
import main from "../mocks/dados";

const Main = ({init}) => {

  return (
    <header>

      <section className={`${styles.container}`}>
      <div className={styles.icon}></div>
          <div className={ init ? `${styles.cima}` : `${styles.contentCima}`}></div>
              {
                main.map(({nome}) => (
                  <div key={nome} className={ init ? `${styles.div}` : `${styles.hide}` }>
                      <p className={ init ? `${styles.text}` : `${styles.hide}` }> 
                          {nome}  
                      </p>
                  </div>
                ))
              }
          <div className={ init  ? `${styles.baixo}` : `${styles.contentBaixo}`}></div>
          <div className={ init ? `${styles.buttons}` : ""}>
            <button className={styles.btn}> Sobre </button>
            <button className={styles.btn}> Projetos </button>
            <button className={styles.btn}> Experiência </button>
            <button className={styles.btn}> Contato </button>
          </div>
      </section>
    </header>
  )
}

export default Main