import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import './Style.css';

const Intro=()=>{
return (
    <Container style={{marginTop: "5%"}}>
  <Row>
    <Col>
        <div className="single-intro wow  fadeInUp animated" data-wow-duration="0.6s" data-wow-delay="0.1s" style={{visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>            
            <h4 className="intro-title">
                <span className="intro-count">01</span>
                <a className="intro-cat" href="#/about">Travel</a>
            </h4>
            <p>Sponsorships are like unicorns or leprechauns, talked about often but they don’t actually exist. There is only dollars and cents, the ...</p>
        </div>  
    </Col>
    <Col>
        <div className="single-intro wow  fadeInUp animated" data-wow-duration="0.6s" data-wow-delay="0.1s" style={{visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>            
            <h4 className="intro-title">
                <span className="intro-count">02</span>
                <a className="intro-cat" href="#/about">Experience</a>
            </h4>
            <p>My response is usually harsh. Offended at the suggestion that a career that’s taken more than a decade to create could be...</p>
        </div>  
    </Col>
    <Col>
        <div className="single-intro wow  fadeInUp animated" data-wow-duration="0.6s" data-wow-delay="0.1s" style={{visibility: 'visible', animationDuration: '0.6s', animationDelay: '0.1s', animationName: 'fadeInUp'}}>            
            <h4 className="intro-title">
                <span className="intro-count">03</span>
                <a className="intro-cat" href="#/about">Relax</a>
            </h4>
          <p>I have always made a living to make movies, never the other way around. When I first started I washed in a seafood restaurant....</p>
        </div>  
    </Col>
  </Row>
</Container>
);

}
export default Intro;