import * as React from "react";
import CardModel from "../../models/Card";
import EditIcon from "@material-ui/icons/Edit";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DispatchFromProps } from '../../containers/Card';
 
export interface CardProps extends CardModel {
    index: number;
    columnId: string;
}

export type Props = CardProps & DispatchFromProps;

const CardButton = styled.button`
    border-radius: 3px;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
        opacity: 1;
        background-color: #d9dbdd;
    }
    opacity: 0.4;
    display: none;
    position: absolute; 
    top: 0; 
    right: 0; 
    padding: 3px; 
    margin: 5px;
    font-size: 16px;
`;

interface CardContentProps {
    isDragging: boolean
}

const CardContent = styled.div<CardContentProps>`
    transform: ${props => props.isDragging ? 'rotate(3deg)' : 'rotate(0deg)'};
    &:hover ${CardButton}{
        display: block !important;
    }
    white-space: pre-wrap;
    &:hover {
        background-color: #eff1f7;
    }
    position: relative;
    margin: 5px;
    background-color: ${props => props.isDragging ? '#eff1f7' : 'white'};
    border-radius: 3px; 
    height: 100%;
`;

const CardTitle = styled.div`
    word-wrap: break-word;
    font-size: 20px;
    padding: 7px;
    word-break: normal;
`;

export function Card(props: Props) {
    const index = props.index;
    const {id, columnId, title, text} = props;

    const clippedTitle: string = title.length > 350 ? title.slice(0, 350) + '...' : title;

    const handleClick = () => {
        const card: CardModel = {
            id: id,
            title: title,
            text: text
        };

        props.openCardDialog(columnId, card);
    }

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <CardContent isDragging={snapshot.isDragging}>
                        <CardTitle>{clippedTitle}</CardTitle>
                        <CardButton onClick={handleClick}>
                            <EditIcon fontSize={"inherit"}/>
                        </CardButton>
                    </CardContent>
                </div>  
            )}
        </Draggable>
    );
}
