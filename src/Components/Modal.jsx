
import { useState, useCallback} from "react";
import CoinInfo from "./CoinInfo";
import "./Modal.css";

import useOutsideClick from "../Hooks/useOutsideClick";
import useKeypress from "../Hooks/useKeypress";

const Modal = (props) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


    
  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      console.log("esc pressed");
      setClick(false)
    }
  }, []);

  

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleClickOutside = () =>{
      setClick(false)
  }
  //Faz o modal se fechar quando pressionada a tecla Esc
  useKeypress(escFunction)
  //Faz o modal se fechar quando clicado fora do componente
  const ref = useOutsideClick(handleClickOutside);


  return (
    <div onClick={handleModalClick} ref={ref}>
              <div className="element" onClick={handleClick} >
  {props.element} 
      </div>
      <ul className={click ? "modal active" : "modal"} >
            {props.data.id}
            <p onClick={handleClick}>[FECHAR]</p>
            <CoinInfo coin={props.data} />
      </ul>

    </div>
  );
};

export default Modal;
