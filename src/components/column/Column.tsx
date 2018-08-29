import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";
import CardModel from "../../models/Card";
import ColumnModel from "../../models/Column";
import { Draggable,Droppable } from 'react-beautiful-dnd';

export interface ColumnProps {
    className?: string,
    id: string,
    index: number,
    data: ColumnModel,
    cards?: CardModel[],
    openCardDialog: Function
    closeCardDialog: Function
}

export class Column extends React.Component<ColumnProps, {}> {
    constructor(props: ColumnProps) {
        super(props);
        
    }
    renderCards() {
        const { cards } = this.props.data;
        
        return cards.map((card, index) => {
            return <Card data={card} index={index}/>;
        });
    }
    openCardDialog = () => {
        this.props.openCardDialog(this.props.id);
    }
    render() {
        return (
            <Draggable draggableId={this.props.data.id} index={this.props.index}>
                {(provided, snapshot) => (
                    <div className="c-column"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className="c-column-title">
                            {this.props.data.title}
                        </div>
                    <Droppable droppableId={this.props.id} type="CARD">
                        {(provided, snapshot) => (
                            <div ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}>
                            <List style={{maxHeight: "100%", overflow: "auto"}}  >
                                {this.renderCards()}
                            </List>
                            </div>
                        )}
                    </Droppable>
                    <Button 
                        variant="text"
                        fullWidth={true}
                        style={{textTransform: "none"}}
                        onClick={this.openCardDialog}
                    >
                        Add a card...
                    </Button>
                </div>
                )}
            </Draggable>
        );
    }
}