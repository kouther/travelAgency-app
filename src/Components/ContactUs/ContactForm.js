import { Container, Col, Row } from 'react-bootstrap';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import FaxIcon from '@mui/icons-material/Fax';
import React, { useState } from 'react'
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import '../Style.css';


const ContactForm=()=>{
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);

    const submit = () => {
        if (name && number && email && message) {
           // TODO - send mail
    
            setName('');
            setNumber('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    }

    return(
        <Container style={{marginBottom:'10%', marginTop:'5%' }}>
            <h2 className='title'>Get In Touch!</h2>
            <p style={{textAlign:'center', lineHeight:'40px'}}>Vestibulum blandit viverra convallis. Pellentesque ligula urna, fermentum ut semper in,<br/> tincidunt nec dui. Morbi mauris lacus, consequat eget justo in

</p>
            <Row>
                <Col xs={6} md={6}>
                <p><span className="social-icon"><LocationOnIcon/> </span> <span>Travel Point, Badda Link Road, Badda      Dhaka, Tunisie</span></p>
      <p><span className="social-icon"><MailIcon/> </span> kawther@travelPoint.com</p>
      <p><span className="social-icon"><PhoneIcon/> </span> +216 50 007 003</p>
      <p><span className="social-icon"><FaxIcon/> </span> +216 50 007 004</p>

                </Col>
        


















                <Col xs={6} md={6}>
                <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", padding:"2%" }}>
                

        <TextField required id="outlined-required" label="Your Name" defaultValue={name} onChange={e => setName(e.target.value)} style={{width:'45%'}} />
        <TextField required id="outlined-required" label="Your Phone" defaultValue={number} onChange={e => setNumber(e.target.value)} style={{width:'45%'}} />
        </div>
        <TextField required id="outlined-required" label="Your email address" defaultValue={email} onChange={e => setEmail(e.target.value)} style={{width:"92%", marginTop:15}} />
        <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)} style={{width: '92%', borderRadius: '5px', marginTop: '5%', height: '40%', borderColor: '#c4c4c4'}}></textarea>
        <Button variant="contained" onClick={submit} style={{background:'#02b5ff', marginTop:'2%' }}>Send Message</Button>
        {emailSent ? <span> <br/>Thank you for your message, we will be in touch in no time!</span> : null}
        {/* <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span> */}

                </Col>

            </Row>
        </Container>

    );

}
export default ContactForm;