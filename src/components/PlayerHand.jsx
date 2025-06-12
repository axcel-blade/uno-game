import React from "react";

const PlayerHand = ({ hand, onPlayCard }) => (
    <div className="flex flex-wrap gap-2 justify-center">
        {hand.map((card, index) => (
        <img
            key={index}
            src={`/cards/${card.color}_${card.value}.png`}
            alt={`${card.color} ${card.value}`}
            className="w-20 cursor-pointer"
            onClick={() => onPlayCard(index)}
        />
        ))}
    </div>
);

export default PlayerHand;
