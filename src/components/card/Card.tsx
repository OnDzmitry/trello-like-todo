import * as React from "react";
import { List, Button } from "@material-ui/core";
import CardModel from "../../models/Card";
import Subject from "@material-ui/icons/Subject";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

export interface CardProps {
    className?: string;
    data: CardModel;
    index: number;
}

export class Card extends React.Component<CardProps, {}> {
    constructor(props: CardProps) {
        super(props);
    }
    render() {
        return (
            <Draggable key={this.props.data.id} draggableId={this.props.data.id} index={this.props.index}>
                {(provided, snapshot) => (  
                <div 
                    className="c-card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div className="c-card-title">{this.props.data.title}</div>
                    <Button
                        size="small"
                        style={{ minWidth: "24px", padding: 2, margin: "0 0 5px 5px" }}
                        aria-label="Add"
                    >
                        <Subject/>
                    </Button>
                </div>
                )}
            </Draggable>
        );
    }
}
