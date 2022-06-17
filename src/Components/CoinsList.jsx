import React from "react";
import CoinItem from "./CoinItem";

import Modal from "./Modal";


const CoinsList = (props) => {
  return (
    <div className="max-w-6xl m-auto">
      {" "}
      {/*Container class div */}
      <div
        className="
          flex 
          justify-between 
          items-center
          bg-[#26272b] 
          shadow-md 
          shadow-[#18191b] 
          mx-4 my-4 
          px-4 py-4 
          font-bold
          rounded-md"
      > {/*heading div class*/}
        <p>#</p>
        <p>Coin</p>

        <p>Price</p>
        <p>24h</p>
        {/*hidden in mobile, visible in desktop*/}
        <p className="hidden md:flex ">Volume</p> 
        <p className="hidden md:flex">Mkt Cap</p>
      </div>
      {props.coins.map((coins) => {
        return (
          <>
            <Modal
              element={<CoinItem coins={coins} key={coins.id} />}
              data={coins}
            />
          </>
        );
      })}
    </div>
  );
};

export default CoinsList;
