import React from 'react'
import {Button, ButtonGroup, Form, FormGroup, Input, Label} from "reactstrap"
import {Formik} from "formik"
import * as yup from "yup"



const ContactInformation = (props) => {
    const {toggle} = props
    const {setContact} = props

    const validationsSchema = yup.object().shape({
        email: yup.string().email('enter the correct email'),
        phoneNumber: yup.number().typeError('there must be numbers').required('Write a title required')
    })

    return(
        <Formik
            initialValues={{
                email: '',
                phoneNumber : ''
            }}
            validateOnBlur
            onSubmit={(values) => {
                toggle()
                setContact({
                    email: values.email,
                    phoneNumber: values.phoneNumber
                })
                            }}
            validationSchema={validationsSchema}
        >
            {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  isValid,
                  handleSubmit,
                  dirty
              }) => (
        <Form>
            <FormGroup>
                <Label for="exampleEmail">Phone number</Label>
                <Input
                    type="phoneNumber"
                    name="phoneNumber"
                    id="exampleEmail"
                    placeholder="380443645367 Write phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                />
                {touched.phoneNumber && errors.phoneNumber && <p className="text-danger">{errors.phoneNumber}</p>}
            </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="Write email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {touched.email && errors.email && <p className="text-danger">{errors.email}</p>}
                </FormGroup>
            <div className='mt-4' >
                <ButtonGroup>
                    <Button color="success">Prev</Button>
                    <Button
                        color="success"
                        type="phoneNumber"
                        disabled={!isValid}
                        onClick={handleSubmit}
                    >Next</Button>
                </ButtonGroup>
            </div>
        </Form>
            )}
        </Formik>
    )
}
export default ContactInformation