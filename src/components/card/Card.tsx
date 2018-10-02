import * as React from "react";
import CardModel from "../../models/Card";
import EditIcon from "@material-ui/icons/Edit";
import SubscribeIcon from "@material-ui/icons/Visibility";
import TodoIcon from "@material-ui/icons/Done";
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { DispatchFromProps } from '../../containers/Card';
import cardColors from '../../models/CardColors';

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

const CardStatusBarContainer = styled.div`
    max-height: 30px;
`;

const CardStatusItem = styled.span`
    opacity: 0.6;
    margin: 0px 7px;
`;

const CardImageContainer = styled.div`
    max-height: 400px;
    font-size: 0;
`;

const CardImage = styled.img`
    width: 100%;
    cursor: pointer;
`;

interface CardContentProps {
    color: string;
    isDragging: boolean;
}

const CardContent = styled.div<CardContentProps>`
    transform: ${props => props.isDragging ? 'rotate(3deg)' : 'rotate(0deg)'};
    &:hover ${CardButton}{
        display: block !important;
    }
    background-color: ${props => props.isDragging ? '#eff1f7' : 'white'};
    background-color: ${props => cardColors[props.color]};
    white-space: pre-wrap;
    &:hover {
        filter: brightness(80%);
    }
    position: relative;
    margin: 5px;
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
    let isDragging = false;
    const index = props.index;
    const {id, columnId, title, text, color, image, subscribe} = props;

    const clippedTitle: string = title.length > 350 ? title.slice(0, 350) + '...' : title;

    const handleClick = () => {
        const card: CardModel = {
            id: id,
            title: title,
            text: text,
            color: color,
            image: image,
            subscribe: subscribe
        };

        props.openCardDialog(columnId, card);
    }

    const pickOutCard = () => {
        isDragging = true;
    }

    return (
        <Draggable key={id} draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    onClick={pickOutCard}
                >
                    <CardContent color={color} isDragging={snapshot.isDragging}>
                        <CardImageContainer>
                            <CardImage src={image}/>
                        </CardImageContainer>
                        <CardTitle>{clippedTitle}</CardTitle>
                        <CardStatusBarContainer>
                            { subscribe ? <CardStatusItem><SubscribeIcon fontSize={"inherit"}/></CardStatusItem>  : ''}
                            <CardStatusItem>
                                <TodoIcon fontSize={"inherit"}/>
                            </CardStatusItem>
                        </CardStatusBarContainer>
                        <CardButton onClick={handleClick}>
                            <EditIcon fontSize={"inherit"}/>
                        </CardButton>
                    </CardContent>
                </div>  
            )}
        </Draggable>
    );
}
