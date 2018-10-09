import * as React from "react";
import { List, Button, Typography, Menu, MenuItem, Fade, Paper } from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Card from "../../containers/Card";
import CardModel from "../../models/Card";
import ColumnModel from "../../models/Column";
import { Draggable,Droppable } from 'react-beautiful-dnd';
import { DispatchFromProps } from '../../containers/Column';
import styled from "styled-components";

const ColumnButton = styled.button`
    border-radius: 3px;
    border: none;
    padding: 0;
    cursor: pointer;
    &:hover {
        opacity: 1;
        background-color: #d9dbdd;
    }
    opacity: 0.4;
    position: absolute; 
    top: 0; 
    right: 0; 
    padding: 3px; 
    margin: 5px;
    font-size: 16px;
`;

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
    position: relative;
    margin: 15px;
    width: 300px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    background-color: #E1E3E5;
`;

const ColumnTitle = styled.h4`
    margin: 8px;
    color: #323538;
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

export interface ColumnProps extends ColumnModel {
    index: number,
}

interface State {
    anchorEl: HTMLElement
}

type Props = ColumnProps & DispatchFromProps;

export class Column extends React.Component<Props, State> {
    state = {
        anchorEl: null
    }

    constructor(props) {
        super(props); 
    }

    renderCards = () => {
        const {id, title, index} = this.props;
        const { cards } = this.props;

        if (cards) {
            return cards.map((card: CardModel, index) => {
            return (
                <Card 
                    index={index} 
                    color={card.color} 
                    image={card.image} 
                    columnId={id} 
                    id={card.id} 
                    text={card.text} 
                    title={card.title}
                    subscribe={card.subscribe} 
                    />
                );
            });
        }
    }

    openCardDialog = () => {
        this.setState({ anchorEl: null });
        this.props.openCardDialog(this.props.id);
    }

    removeColumn = () => {
        this.setState({ anchorEl: null });
        this.props.removeColumn(this.props.id);
    }

    openMenu: React.MouseEventHandler = (event: React.MouseEvent) => {
        this.setState({ anchorEl: event.currentTarget as HTMLElement });
    };

    closeMenu = () => {
        this.setState({ anchorEl: null });
    }

    render() {
        const {id, title, index} = this.props;

        return (
            <Draggable draggableId={id} index={index}>
                {(provided, snapshot) => (
                    <ColumnContent 
                        innerRef={provided.innerRef} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps}
                    >
                        <ColumnButton onClick={this.openMenu}>
                            <MoreVert/>
                        </ColumnButton>
                        <Menu
                            anchorEl={this.state.anchorEl }
                            open={Boolean(this.state.anchorEl)}
                            onClose={this.closeMenu}
                            TransitionComponent={Fade}
                        >
                            <MenuItem onClick={this.openCardDialog}>Add a card</MenuItem>
                            <MenuItem onClick={this.removeColumn}>Remove column</MenuItem>
                        </Menu>
                        <Typography variant="subheading" gutterBottom>
                            <ColumnTitle>
                                {title}
                            </ColumnTitle>
                        </Typography>
                        <Droppable droppableId={id} type="CARD">
                            {(provided, snapshot) => (
                                <CardsList isDraging={snapshot.isDraggingOver}
                                    innerRef={provided.innerRef} 
                                    {...provided.draggableProps} 
                                    {...provided.dragHandleProps}
                                >
                                    {this.renderCards()}
                                    <div>{provided.placeholder}</div> 
                                </CardsList>
                            )}
                        </Droppable>
                        <Button 
                            variant="text"
                            fullWidth={true}
                            style={{textTransform: "none", marginTop: "5px"}}
                            onClick={this.openCardDialog}
                        >
                            <Typography gutterBottom noWrap>
                                Add a card...
                            </Typography>
                        </Button>
                    </ColumnContent>
                )}
            </Draggable>
        );
    }
}