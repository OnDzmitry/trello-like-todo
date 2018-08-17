import Card from './Card';

export default interface Column {
    id: string,
    title: string,
    cards: Card[]
}