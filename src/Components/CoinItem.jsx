import React from "react";

const CoinItem = (props) => {
  return (
    <div
      className="
        flex 
        justify-between
        items-center
        bg-[#26272b]
        shadow-md 
        shadow-[#18191b]
        rounded-md
        m-4 p-4
        hover:scale-105 
        duration-500
        cursor-pointer
    "
    >{/*coin-row div class*/}
      <p>{props.coins.market_cap_rank}</p>
      <div className="flex items-center"> {/*img-symbol class */}
        <img className="h-[40px] mr-4 w-auto" src={props.coins.image} alt="coin symbol" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>

      <p>{props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className="hidden sm:flex">
        {props.coins.total_volume.toLocaleString()}
      </p>
      <p className="hidden sm:flex">
        {props.coins.market_cap.toLocaleString()}
      </p>
    </div>
  );
};

export default CoinItem;
