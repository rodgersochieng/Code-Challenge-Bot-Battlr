import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  const baseUrl = "http://localhost:8002/bots";

  //get bots
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(function populateBots() {
    fetch(baseUrl)
      .then((response) => response.json())
      .then((result) => {
        console.log("Bots:" + result);
        setBots(result);
      });
  }, []);

  return (
    <div>
      <YourBotArmy
        botArmy={botArmy}
        setBotArmy={setBotArmy}
        setBots={setBots}
      />
      <BotCollection bots={bots} setBotArmy={setBotArmy} setBots={setBots} />
    </div>
  );
}

export default BotsPage;
