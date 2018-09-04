import * as React from "react";
import ColumnsModel from "../../models/Columns";
import ColumnModel from "../../models/Column";
import { Map } from 'immutable';
import Column from "../../containers/Column";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import * as fromBoardReducer from "../../store/reducers/board";
import { DispatchFromProps } from "../../containers/Board";

export interface BoardProps extends fromBoardReducer.State {
    className?: string;
}

type Props = BoardProps & DispatchFromProps;

const BoardContent = styled.div`
    position: absolute;
    top: 64px;
    bottom: 0px;
    min-width: 100%;
    background-color: #007ABB;
    display: inline-flex;
    align-items: flex-start;
`;

const ColumnList = styled.div`
    display: inline-flex;
    align-items: flex-start;
    max-height: calc(100% - 128px);
`;

export function Board(props: Props) {
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
                    <BoardContent innerRef={provided.innerRef}>
                        <ColumnList>
                            {renderColumns()}
                            {provided.placeholder}
                        </ColumnList>
                    </BoardContent>
                )}
            </Droppable>
        </DragDropContext>
    );
}