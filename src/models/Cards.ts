import Card from "./Card";
import { List } from "immutable";

export default interface Cards {
    [key: string] : List<Card>;
}[]