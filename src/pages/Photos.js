import React, {useState} from 'react'
import {Button, ButtonGroup, } from "reactstrap"
import ImageUploading from 'react-images-uploading'

const Photos = (props) => {
    const {toggle, prev} = props
    const {setPhoto} = props
    const [images, setImages] = React.useState([]);
    const maxNumber = 5;

    const onChange = (imageList, addUpdateIndex) => {
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (
        <div className='mt-4'>
            <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                      imageList,
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
                  }) => (
                   <div className='mt-4'>
                        <Button
                            style={isDragging ? { color: 'red' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            Click or Drop here
                        </Button>
                        &nbsp;
                        <Button onClick={onImageRemoveAll}>Remove all images</Button>
                        {imageList.map((image, index) => (
                            <div key={index} className="mt-4">
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="mt-4">
                                    <Button onClick={() => onImageUpdate(index)}>Update</Button>
                                    &nbsp;
                                    <Button onClick={() => onImageRemove(index)}>Remove</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            <div>
                <div className='mt-4'>
                    <ButtonGroup>
                        <Button onClick={prev} color="success">Prev</Button>
                        <Button onClick={toggle} color="success">Next</Button>
                    </ButtonGroup>
                </div>
            </div>
        </div>
    );
}



export default Photos