import { useEffect, useState } from "react";

import CoinsList from "./Components/CoinsList";
import Navbar from "./Components/Navbar";

import { busca } from "./Api/Api";


function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    busca(setCoins, "brl", "10", "1");
  }, []);

  return (
    <>
      <Navbar />
      <CoinsList coins={coins} />
    </>
  );
}

export default App;
