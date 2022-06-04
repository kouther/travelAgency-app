import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import MailIcon from '@mui/icons-material/Mail';
import '../Style.css';


const Newsletter=()=>{
    return(
<div className="news-area">
<Container>


  <Row>
    <Col xs={6} md={6}>
      <h4 className="news-title">Newsletter</h4>
      <p>Sign up to receive the best offers</p>
    </Col>
  
    <Col xs={6} md={6}>
    <MailIcon className="news-icon"/>
     <TextField id="outlined-basic" label="Email" variant="outlined" style={{width:'50%'}}/>
    <Button className="news-button"
  onClick={() => {
    alert('clicked');
  }}
>
Subscribe</Button>
    </Col>
  </Row>

</Container>
</div>
    );
}
export default Newsletter;