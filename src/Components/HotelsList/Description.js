import React, { useEffect, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';

const Description = (props) => {
    console.log("#p", props);
    /* const [hotel, setHotel] = useState(null)
    useEffect(
        () => {
            setHotel(
                props.hotelsList.filter(
                    (el) => el.id === props.match.params.HotelId
                )[0]
            )
        }
    )
    return (
        <div>
    

            {
                hotel &&  <React.Fragment>
                <CssBaseline />
                <Container maxWidth="100%">
                  <Box sx={{  height: '100%' }} >
                      <div style={{clear:"both"}}>
                          <Rating style={{float: "left",marginRight: 5}} name="half-rating-read" defaultValue={hotel.rate} precision={0.5} readOnly /> <h3>{hotel.title}</h3></div>
                      <p>{hotel.Description}</p>

                      </Box>
                </Container>
              </React.Fragment>
            }


        </div>
    ) */
}

export default Description;