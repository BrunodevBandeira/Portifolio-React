import React from 'react'
import Modal from "./Modal";
import styles from "./Contato.module.scss";


const Contato = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className={styles.Contato}>

        <div>
          <button className={styles.btn} onClick={() => setIsModalVisible(true)}> Contato </button>
          {true ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
            <div className={styles.contatoContainer}>
              <div className={styles.contatoContainerLeft}>
                  <h1 className={styles.contatoTitle}> Meus <span> Contatos! </span> </h1>
                  <p className={styles.contatoP}> Em busca de desenvolvimento e experiência :) </p>
                  <p className={styles.contatoP2}> Quem sabe na sua <span> empresa ? </span> </p>
                  <p className={styles.contatoP3}> Estou disponível para bater um papo, você pode entrar em contato via e-mail <span> brunobandeira25ab@gmail.com </span> </p>

                  <div class={styles.contactIcons}>
                        <a href="https://www.linkedin.com/in/brunodevbandeira/" target="_blank">
                          <i class='bx bxl-linkedin' ></i>
                        </a>

                        <a href="https://github.com/BrunodevBandeira" target="_blank">
                          <i class='bx bxl-github' ></i>
                        </a>

                        <a href="https://www.instagram.com/xx.bandeira.xx/" target="_blank">
                          <i class='bx bxl-instagram-alt' ></i>
                        </a>
                </div>
              </div>
              
                <div className={styles.contatoContainerRight}></div>
            </div>
        </Modal> ): null }
        </div>

      </section>
  );
}

export default Contato