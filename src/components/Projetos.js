import React from 'react'
import Modal from "./Modal";
import styles from "./Projetos.module.scss";
import { dadosNode } from "../mocks/portifolioDados";


const Projetos = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className="App">

        <div>
          <button className={styles.btn} onClick={() => setIsModalVisible(true)}> Projetos </button>
          {true ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
                      <section className={styles.portfolio} id="projetos">
                          <div className={styles.stylesMainText}>
                              <h2><span> Meus </span> Projetos </h2>
                              <div className="{styles.mainTextMenu}  + js-tabmenu">

                                <p className={styles.reactreact} id="React"> 			
                                  React 
                                </p>

                                <p className={styles.Css} id="Css"> 				
                                  Css 
                                </p>

                                <p className={styles.Javascript} id="Javascript">  
                                  Javascript 
                                </p>

                                <p className={styles.Node} id="Node"> 				
                                  Node 
                                </p>

                              </div>
                          </div>

                          {/* {dadosNode.map(({image, title, text, link}, id) => (
                            // <div className="{styles.portfolioContent} js-tabcontent">
                            <div className={styles.portfolioContent} key={id}>
                              <section >
                                  <div className={styles.row} id="node">
                                    <img  className={styles.img} src={image} />
                                    <div className={styles.layer}>
                                      <h5> {title} </h5>
                                      <p> {text} </p>
                                      <a href={link} target="_blank">
                                        <i className='bx bx-link-external' ></i>
                                      </a>
                                    </div>
                                  </div>
                                </section>
                            </div>
                          ))} */}
                      </section>
                    </Modal> ): null }
        </div>

      </section>
  );
}

export default Projetos