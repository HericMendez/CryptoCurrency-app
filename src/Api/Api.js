import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins/",
});

//markets?vs_currency=brl&order=market_cap_desc&per_page=10&page=1&sparkline=false
const urlObj = {
  currency: "usd",
  perPage: "10",
  page: "1",
};

export const busca = async (setDado, money, coinPerPage, pageNo) => {
  urlObj.currency = money ? money : urlObj.currency;
  urlObj.perPage = coinPerPage ? coinPerPage : urlObj.perPage;
  urlObj.page = pageNo ? pageNo : urlObj.page;

  const url = `markets?vs_currency=${urlObj.currency}
&order=market_cap_desc&per_page=${urlObj.perPage}
&page=${urlObj.page}&sparkline=false`;
  try {
    const resposta = await api.get(url);
    setDado(resposta.data);
    console.log(resposta.data)

  } catch (error) {
    console.log(error);
  }
};
