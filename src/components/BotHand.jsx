import React from "react";

const BotHand = ({ count }) => (
    <div className="flex gap-2 justify-center">
        {Array(count).fill(0).map((_, i) => (
        <img key={i} src="/cards/back.png" alt="Bot card" className="w-20" />
        ))}
    </div>
);

export default BotHand;