import React from 'react'
import Modal from "./Modal";
import styles from "./Contato.module.scss";


const Contato = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className="App">

        <div>
          <button className={styles.btn} onClick={() => setIsModalVisible(true)}> Contato </button>
          {isModalVisible ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
                                <h2> 
                               Contato.... 
                                </h2>
                            </Modal> ): null }
        </div>

      </section>
  );
}

export default Contato