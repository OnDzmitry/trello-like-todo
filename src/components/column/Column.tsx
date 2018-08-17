import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";
import CardModel from "../../models/Card";

export interface ColumnProps { 
    className?: string,
    id : string,
    title : string,
    cards?: CardModel[],
    openCardPopup: Function
    closeCardPopup: Function
}

export class Column extends React.Component<ColumnProps, {}> {
    constructor(props: ColumnProps) {
        super(props);
        this.state = {title : "New column"};
        this.openCardPopup = this.openCardPopup.bind(this);
    }
    renderCards() {
        const { cards } = this.props;

        return cards.map((card) => {
            return <Card title={card.title} text={card.text}/>;
        });
    }
    openCardPopup() {
        this.props.openCardPopup(this.props.id);
    }
    render() {
        return (                
            <div className="c-column">
                <div className="c-column-title">{this.props.title}</div>
                <List>
                    {this.renderCards()}
                </List>
                <Button 
                    variant="text" 
                    fullWidth={true} 
                    style={{textTransform: "none"}} 
                    onClick={this.openCardPopup}
                >
                    Add a card...
                </Button>
            </div>
        );
    }
}