import React from 'react';
import './Modal.css';

export const Modal = ({ show, close, esc }) => {
  return (
    <div className="modal-wrapper" onKeyDown={esc}
      style={{
        transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
        opacity: show ? '1' : '0'
      }}
    >
      <div className="modal-header">
        <p> Header Modal</p>
        <span onClick={close}  className="close-modal-btn">X</span>
      </div>
      <div className="modal-content">
     
        <h5 className="note"> Note : Click X, tombol ESC Dan klik di luar modal untuk menutup</h5>
           
            <h4>Hai, I'am Yusuf Alfi</h4>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae accusantium velit, ratione ad inventore, tenetur nam consectetur quaerat veritatis voluptatibus libero excepturi odio laborum eaque ut nisi laudantium beatae sapiente.
            Enim ducimus repellendus consectetur quaerat veniam nesciunt nobis, nemo laudantium repellat assumenda cupiditate rerum quo quidem soluta numquam alias rem laboriosam est deserunt eos! Nihil sit nemo vero recusandae nulla!
            Fugit distinctio harum, eius deserunt voluptatum ipsum omnis accusantium rem esse delectus quia quidem sed aut minus eos repudiandae laboriosam nemo magnam possimus optio, modi vero ducimus. Maxime, similique esse?
            Cumque cum blanditiis minima m odi aspernatur accusamus quam consectetur eius </p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae accusantium velit, ratione ad inventore, tenetur nam consectetur quaerat veritatis voluptatibus libero excepturi odio laborum eaque ut nisi laudantium beatae sapiente.
            Enim ducimus repellendus consectetur quaerat veniam nesciunt nobisius </p>

      
      </div>
      <div className="modal-footer">
         <p>footer Modal || Made with <span>❤</span></p>
      </div>

    </div>
  )
};