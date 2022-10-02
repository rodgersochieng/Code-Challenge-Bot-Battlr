import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};
export default function BotCard({ bot, setBotArmy, setBots, position }) {
  function handleBotClick(e) {
    console.log("Bot Clicked: ID: " + bot.id);

    e.stopPropagation();

    setBotArmy((currentArmy) => {
      currentArmy = [...currentArmy];

      if (currentArmy.includes(bot)) {
        if (position === "army") {
          // remove bot from army
          currentArmy.splice(currentArmy.indexOf(bot), 1);
        }
      } else {
        // add bot to army
        currentArmy.push(bot);
      }

      console.log(
        "Army:" + typeof currentArmy + " Size: " + currentArmy.length
      );
      return currentArmy;
    });
  }

  function dischargeBot(e) {
    e.stopPropagation();

    fetch(`http://localhost:8002/bots/${bot.id}`, { method: "DELETE" }).then(
      (response) => {
        // remove from army
        setBotArmy((currentArmy) => {
          currentArmy = [...currentArmy];

          if (currentArmy.includes(bot)) {
            // remove bot from army
            currentArmy.splice(currentArmy.indexOf(bot), 1);
          }
          return currentArmy;
        });

        // remove from list
        setBots((currentBots) => {
          currentBots = [...currentBots];
          currentBots.splice(currentBots.indexOf(bot), 1);
          return currentBots;
        });
      }
    );
  }

  return (
    <div className="ui column">
      <div className="ui card" key={bot.id} onClick={(e) => handleBotClick(e)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={(e) => dischargeBot(e)}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}
