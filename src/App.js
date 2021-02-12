import React from "react"
import {Col, Nav, NavItem, NavLink, Row, TabContent, TabPane} from "reactstrap"
import classnames from 'classnames'
import {useState, useEffect} from 'react'
import {BrowserRouter} from "react-router-dom"
import Main from "./pages/Main"
import ContactInformation from "./pages/ContactInformation"
import Photos from "./pages/Photos"
import Publication from "./pages/Publication"


const App = () => {

    let [publicInfo, setPublicInfo] = useState()
    const setPublic = (info) => {
        setPublicInfo(info)
    }
    let [photoInfo, setPhotoInfo] = useState()
    const setPhoto = (info) => {
        setPhotoInfo(info)
    }
    let [contactInfo, setContactInfo] = useState()
    const setContact = (info) => {
        setContactInfo(info)
    }
    let [mainInfo, setMainInfo] = useState()
    const setMain = (info) => {
        setMainInfo(info)
    }
    const [activeTab, setActiveTab] = useState('1')
    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab)
    }
    useEffect(() => {
        console.log(mainInfo)
    }, [mainInfo])
    useEffect(() => {
        console.log(contactInfo)
    }, [contactInfo])
    useEffect(() => {
        console.log(publicInfo)
        }, [publicInfo])
    useEffect(() => {
        console.log(photoInfo)
        }, [photoInfo])



    return (
        <BrowserRouter>
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === '1'})}
                        >
                            Main
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === '2'})}
                        >
                            Contact Information
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === '3'})}
                        >
                            Photos
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({active: activeTab === '4'})}
                        >
                            Publication
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm='1'></Col>
                            <Col sm="6">
                                <Main toggle={() => {
                                    toggle('2')
                                }} setMain={setMain}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm='1'></Col>
                            <Col sm="6">
                                <ContactInformation toggle={() => {
                                    toggle('3')
                                }} prev={() => {
                                    toggle('1')
                                }} setContact={setContact}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm='1'></Col>
                            <Col sm="6">
                                <Photos toggle={() => {
                                    toggle('4')
                                }} prev={() => {
                                    toggle('2')
                                }} setPhoto={setPhoto}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
                <TabContent activeTab={activeTab}>
                    <TabPane tabId="4">
                        <Row>
                            <Col sm='1'></Col>
                            <Col sm="6">
                                <Publication prev={() => {
                                    toggle('3')
                                }} setPublic={setPublic}
                                             mainInfo= {mainInfo}
                                             contactInfo={contactInfo}
                                             photoInfo={photoInfo}
                                />
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </BrowserRouter>
    )
}

export default App
