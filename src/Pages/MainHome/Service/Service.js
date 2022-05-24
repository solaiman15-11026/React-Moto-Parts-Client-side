import { faBusinessTime, faList, faPeopleGroup, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import map from '../../../Image/map.jpg'
import './Service.css'

const Service = () => {
    return (
        <div>

            <h1 className='headB mx-4 d-flex justify-content-center'>OUR WORLDWIDE BUSINESS</h1>

            <Row className='mx-4  d-flex justify-content-center'>

                <Col className='mt-4 ' sm={12} lg={6}>
                    <Row className='mb-4 Mediaa'>
                        <Col className='Mediaa border-2 mx-4 ' sm={12} lg={5}>
                            <span className='Font d-flex justify-content-center m-3'><FontAwesomeIcon icon={faBusinessTime} /></span>
                            <h3 className='dio'>2.5 B</h3>
                            <p className='Review-Clint'>Business emails organized</p>
                        </Col>

                        <Col className='Mediaa border-2' sm={12} lg={5}>
                            <span className='Font d-flex justify-content-center m-3'><FontAwesomeIcon icon={faList} /></span>
                            <h3 className='dio'>12K+ </h3>
                            <p className='Review-Clint'>Reviews we have . 90% positive review we have</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='Mediaa border-2 mx-4 ' sm={12} lg={5}>
                            <span className='Font d-flex justify-content-center m-3'><FontAwesomeIcon icon={faPeopleGroup} /></span>
                            <h3 className='dio'>300+ </h3>
                            <p className='Review-Clint'>Clint we have. They take our good services</p>
                        </Col>

                        <Col className='Mediaa border-2' sm={12} lg={5}>
                            <span className='Font d-flex justify-content-center m-3'><FontAwesomeIcon icon={faTools} /></span>
                            <h3 className='dio'>120+ </h3>
                            <p className='Review-Clint'>Tools  using Amitree technology</p>
                        </Col>
                    </Row>
                </Col>

                <Col className='mt-4' sm={12} lg={4}>
                    <img className='mapp ' src={map} alt="" srcset="" />
                </Col>
            </Row>

        </div>
    );
};

export default Service;