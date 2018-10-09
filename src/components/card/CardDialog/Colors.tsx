import styled from 'styled-components';
import { TextField, Dialog, DialogTitle, DialogContent,DialogActions, Button, Typography} from "@material-ui/core";
import * as React from "react";
import cardColors from '../../../models/CardColors';

export interface ColorBlockProps {
    color: string,
    isSelected: boolean
}

const ColorBlocks = styled.div`
    height: 50px;
`;

const ColorLabel = styled.p``;

const ColorsContainer = styled.div``;

const ColorBlock = styled.span<ColorBlockProps>`
    width: 30px;
    margin: 5px 5px;
    cursor: pointer;
    height: 30px;
    display: inline-block;
    border-style: ${props => props.isSelected ? 'solid' : 'none' }
    background-color: ${props => props.color};
`;

export interface ColorsProps {
    setCardColor: Function,
    selectedColor: string
}

export interface ColorsState {
    selectedColor: string
}

export class Colors extends React.Component<ColorsProps, ColorsState> {
    constructor(props: ColorsProps) {
        super(props);
        this.state = {
            selectedColor: this.props.selectedColor
        };
    }

    setCardColor = (key, event) => {
        this.props.setCardColor(key);
        this.setState({
            selectedColor: key
        });
    }

    renderColorBlocks = () => {
        const selectedColor = this.state.selectedColor;
        
        return Object.keys(cardColors).map((key) => {
            return (
                <ColorBlock 
                    id={key} 
                    color={cardColors[key]} 
                    isSelected={selectedColor === key ? true : false} 
                    onClick={this.setCardColor.bind(this, key)}
                />
            );
        });
    }

    render() {
        return(
            <ColorsContainer>
                <ColorLabel>
                    <Typography variant="subheading" gutterBottom>Card color</Typography>
                </ColorLabel>
                <ColorBlocks>
                    {this.renderColorBlocks()}
                </ColorBlocks>
            </ColorsContainer>
        );
    }
}