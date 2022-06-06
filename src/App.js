
import { useEffect, useState } from "react";
import Coins from "./Components/Coins";
import Navbar from "./Components/Navbar";
import { busca } from "./Api/Api";

function App() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    (busca(setCoins, 'brl', '10', '1'));
  }, []);

  return (
    <>
      <Navbar />
      <Coins coins={coins} />
    </>
  );
}

export default App;
