import { create } from "zustand";

type CardStore = {
    card: Card[],
    setCard: (card: Card) => void;
    removeCard: (index: number) => void
}

export type Card = {
    name: string,
    description: string
}

export const useCardStore = create<CardStore>((set) => ({
    card: [
        
    ],
    setCard: (card: Card) => set((state) => {
        return {
            card: [...state.card, card]
        }
    }),
    removeCard: (index) => set((state) => {
        const newCard = [...state.card]
        console.log(newCard)
        newCard.splice(index, 1)
        return {card: newCard}
    })
}))