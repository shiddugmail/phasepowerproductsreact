import React from 'react';
import Footer from '../footer';
import Header from '../header';
import { Image, Row, Col, Table } from 'react-bootstrap';


function ProductTempleteSimple({data}) {
    return (
        <>
            <Header />
                <h2 style={{ textAlign: "center", paddingTop: "1rem" }}> 
                    <b>
                        { data.Title } 
                    </b> 
                </h2>
                <div className="container" style={{ marginTop: "40px"}}>
                    {
                        data.Products.map(item => 
                        <>
                            <hr id="dcenergy" className="featurette-divider" />
                            <Row>
                                <Col sm={4} className={ item.id % 2 === 0? '' : 'order-2' }>
                                   
                                    <Image src={item.image} width="350" height="350" style={{ paddingBottom: '2rem'}}/>
                                    
                                </Col>
                                <Col sm={8}>
                                <h2  style={{ textAlign: "center" }}>
                                        {item.heading}
                                    </h2>
                                   
                                    <h5 className="text-black-50">
                                        {item.features_heading}
                                    </h5>
                                   <p>
                                       {item.paragraph}
                                       </p>                                    
                                </Col>
                            </Row>
                            <div style={{ textAlign: "center", fontsize: "20px" }}>
                                <Table striped bordered hover>
                                    <thead>
                                        <tr>
                                            <th> RATED CURRENTS</th>
                                            <th>COMPLIANT TO</th>
                                            <th>RATED BREAKING CAPACITY</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td> {item.features.rated_current} </td>
                                            <td> {item.features.compliant_to}</td>
                                            <td> {item.features.rated_breaking_capacity}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </div>
                        </>
                    )
                }
            </div> 
            <Footer />   
        </>
    );

}

export default ProductTempleteSimple;