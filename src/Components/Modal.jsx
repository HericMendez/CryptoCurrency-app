import { useState, useCallback } from "react";
import CoinInfo from "./CoinInfo";


import useOutsideClick from "../Hooks/useOutsideClick";
import useKeypress from "../Hooks/useKeypress";

const Modal = (props) => {
  console.log(props.data);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const escFunction = useCallback((event) => {
    if (event.keyCode === 27) {
      console.log("esc pressed");
      setClick(false);
    }
  }, []);

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const handleClickOutside = () => {
    setClick(false);
  };
  //Faz o modal se fechar quando pressionada a tecla Esc
  useKeypress(escFunction);
  //Faz o modal se fechar quando clicado fora do componente
  const ref = useOutsideClick(handleClickOutside);

  return (
    <div onClick={handleModalClick} ref={ref}>
      <div className="block" onClick={handleClick}>
        {props.element}
      </div>
      <ul
        className={
          click? 
            `fixed flex-col 
            justify-center 
            items-center 
            top-0 left-0 
            w-[85vw] h-screen
            text-center 
            duration-300
            bg-[#080808]
            z-10 `
            : 
            `fixed flex-col 
            justify-center 
            items-center top-0 
            left-[-100%] w-full h-screen
            text-center 
            duration-300
            bg-[#080808]
            -z-1 `
        }
      >
        <CoinInfo coin={props.data} />
      </ul>
    </div>
  );
};

export default Modal;
