import React, { useState, useEffect} from 'react';
import { Modal } from './components/Modal/Modal';
import './App.css'

const App = () => {
  const [show, setShow] = useState(false);

  // close modal with esc button//
  useEffect(() => {
    const handleEsc = (e) => {
       if (e.keyCode === 27) {
       setShow(false)
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const closeModalHandler = () => setShow(false);

  return (
    <div className='button-modals'>
      { show ? <div onClick={closeModalHandler} className="back-drop"></div> : null }
      <div className="centered">
      <h3>Modal Using React js</h3>
      <button onClick={() => setShow(true)} className="btn-openModal">Click to show Modal</button>
      </div>
      <Modal show={show} close={closeModalHandler}  />
    </div>
  );
}

export default App;
