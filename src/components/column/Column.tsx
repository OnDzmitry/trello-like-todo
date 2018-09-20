import * as React from "react";
import { List, Button } from "@material-ui/core";
import Card from "../../containers/Card";
import CardModel from "../../models/Card";
import ColumnModel from "../../models/Column";
import { Draggable,Droppable } from 'react-beautiful-dnd';
import { DispatchFromProps } from '../../containers/Column';
import styled from "styled-components";

export interface ColumnProps extends ColumnModel {
    index: number,
}

type Props = ColumnProps & DispatchFromProps;

const ColumnEditButton = styled.button`
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

const ColumnContent = styled.div`
    margin: 16px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #E1E3E5;
`;

const ColumnTitle = styled.h4`
    margin: 8px;
`;

interface CardListProps {
    isDraging: boolean
}

const CardsList = styled.div<CardListProps>`
    background-color: ${props => props.isDraging ? "#d9dbdd" : "#E1E3E5"};
    min-height: 30px;
    max-height: calc(100vh - 20vh);
    overflow-y: auto;
    padding-bottom: 10px;
`;

export function Column(props: Props) {
    const {id, title, index} = props;

    const renderCards = () => {
        const { cards } = props;

        if (cards) {
            return cards.map((card: CardModel, index) => {
                return <Card index={index} columnId={id} id={card.id} text={card.text} title={card.title} />;
            });
        }
    }

    const openCardDialog = () => {
        props.openCardDialog(props.id);
    }

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <ColumnContent 
                    innerRef={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <ColumnTitle>
                        {title}
                    </ColumnTitle>
                    <Droppable droppableId={id} type="CARD">
                        {(provided, snapshot) => (
                            <CardsList isDraging={snapshot.isDraggingOver}
                                innerRef={provided.innerRef} 
                                {...provided.draggableProps} 
                                {...provided.dragHandleProps}
                            >
                                {renderCards()}
                                <div>{provided.placeholder}</div> 
                            </CardsList>
                        )}
                    </Droppable>
                    <Button 
                        variant="text"
                        fullWidth={true}
                        style={{textTransform: "none", marginTop: "5px"}}
                        onClick={openCardDialog}
                    >
                        Add a card...
                    </Button>
                </ColumnContent>
            )}
        </Draggable>
    );
}