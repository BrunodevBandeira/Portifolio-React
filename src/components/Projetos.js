import React from 'react'
import Modal from "./Modal";
import styles from "./Projetos.module.scss";


const Projetos = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className="App">

        <div>
          <button className={styles.btn} onClick={() => setIsModalVisible(true)}> Open2 </button>
          {isModalVisible ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
                                <h2> 
                              Projetos... 
                                </h2>
                            </Modal> ): null }
        </div>

      </section>
  );
}

export default Projetos