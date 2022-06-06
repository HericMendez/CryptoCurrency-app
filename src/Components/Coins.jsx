import React from "react";
import CoinItem from "./CoinItem";
import './Coins.css'

const Coins = (props) => {
  return <div className="container">
    <div className="heading">
    <p>#</p>
    <p>Coin</p>
    <p className="hide-mobile">Name</p>
    <p>Price</p>
    <p>24h</p>
    <p className="hide-mobile">Volume</p>
    <p className="hide-mobile">Mkt Cap</p>
    </div>
    {props.coins.map((coins)=>{
      return (
        <CoinItem coins={coins} key={coins.id} />
      )
    } )}
  </div>;
};

export default Coins;
