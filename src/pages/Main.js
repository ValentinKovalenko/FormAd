import React from "react"
import {Button, Form, FormGroup, Label, Input, CustomInput, ButtonGroup} from 'reactstrap'
import {Formik} from "formik";
import * as yup from "yup";
import {useState} from 'react'


const Main = (props) => {

    const {toggle} = props
    const {setMain} = props

    const [onOff, setOnOff] = useState(false)
    const [message, setMessage] = useState('off')

    const validationsSchema = yup.object().shape({
        title: yup.string().required('Write a title required'),
        description: yup.string()
    })

    const clickCheckbox = () => {
        setOnOff(!onOff)
               if (onOff === true)
             {
            setMessage('off')
        } else {
            setMessage('on')
        }
    }
    console.log(onOff)

    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    description: ''
                }}
                /*validateOnBlur*/
                onSubmit={(values) => {
                    toggle()
                    setMain({
                        title: values.title,
                        description: values.description,
                        isStatus: onOff
                    })
                }}
                validationSchema={validationsSchema}>
                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      handleSubmit,
                      }) => (
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input
                                type="title"
                                name="title"
                                placeholder="Write a title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                            />
                            {touched.title && errors.title && <p className="text-danger">{errors.title}</p>}
                        </FormGroup>
                        <FormGroup>
                            <Label for="description">Description</Label>
                            <Input
                                type="textarea"
                                name="description"
                                id="description"
                                placeholder="Write a description"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            value = {values.description}
                            />
                            {touched.description && errors.description && <p className="text-danger">{errors.description}</p>}
                        </FormGroup>

                        <div>
                            <CustomInput onClick={clickCheckbox} type="switch" id="exampleCustomSwitch"
                                         name="customSwitch" onOff={onOff}>{message}</CustomInput>
                        </div>
                        <div className='mt-4'>
                            <ButtonGroup>
                                <Button
                                    color="success"
                                    type="title"
                                    disabled={!isValid}
                                    onClick={handleSubmit}
                                >Next</Button>
                            </ButtonGroup>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
export default Main