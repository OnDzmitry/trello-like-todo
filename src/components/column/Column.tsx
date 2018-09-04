import * as React from "react";
import { List, Button } from "@material-ui/core";
import { Card } from "../card/Card";
import CardModel from "../../models/Card";
import ColumnModel from "../../models/Column";
import { Draggable,Droppable } from 'react-beautiful-dnd';
import { DispatchFromProps } from '../../containers/Column';

export interface ColumnProps extends ColumnModel {
    index: number,
}

type Props = ColumnProps & DispatchFromProps;

export function Column(props: Props) {
    const renderCards = () => {
        const { cards } = props;

        if (cards) {
            return cards.map((card: CardModel, index) => {
                return <Card index={index} id={card.id} text={card.text} title={card.title} />;
            });
        }
    }

    const openCardDialog = () => {
        props.openCardDialog(props.id);
    }

    const {id, title, index} = props;

    return (
        <Draggable draggableId={id} index={index}>
            {(provided, snapshot) => (
                <div 
                    className="c-column" 
                    ref={provided.innerRef} 
                    {...provided.draggableProps} 
                    {...provided.dragHandleProps}
                >
                    <div className="c-column-content">
                        <div className="c-column-title">
                            {title}
                        </div>
                        <Droppable droppableId={id} type="CARD">
                            {(provided, snapshot) => (
                                <div 
                                    ref={provided.innerRef} 
                                    {...provided.draggableProps} 
                                    {...provided.dragHandleProps}
                                >
                                    <List style={{maxHeight: "100%",overflow: "auto"}}  >
                                        {renderCards()}
                                    </List>
                                </div>
                            )}
                        </Droppable>
                    <Button 
                        variant="text"
                        fullWidth={true}
                        style={{textTransform: "none"}}
                        onClick={openCardDialog}
                    >
                        Add a card...
                    </Button>
                    {provided.placeholder}
                    </div>
                    {provided.placeholder}
                </div>
            )}
        </Draggable>
    );
}