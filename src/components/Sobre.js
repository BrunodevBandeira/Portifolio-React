import React from 'react';
import Modal from "./Modal";
import styles from "./Sobre.module.scss";
import { sobre } from "../mocks/dados";

const Sobre = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className={styles.Sobre}>
        <div>
          <button className={styles.btn} onClick={() => setIsModalVisible(true)}> Sobre </button>
          {isModalVisible ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
                {sobre.map(({ texto }) => (
                  <div className={styles.sobreContainer}>
                    <h2 className={styles.containerTxt}> {texto} </h2>
                    <div className={styles.containerDownload}>
                      <button className={styles.download}> 
                          <a className={styles.opa} href="../download/FRONT END-JR - BRUNO BANDEIRA.pdf" download="">Download CV</a> 
                        </button>
                      <button className={styles.perfil}> 
                       <a href="https://www.16personalities.com/br/personalidade-entj" target="_blank" > Perfil comportamental </a></button>
                    </div>
                  </div>
                ))}
                </Modal> ): null }
        </div>
      </section>
  );
}

export default Sobre