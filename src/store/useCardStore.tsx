import { create } from "zustand";

type CardStore = {
    card: Card[],
    setCard: (card: Card) => void;
    removeCard: (index: number) => void
}

export type Card = {
    name: string,
    description: string
    removeCard: (index: number) => void
}

export const useCardStore = create<CardStore>((set) => ({
    card: [],
    setCard: (card: Card) => set((state) => {
        return {
            card: [...state.card, card]
        }
    }),
    removeCard: (index) => set((state) => {
        const newCard = [...state.card]
        newCard.splice(index, 1)
        return {card: newCard}
    })
}))