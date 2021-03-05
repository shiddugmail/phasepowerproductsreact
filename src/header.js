import React, { useState } from 'react';
 import Logo from './images/phaselogo.png';
import './assets/css/style.css';
import './assets/css/navbar.css';
import { HashLink as Link } from 'react-router-hash-link';
import { Navbar, Form, Nav, Image, Row} from 'react-bootstrap';
import SmartIo from './images/smartio.png';
import Gate from './images/gateway.png';
import BZMMccb from './images/eaton/mccb/eatonbzm.jpg';
import ScrollToTop from './scrolltotop';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    return (
       <ScrollToTop>
        <Navbar expand="lg" expanded={expanded} fixed="top" variant="dark" style={{ backgroundColor: '#33958C' }}>
             <Navbar.Brand href="#home">
                 <img src={Logo} alt="logo" width="100" height="40"/>
             </Navbar.Brand> 
           
            <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/" className="nav-link line current" onClick={() => setExpanded(false)}>Home</Link>
                    <div class="menudropdown">
                        <Link className="nav-link">Products <i class="fa fa-caret-down"></i>
                        </Link>

                        <div class="menudropdown-content" >
                            <Row >
                                <div style={{marginLeft: '50px'}}>
                                    <h4 style={{marginBottom: "-25px"}}>Elmeasure India Pvt Ltd</h4>
                                </div>
                            </Row>
                            <Row>
                                <div className="menucolumn" >
                                <Link to="/prodsr" onClick={() => setExpanded(false)}>
                                    <Image style={{ "align-items": "center" }} src={SmartIo} height="25px"/> 
                                    Smart Resource
                                    <hr width = '100'/>
                                </Link>
                                </div>
                                <div className="menucolumn" >
                                <Link to="/prodsn" onClick={() => setExpanded(false)}> 
                                    <Image style={{ "align-items": "center" }} src={Gate} height="25px" />
                                    Smart Network
                                    <hr width = '100'/>
                                    </Link>
                                </div>
                                <div className="menucolumn" >
                                    <Link to="/prodsm" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} height="25px"/>
                                        Smart Monitor
                                        <hr width = '100'/>
                                    </Link>
                                </div>
                                <div className="menucolumn" >
                                    <Link to="/prodsc" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} height="25px" />
                                        Smart Control
                                        <hr width = '100'/>
                                    </Link>
                                </div>
                            </Row>
                            <Row >
                            <div style={{marginLeft: '50px'}}>
                                <h4 style={{marginBottom: "-25px"}}>Deepsea Electronics</h4>
                            </div>
                            </Row>
                            <Row>
                                    <div className="menucolumn" >
                                    <Link to="/prodst" onClick={() => setExpanded(false)}>
                                        <Image style={{ "align-items": "center" }} src={SmartIo} height="25px" width="50px" /> Start Control Modules
                                        <hr width = '100'/>
                                    </Link>
                                    </div>
                                    <div className="menucolumn" >
                                    <Link to="/prodfc" onClick={() => setExpanded(false)}> 
                                    <Image style={{ "align-items": "center" }} src={Gate} height="25px" width="50px" />Failure Control Modules
                                        <hr width = '100'/></Link>
                                    </div>
                                    <div className="menucolumn" >
                                        <Link to="/prodsh" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} height="25px" width="50px" />Sharing Control Modules
                                        <hr width = '100'/></Link>
                                    </div>
                                </Row>                                           
                                <Row >
                                    <div style={{marginLeft: '50px'}}>
                                        <h4 style={{marginBottom: "-25px"}}>
                                            Eaton Power Quality Pvt Ltd 
                                        </h4>
                                    </div>
                                </Row>
                            <Row>
                                <div class="menucolumn" >
                                    <Link to='/prodea' onClick={() => setExpanded(false)}>
                                        <Image style={{ "align-items": "center" }} src={BZMMccb} height="25px" width="50px" /> MCCB
                                        <hr width = '100'/>
                                    </Link>
                                </div>
                            </Row>
                            <Row >
                                <div style={{marginLeft: '50px'}}>
                                    <h4 style={{marginBottom: "-25px"}}>
                                    Lubi Electronics Pvt Ltd 
                                    </h4>
                                </div>
                                </Row>
                            <Row>
                                <div class="menucolumn" >
                                    <Link to='/prodlb' onClick={() => setExpanded(false)}>
                                        <Image style={{ "align-items": "center" }} src={BZMMccb} height="25px" width="50px" /> SMPS
                                        <hr width = '100'/>
                                    </Link>
                                </div>
                            </Row>
                            <Row >
                            <div style={{marginLeft: '50px'}}>
                                <h4 style={{marginBottom: "-25px"}}>AMPTURN ELECTRICALS</h4>
                            </div>
                            </Row>
                            <Row>
                                    <div className="menucolumn" >
                                    <Link to="/prodtp" onClick={() => setExpanded(false)}>
                                        <Image style={{ "align-items": "center" }} src={SmartIo} height="25px" width="50px" /> L.T.Tape Insulated
                                        <hr width = '100'/>
                                    </Link>
                                    </div>
                                    <div className="menucolumn" >
                                    <Link to="/prodmd" onClick={() => setExpanded(false)}> 
                                    <Image style={{ "align-items": "center" }} src={Gate} height="25px" width="50px" />L.T.Moulded Case
                                        <hr width = '100'/></Link>
                                    </div>
                                    <div className="menucolumn" >
                                        <Link to="/prodrn" onClick={() => setExpanded(false)}> 
                                        <Image style={{ "align-items": "center" }} src={Gate} height="25px" width="50px" />L.T.Resin Cast
                                        <hr width = '100'/></Link>
                                    </div>
                                </Row>                        
                            <Row>
                            <div class="menucolumn" >
                            <Link to="/prodop" > <Image style={{ "align-items": "center" }} src={Gate} height="25px" width="50px" />Other  Products 
                                <hr width = '100'/></Link>
                            </div>
                            </Row>
                        </div>
                    </div>
                    <Link to="/#about" className="nav-link line current" onClick={() => setExpanded(false)}>About</Link>
                    <Link to="/#contact" className="nav-link line " onClick={() => setExpanded(false)}>Contact</Link>
                </Nav>
                <Form inline>
                    <span className="nav-link" style={{ fontSize: "16px", color: "white" }}>
                        <i className="fa fa-phone"></i> &emsp;
                        <Link to="+91 123456790" className="fa" style={{ color: "white" }}> 
                        +91 1234567890 </Link>  </span>
                        &emsp;
                        <i className="nav-link"class="fa fa-envelope" style={{ "font-size": "20px", "color": "white" }}></i>&emsp; 
                        <Link to="sales@PhasePowerProducts.in" style={{ color: "white" }}>
                            sales@phasepowerproducts.in&emsp;
                        </Link>
                        <a className="nav-link" style={{ "font-size": "20px", "color": "white" }}href="https://www.google.co.in/maps/place/PHASE+POWER+PRODUCTS/@13.0010549,77.5060438,15z/data=!4m5!3m4!1s0x0:0x3eceb35962d34fd7!8m2!3d13.0010549!4d77.5060438"><i className="fa fa-map"></i>&emsp; Reach Us</a>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    </ScrollToTop>
    );
}



export default Header;
