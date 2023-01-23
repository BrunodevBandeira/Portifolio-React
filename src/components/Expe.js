import React from 'react'
import Modal from "./Modal";
import styles from "./Expe.module.scss";


const Expe = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className={styles.Expe}>

        <div>
          <button  className={styles.btn} onClick={() => setIsModalVisible(true)}> Experiência </button>
          {isModalVisible ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
            <section className={styles.modalContainer}>

              <div className={styles.modalContainerLeft}>

                <div className={styles.modal}>
                  <div className={styles.xpText}>
                    <h2> 🤌 Bom <span> Valor! </span></h2>
                    <h4> 💻 Desenvolvedor Frontend </h4>
                    <p>
                    🧠 Trabalhava com <span> VueJS e Bootstrap</span>  
                    </p>

                    <ul className={styles.xpTextWork}>
                      <p className={styles.xpTextActivities}> Responsabilidades 😎 </p>
                      <li>  ✔️ Desenvolvimento FrontEnd - Vue com Bootstrap </li>
                      <li>  ✔️ Diagramação de layout com HTML5 / CSS / JS </li>
                      <li>  ✔️ Trabalhar com metodologia ágil </li>
                      <li>  ✔️ GIT </li>
                    </ul>


                    <div className={styles.xpTextButton}>
                       <a href="./cv/FRONT END-JR - BRUNO BANDEIRA.pdf" className={styles.btn} download=""> Download CV </a>
                    </div>
                  </div> 
                </div>

              </div>

              <div className={styles.modalContainerRight}>
                <div className={styles.xpTextContainer}>
                  <div>
                  <h2> 🤌 Mobocity <span>| Influ! </span></h2>
                    <h4> 💻 Desenvolvedor Frontend </h4>
                    <p>
                    🧠 Trabalhava com <span> VueJS, React e NodeJS </span>  
                    </p>
                    <ul>
                      <p className={styles.xpTextActivities}> Responsabilidades 😎 </p>
                      <li>  ✔️Desenvolvimento e suporte das aplicações para atender as necessidades dos produtos </li>
                      <li>  ✔️Construção de códigos com qualidade seguindo as melhores práticas </li>
                      <li>  ✔️Implantação de novas tecnologias aderentes ao produto  </li>
                      <li> ✔️Manutenção de micro e RPA</li>
                    </ul>
                    <div className={styles.perfil}>
                    <a href="https://www.16personalities.com/br/personalidade-entj" target="_blank" className={styles.per}> Perfil Comportamental </a>
                    </div>
                  </div>
                </div>
              </div>

            </section>
          </Modal> ): null }
        </div>

      </section>
  );
}

export default Expe