import React from 'react';
import "./App.scss";
import Main from "./components/Main";

const App = ({init}) => {

  const [load, setLoad] = React.useState(false);
  
    React.useEffect(() => {
      setLoad(true);
    }, []);

  return (
    // <div className='asa'>
    <div>
       <Main init={load} />
    </div>
  )
}

export default App;