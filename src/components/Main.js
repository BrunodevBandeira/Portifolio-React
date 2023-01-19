import React from 'react';
import styles from "./Main.module.scss";
import main from "../mocks/dados";

const Main = ({init}) => {


  return (
    // <header className={ init ? `${styles.black}` : "" }>
    <header>
      <section className={`${styles.container}`}>
        <div className={ init  ?  `${styles.cima}` : `${styles.contentCima}`}></div>
            {
              main.map(({nome}) => (
                <div className={styles.cell}>
                    <p className={ init ? `${styles.text}` : `${styles.hide}` }> 
                        {nome}  
                    </p>
                </div>
              ))
            }
        <div className={ init  ? `${styles.baixo}` : `${styles.contentBaixo}`}></div>
      </section>
    </header>
  )
}

export default Main