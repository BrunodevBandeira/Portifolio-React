import React from 'react';
import styles from "./Main.module.scss";
import { main } from "../mocks/dados";
import Modal from "./Modal";

const Main = ({init}) => {

  const [ isModalVisible, setIsModalVisible] = React.useState(false);

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
              <button id="opa" className={styles.btn}  onClick={() => setIsModalVisible(true)}> 
                      Sobre 
              </button>
              {isModalVisible ? (<Modal onClose={() => {setIsModalVisible(false)}}> 
                                <h2> 
                                Formado em Engenharia da computação e pelo prestigiado Bootcamp da Generation Brasil como Desenvolvedor FullStack Java , Atuo na area de desenvolvimento a 2 anos, fui monitor de sala, ajudando os alunos a resolver as listas de algoritmo e estrutura de dados em Java e bando de dados MySQL. Em 2020 conclui meu Bootcamp pelo IGTI e pela Digital Inovation One focados no Frontend para finalizar, escolhi a área de TI pois gosto de desafios, tecnologia, empreendedorismo e da liberdade de criação que essa área tem. 
                                </h2>
                            </Modal> ): null }
              {/* <button className={styles.btn}> Projetos </button>
              <button className={styles.btn}> Experiência </button>
              <button className={styles.btn}> Contato </button> */}
          </div>
      </section>
    </header>
  )
}

export default Main;

