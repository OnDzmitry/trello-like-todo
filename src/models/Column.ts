import Card from './Card';

export default interface Column {
    id: number,
    title: string,
    cards: Card[]
}