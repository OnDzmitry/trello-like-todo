import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";
import CardModel from "../../models/Card";

export interface ColumnProps { 
    className?: string,
    id : string,
    title? : string,
    cards?: CardModel[],
    openCardDialog: Function
    closeCardDialog: Function
}

export class Column extends React.Component<ColumnProps, {}> {
    constructor(props: ColumnProps) {
        super(props);
    }
    renderCards() {
        const { cards } = this.props;
        
        return cards.map((card) => {
            return <Card data={card}/>;
        });
    }
    openCardDialog = () => {
        this.props.openCardDialog(this.props.id);
    }
    render() {
        return (                
            <div className="c-column">
                <div className="c-column-title">{this.props.title}</div>
                <List style={{maxHeight: "100%", overflow: "auto"}}>
                    {this.renderCards()}
                </List>
                <Button 
                    variant="text" 
                    fullWidth={true} 
                    style={{textTransform: "none"}} 
                    onClick={this.openCardDialog}
                >
                    Add a card...
                </Button>
            </div>
        );
    }
}