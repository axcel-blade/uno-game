export const COLORS = ["red", "blue", "green", "yellow"];
export const VALUES = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "skip", "reverse", "draw2"];
export const SPECIALS = ["wild", "wild_draw4"];

export function generateDeck() {
    const deck = [];

    COLORS.forEach(color => {
        VALUES.forEach(value => {
        deck.push({ color, value });
        if (value !== "0") deck.push({ color, value });
        });
    });

    SPECIALS.forEach(special => {
        for (let i = 0; i < 4; i++) {
        deck.push({ color: "black", value: special });
        }
    });

    return shuffle(deck);
}

export function shuffle(array) {
    let a = [...array];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

export function isPlayable(card, topCard) {
    return (
        card.color === topCard.color ||
        card.value === topCard.value ||
        card.color === "black"
    );
}