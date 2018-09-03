import Card from './Card';
import { List } from 'immutable';

export default interface Column {
    id: string,
    title: string,
    cards?: List<Card>,
}