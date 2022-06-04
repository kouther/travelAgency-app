import { Container, Col, Row } from 'react-bootstrap';
import './Style.css';

const AboutTravel=()=>{
    return(
        <div className="aboutus-area">
            <Container>
                <Row>
                <Col xs={6} md={6} style={{paddingRight: '10%'}}>
                <div className="section-title mb-lg-0">
                    <h2 className="title" style={{textAlign:'left'}}>Lets Go Travel <br/> with Us</h2>
                </div>
                    <p>Donec dapibus mauris id odio ornare tempus. Duis sit amet accumsan justo, quis tempor ligula. Quisque quis pharetra felis. Ut quis consequat orci, at consequat felis. Suspendisse auctor laoreet placerat. Nam et risus non lacus dignissim lacinia sit amet nec eros. Nulla vel urna quis libero pharetra varius. Nulla tellus nunc, malesuada at scelerisque eget, cursus at eros. Maecenas pellentesque lacus quis erat eleifend sagittis. Sed vel maximus ante, quis mattis neque. Nullam dapibus erat sed nulla cursus accumsan. Nulla volutpat libero lacinia venenatis sodales. Ut in pellentesque.</p>
                </Col>
                <Col xs={6} md={6} style={{paddingLeft: '5%'}}>
                <iframe width="650" height="400" src="https://www.youtube.com/embed/FzpfP-_eC9k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
                </Col>

                </Row>
            </Container>
        </div>


    );
}
export default AboutTravel;