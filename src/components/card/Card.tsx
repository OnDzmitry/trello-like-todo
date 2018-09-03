import * as React from "react";
import { Button } from "@material-ui/core";
import CardModel from "../../models/Card";
import Subject from "@material-ui/icons/Subject";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export interface CardProps extends CardModel {
    index: number;
}

const CardContent = styled.div`
    margin: 5px;
    background-color: white;
    border-radius: 3px; 
    height: 100%;
`;

const CardTitle = styled.div`
    font-size: 20px;
    padding: 7px;
    word-break: normal;
`;

export function Card(props: CardProps) {
    const index = props.index;
    const {id,title} = props;

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (  
                <CardContent
                    innerRef={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardTitle>{title}</CardTitle>
                    <Button
                        size="small"
                        style={{ minWidth: "24px", padding: 2, margin: "0 0 5px 5px" }}
                        aria-label="Add"
                    >
                        <Subject/>
                    </Button>
                </CardContent>
            )}
        </Draggable>
    );
}
