import React, {useState} from 'react'

import {FormGroup, Input, Label, ButtonGroup, Button} from "reactstrap"


const Publication = (props) => {
    const {prev} = props
    const {setPublic, contactInfo, mainInfo, photoInfo} = props

    const submitClick = () => {
        let Public = {
            isStatus: checked,
            isStatus1: checked1,
            isStatus2: checked2,
            isStatus3: checked3,
            isStatus4: checked4
        }
console.log(contactInfo, mainInfo, photoInfo, Public)
    }


    const [checked, setChecked] = useState(false)
    const handleClick = () => setChecked(!checked)


    const [checked1, setChecked1] = useState(false)
    const handleClick1 = () => setChecked1(!checked1)

    const [checked2, setChecked2] = useState(false)
    const handleClick2 = () => setChecked2(!checked2)

    const [checked3, setChecked3] = useState(false)
    const handleClick3 = () => setChecked3(!checked3)

    const [checked4, setChecked4] = useState(false)
    const handleClick4 = () => setChecked4(!checked4)
    console.log(checked, checked1, checked2, checked3, checked4)

    return (

        <FormGroup>
            <div className='mt-3'>
                <Label check>
                    <Input onClick={handleClick} checked={checked} type="checkbox"/> publish for 1 month (10 $)
                </Label>
            </div>
            <div className='mt-3'>
                <Label check>
                    <Input onClick={handleClick1} checked1={checked1} type="checkbox"/> publish for 2 month (18 $)
                </Label>
            </div>
            <div className='mt-3'>
                <Label check>
                    <Input onClick={handleClick2} checked2={checked2} type="checkbox"/> publish for 3 month (25 $)
                </Label>
            </div>
            <div className='mt-3'>
                <Label check>
                    <Input onClick={handleClick3} checked3={checked3} type="checkbox"/> publish for 4 month (32 $)
                </Label>
            </div>
            <div className='mt-3'>
                <Label check>
                    <Input onClick={handleClick4} checked4={checked4} type="checkbox"/> publish for 5 month (35 $)
                </Label>
            </div>

            <div className='mt-4'>
                <ButtonGroup>
                    <Button onClick={prev} color="success">Prev</Button>
                    <Button onClick={submitClick} color="info">Save</Button>
                </ButtonGroup>
            </div>
        </FormGroup>
    )
}

export default Publication