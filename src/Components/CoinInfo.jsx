import { api } from "../Api/Api";
import React, { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const CoinInfo = (props) => {
  const [coin, setCoin] = useState({});

  useEffect(() => {
    api
      .get(`/${props.coin.id}`)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <div
        className="
          max-w-[85vw]
          max-h-[100vh]
          md:max-w-[800px]
          my-4 mx-auto 
          pt-4 pb-8 px-4
          opacity-100
          "
      >
        <div
          className="
            mx-auto py-1 
            max-w-[85vw]
            bg-[#26272b] 
            shadow-['#18191b'] 
            rounded-lg 
            text-xl

            "
        >
          <h1>
            <span
              className="
                bg-[#6900ff] 
                  border-2 border-[#6900ff] 
                  rounded-xl p-1
                  "
            >
              Rank # {coin.market_cap_rank}
            </span>{" "}
            &nbsp; &nbsp; {coin.name}{" "}
          </h1>
        </div>
        <div>
          <div
            className="
                info 
                max-w-[85vw] 
                bg-[#26272b] 
                shadow-['#18191b'] 
                rounded-lg my-2
                "
          >
            <div className="flex items-center my-2 mx-4">
              {coin.image ? <img src={coin.image.small} alt="" /> : null}
              <p className="pr-4">{coin.name}</p>
              {coin.symbol ? (
                <p className="pr-4">{coin.symbol.toUpperCase()}/USD</p>
              ) : null}
            </div>
            <div className="flex items-center justify-center">
              {coin.market_data?.current_price ? (
                <h1>${coin.market_data.current_price.usd.toLocaleString()}</h1>
              ) : null}
            </div>
          </div>
        </div>

        <div
          className="
            flex 
            mx-auto py-2 
            max-w-[85vw] 
            bg-[#26272b] 
            shadow-['#18191b'] 
            rounded-lg 
            items-center
            "
        >
          <table className="my-2 mx-auto w-full p-2">
            <thead>
              <tr className="text-center bg-[#444]">
                <th className="p-2 text-center ">1h</th>
                <th className="p-2 text-center">24h</th>
                <th className="p-2 text-center">7d</th>
                <th className="p-2 text-center">14d</th>
                <th className="p-2 text-center">30d</th>
                <th className="p-2 text-center">1yr</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-2 text-center">
                  {coin.market_data?.price_change_percentage_1h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(
                        1
                      )}
                      %
                    </p>
                  ) : null}
                </td>
                <td>
                  {coin.market_data?.price_change_percentage_24h_in_currency ? (
                    <p>
                      {coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(
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
        <div
          className="
              mx-auto my-4 
              py-2 px-4 
              max-w-[85vw] 
              bg-[#26272b] 
              shadow-['#18191b'] 
              rounded-lg 
              "
        >
          <div
            className="
              grid grid-cols-1 
              md:grid-cols-2 
              justify-between 
          "
          >
            <div className="left">
              <div
                className="
                  flex 
                  justify-between 
                  border-b-2
                  border-b-[#d3d3d3] 
                  my-5 mx-2 pb-2
                  "
              >
                <h4>24 Hour Low</h4>
                {coin.market_data?.low_24h ? (
                  <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div
                className="
                  flex 
                  justify-between 
                  border-b-2
                  border-b-[#d3d3d3] 
                  my-5 mx-2 pb-2
                  "
              >
                <h4>24 Hour High</h4>
                {coin.market_data?.high_24h ? (
                  <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
                ) : null}{" "}
              </div>
            </div>
            <div className="right">
              <div
                className="
                  flex 
                  justify-between 
                  border-b-2
                  border-b-[#d3d3d3] 
                  my-5 mx-2 pb-2
                  "
              >
                <h4 className="">Market Cap</h4>
                {coin.market_data?.market_cap ? (
                  <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
                ) : null}
              </div>
              <div
                className="
                  flex 
                  justify-between 
                  border-b-2
                  border-b-[#d3d3d3] 
                  my-5 mx-2 pb-2
                  "
              >
                <h4>Circulating Supply</h4>
                {coin.market_data ? (
                  <p>{coin.market_data.circulating_supply}</p>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div
          className="
            mx-auto my-4 
            pt-2 pb-8 
            max-w-[85vw] 
            bg-[#26272b] 
            shadow-['#18191b'] 
            rounded-lg 
            "
        >
          <div className="px-4 md:px-8">
            <h3 className="my-4 mx-0 text-xl ">About</h3>
            <p
              className=" 
                pb-12 
                text-justify 
                max-h-[200px] 
                overflow-hidden 
                hover:overflow-y-auto
                "
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(
                  coin.description ? coin.description.en : ""
                ),
              }}
            ></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinInfo;
