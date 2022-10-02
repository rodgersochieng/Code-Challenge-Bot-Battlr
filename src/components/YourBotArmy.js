import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ botArmy, setBotArmy, setBots }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botArmy?.map((bot, i) => (
            <BotCard
              bot={bot}
              key={i}
              setBotArmy={setBotArmy}
              setBots={setBots}
              position="army"
            />
          ))}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
