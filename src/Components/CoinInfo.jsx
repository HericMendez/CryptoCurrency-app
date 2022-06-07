import React, { useState } from "react";
import DOMPurify from "dompurify";
import wikisearch from "../Api/Wiki";

import "./CoinInfo.css";
const CoinInfo = (props) => {
  const [description, setDescription] = useState();

  wikisearch(props.coin.id, setDescription);


  
  console.log("wiki result: ", description);
  return (
    <div>
      <div className="coin-container">
        <div className="content">
          <h1>{props.coin.name}</h1>
        </div>
        <div className="content">
          <div className="rank">
            <span className="rank-btn">
              Rank # {props.coin.market_cap_rank}
            </span>
          </div>
          <div className="info">
            <div className="props.coin-heading">
              {props.coin.image ? <img src={props.coin.image} alt="" /> : null}
              <p>{props.coin.name}</p>
              {props.coin.symbol ? (
                <p>{props.coin.symbol.toUpperCase()}/USD</p>
              ) : null}
            </div>
            <div className="props.coin-price">
              {props.coin.current_price ? (
                <h1>${props.coin.current_price.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div className="content">
          <table>
            <thead>
              <tr>
                <th>1h</th>
                <th>24h</th>
                <th>7d</th>
                <th>30d</th>
                <th>200d</th>
                <th>1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {props.coin.price_change_percentage_1h_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_1h_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {props.coin.price_change_percentage_24h_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_24h_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {props.coin.price_change_percentage_7d_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_7d_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {props.coin.price_change_percentage_30d_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_30d_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {props.coin.price_change_percentage_200d_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_200d_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {props.coin.price_change_percentage_1y_in_currency ? (
                    <p>
                      {props.coin.price_change_percentage_1y_in_currency.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="content">
          <div className="stats">
            <div className="left">
              <div className="row">
                <h4>24 Hour Low</h4>
                {props.coin.low_24h ? (
                  <p>${props.coin.low_24h.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>24 Hour High</h4>
                {props.coin.high_24h ? (
                  <p>${props.coin.high_24h.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div className="row">
                <h4>Market Cap</h4>
                {props.coin.market_cap ? (
                  <p>${props.coin.market_cap.toLocaleString()}</p>
                ) : null}
              </div>
              <div className="row">
                <h4>Circulating Supply</h4>
                {props.coin.circulating_supply ? (
                  <p>{props.coin.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="content">
          <div className="about">
            <h3>About</h3>
            {description ? (
              <div>
                <p>{description}</p>
                <p>&nbsp;</p>
                <p>Text from <span className="text-[#00ffff]">Wikipedia</span></p>
              </div>
            ) : (
              <p>"Description unavaliable!"</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
