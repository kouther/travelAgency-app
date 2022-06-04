import { Container, Col, Row } from 'react-bootstrap';
import thumb1 from './thumb1.png';
import thumb2 from './thumb2.png';
import thumb3 from './thumb3.png';
import thumb4 from './thumb4.png';
import '../Style.css';

const Introduction=()=>{
    return(
        <div className="introduction-area">
            <Container>
                <h2 className='title'><span style={{color: '#02b5ff'}}>We Are</span> Travel</h2>
            
                <Row>
                    <Col xs={3} md={3}>
                        <div className='single-intro style-two'>
                            <div className='thumb'>
                                <img src={thumb1} />
                            </div>
                            <h4 className="intro-title">Private Transport</h4>
                            <p style={{borderTop: '2px solid rgb(2, 170, 240)', width: '50px', marginBottom: '10%'}} />
                            <p style={{width: '101%'}}>Sponsorships are like unicorns or leprechauns, talked about often but they don’t exist. There is one dollars</p></div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className='single-intro style-two'>
                            <div className='thumb'>
                                <img src={thumb2} />
                            </div>
                            <h4 className="intro-title">Diverse Destinations</h4>
                            <p style={{borderTop: '2px solid rgb(2, 170, 240)', width: '50px', marginBottom: '10%'}} />

                            <p style={{width: '101%'}}>My response usually harsh. Offended at the that a career that’s taken more than a decade to create could bes</p></div>
                    </Col>
                    <Col xs={3} md={3}>
                        <div className='single-intro style-two'>
                            <div className='thumb'>
                                <img src={thumb3} />
                            </div>
                            <h4 className="intro-title">Great Hotels</h4>
                            <p style={{borderTop: '2px solid rgb(2, 170, 240)', width: '50px', marginBottom: '10%'}} />
                            <p style={{width: '101%'}}>I have always made a living to make movies, never the other way around.I first I washed dishes in a seafood</p>
                        </div>
                    </Col>     
                    <Col xs={3} md={3}>
                        <div className='single-intro style-two'>
                            <div className='thumb'>
                                <img src={thumb4} />
                            </div>
                            <h4 className="intro-title">Fast Booking</h4>
                            <p style={{borderTop: '2px solid rgb(2, 170, 240)', width: '50px', marginBottom: '10%'}} />
                            <p style={{width: '101%'}}>Aenean sed nibh a magna posuere tempor. Nunc faucibus nunc aliquet. Donec congue, nunc vel tempor</p>
                        </div>
                    </Col>
                </Row>

             </Container>
        </div>


    );
}
export default Introduction;