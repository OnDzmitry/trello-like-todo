import * as React from "react";
import ColumnsModel from "../../models/Columns";
import ColumnModel from "../../models/Column";
import { Grid, Button } from "@material-ui/core";
import { Map } from 'immutable';
import Column from "../../containers/Column";
import { DragDropContext,Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

export interface BoardProps {
    className?: string;
    columns?: ColumnModel[];
    reorderColumns: Function,
    shiftCard: Function
}

const BoardContent = styled.div`
    position: absolute;
    background-color: #007ABB;
    display: inline-flex;
    align-items: flex-start;
    margin-top: 64px;
    min-height: calc(100vh - 80px),
    min-width: 100vw;
`;

export const Board: React.SFC<BoardProps> = (props: BoardProps) => {
    const boardStyles: React.CSSProperties = {
        position: "absolute",
        backgroundColor: "#007ABB",
        display: "inline-flex",
        alignItems: "flex-start",
        marginTop: "64px",
        minHeight: "calc(100vh - 80px)",
        minWidth: "100vw"
    };

    const renderColumns = () => {
        const { columns } = props;

        return columns.map((column: ColumnModel, index) => {
            return (
                <Column 
                    index={index}
                    id={column.id}
                    title={column.title} 
                    cards={column.cards} 
                    />
            );
        });
    }

    const onDragEnd = (data) => {
        console.log(data);
        if (data.destination != null && 'index' in data.destination && 'index' in data.source) {
            switch(data.type) {
                case 'COLUMN':
                    props.reorderColumns(data.source.index, data.destination.index );
                break;
                case 'CARD':
                    props.shiftCard(data.draggableId, data.source, data.destination);
                break;
            }
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="board" type="COLUMN" direction="horizontal">
                {(provided, snapshot) => (
                    <div ref={provided.innerRef}>
                        {renderColumns()}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}