import React from 'react'
import Modal from "./Modal";
import styles from "./Expe.module.scss";


const Expe = () => {

  const [isModalVisible, setIsModalVisible] = React.useState(false);

  return(
      <section className="App">

        <div>
          <button  className={styles.btn} onClick={() => setIsModalVisible(true)}> Open2 </button>
          {isModalVisible ? (<Modal  onClose={() => {setIsModalVisible(false)}}> 
                                <h2> 
                               Expe.... 
                                </h2>
                            </Modal> ): null }
        </div>

      </section>
  );
}

export default Expe