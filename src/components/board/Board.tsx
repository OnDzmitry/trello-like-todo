import * as React from "react";
import ColumnsModel from "../../models/Columns";
import ColumnModel from "../../models/Column";
import { Grid, Button } from "@material-ui/core";
import { Map } from 'immutable';
import Column from "../../containers/Column";
import { DragDropContext,Droppable } from 'react-beautiful-dnd';

export interface BoardProps {
    className?: string;
    columns?: ColumnModel[];
    reorderColumns: Function,
    shiftCard: Function
}
export interface BoardState { }

export class Board extends React.Component<BoardProps, BoardState> {
    renderColumns() {
        const { columns } = this.props;

        return columns.map((column: ColumnModel, index) => {
            return <Column index={index} data={column} />;
        });
    }
    
    onDragEnd = (data) => {
        console.log(data);
        switch(data.type) {
            case 'COLUMN':
                this.props.reorderColumns(data.source.index, data.destination.index );
            break;
            case 'CARD':
                this.props.shiftCard(data.destination.index, data.draggableId, data.destination.droppableId);
            break;
        }
    };
    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <Droppable droppableId="board" type="COLUMN" direction="horizontal">
                    {(provided, snapshot) => (
                    <div className={"c-board "}
                        ref={provided.innerRef}
                    >
                        <div className={"c-board-list"}>{this.renderColumns()}</div>
                        {provided.placeholder}
                    </div>
                    )}
                </Droppable>
            </DragDropContext>
        );
    }
}
