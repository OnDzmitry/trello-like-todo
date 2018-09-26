import styled from 'styled-components';
import { TextField, Dialog, DialogTitle, DialogContent,DialogActions, Button, Typography} from "@material-ui/core";
import * as React from "react";
import cardColors from '../../models/CardColors';

export interface CardColorBlockProps {
    color: string,
    isSelected: boolean
}

const CardColorBlocks = styled.div`
    height: 50px;
`;

const CardColorLabel = styled.p``;

const CardColorsContainer = styled.div``;

const CardColorBlock = styled.span<CardColorBlockProps>`
    width: 30px;
    margin: 5px 5px;
    cursor: pointer;
    height: 30px;
    display: inline-block;
    border-style: ${props => props.isSelected ? 'solid' : 'none' }
    background-color: ${props => props.color};
`;

export interface CardColorsProps {
    setCardColor: Function
}

export interface CardColorsState {
    selectedColor: string
}

export class CardColors extends React.Component<CardColorsProps, CardColorsState> {
    constructor(props: CardColorsProps) {
        super(props);
        this.state = {
            selectedColor: cardColors.white
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
                <CardColorBlock 
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
            <CardColorsContainer>
                <CardColorLabel>
                    <Typography variant="subheading" gutterBottom>Card color</Typography>
                </CardColorLabel>
                <CardColorBlocks>
                    {this.renderColorBlocks()}
                </CardColorBlocks>
            </CardColorsContainer>
        );
    }
}