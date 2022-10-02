import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, setBotArmy, setBots }) {
  // Your code here
  return (
    <div className="ui four column grid">
      <div className="row">
        {bots?.map((bot, i) => (
          <BotCard
            bot={bot}
            key={i}
            setBotArmy={setBotArmy}
            setBots={setBots}
            position="list"
          />
        ))}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
