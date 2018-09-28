import styled from 'styled-components';
import { TextField, Dialog, DialogTitle, DialogContent,DialogActions, Button, Typography} from "@material-ui/core";
import * as React from "react";
import ImageDropZone from "react-image-dropzone";

const CardImageLoaderContent = styled.div`
    margin: 10px 0px;
`;

export interface CardImageLoaderProps {
    setImage: Function,
    deleteImage: Function,
    defaultImage: string
}

export function CardImageLoader(props) {
    const imagePicked = (image) => {
        props.setImage(image);
    }

    const imageDeleted = () => {
        props.deleteImage();
    }

    return(
        <CardImageLoaderContent>
            <Typography>
                <ImageDropZone
                    anySize={true}
                    showButton={true}
                    showDeleteButton={true}
                    width={300}
                    height={280}
                    imageDefault={props.defaultImage}
                    imagePicked={imagePicked}
                    imageDeleted={imageDeleted}
                />
            </Typography>
        </CardImageLoaderContent>
    );
    
}