import styled from 'styled-components';
import { TextField, Dialog, DialogTitle, DialogContent,DialogActions, Button, Typography} from "@material-ui/core";
import * as React from "react";
import ImageDropZone from "react-image-dropzone";

const ImageLoaderContent = styled.div`
    margin: 10px 0px;
`;

export interface ImageLoaderProps {
    setImage: Function,
    deleteImage: Function,
    defaultImage: string
}

export function ImageLoader(props) {
    const imagePicked = (image) => {
        props.setImage(image);
    }

    const imageDeleted = () => {
        props.deleteImage();
    }

    return(
        <ImageLoaderContent>
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
        </ImageLoaderContent>
    );
    
}