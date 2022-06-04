import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

import '../Style.css';
const FooterBottom=()=>{
    return(
      <div  className="footer-container">

<Container>


  <Row>
    <Col xs={3} md={3}>
      <h4 className="footer-title">About us</h4>
      <p>We believe brand interaction is key in commu- nication. Real innovations and a positive customer experience are the heart of successful communication.</p>
      <div className="social-icon"><FacebookIcon/> <InstagramIcon/> <LinkedInIcon/>  <TwitterIcon/>  <GoogleIcon/></div>
    </Col>
    <Col xs={3} md={3}>
      <h4 className="footer-title">Contact us</h4>
      <p><span className="social-icon"><LocationOnIcon/> </span> <span>Travel Point, Badda Link Road, Badda      Dhaka, Tunisie</span></p>
      <p><span className="social-icon"><MailIcon/> </span> kawther@travelPoint.com</p>
      <p><span className="social-icon"><PhoneIcon/> </span> +216 50 007 003</p>
    </Col>    
    <Col xs={3} md={3}>
      <h4 className="footer-title">Quick Link</h4>
      <ul style={{listStyle:"none"}}>
        <li>Home</li>
        <li>About us</li>
        <li>Hotels</li>
        <li>Tours</li>
        <li>Blog</li>
        <li>Contact</li>

      </ul>
    </Col>
    <Col xs={3} md={3}>
      <h4 className="footer-title">Instagram Gallery</h4>
    </Col>
  </Row>

</Container>
</div>
    );
}
export default FooterBottom;