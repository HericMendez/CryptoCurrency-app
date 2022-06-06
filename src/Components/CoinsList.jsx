import React from "react";
import CoinItem from "./CoinItem";
import "./Coins.css";
import Modal from "./Modal";

const CoinsList = (props) => {
  return (
    <div className="container">
      <div className="heading">
        <p>#</p>
        <p>Coin</p>

        <p>Price</p>
        <p>24h</p>
        <p className="hide-mobile">Volume</p>
        <p className="hide-mobile">Mkt Cap</p>
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
