import React, {useRef, useState} from 'react'
import {Button, ButtonGroup, FormGroup, Input, Label} from "reactstrap"


const Photos = (props) => {
    const {toggle, prev} = props
    const {setPhoto} = props
    const [selectedFile, setSelectedFile] = useState(null)
    const inputEl = useRef(null)

    const onUpload = (e) => {
        e.preventDefault()
        setPhoto(selectedFile)
           }

    return (
        <div>
            <FormGroup>
                <Label for="exampleFile">Photo</Label>
                <Input type="file"
                       name="file"
                       id="exampleFile"
                       ref={inputEl}
                       onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <button type='submit' onClick={onUpload}>upload</button>
            </FormGroup >
            <div className='mt-4'>
                <ButtonGroup>
                    <Button onClick={prev} color="success">Prev</Button>
                    <Button onClick={toggle} color="success">Next</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Photos