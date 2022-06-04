import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import '../Style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const HotelCard=({hotel})=>{
  console.log(hotel)
    return(
<Card sx={{ maxWidth: 345 }} style={{borderBottom:"3px solid rgb(2 181 255)"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={hotel.img}
          alt={hotel.title}
        />
        <CardContent>
        <div>          
            <span style={{fontSize: 18, color: '#02b5ff',paddingRight:'7%'}}><LocationOnIcon/> {hotel.Location} </span>
            <Rating name="half-rating-read" defaultValue={hotel.rate} precision={0.5} readOnly style={{fontSize:19, paddingLeft: "7%", borderLeft: "1px solid #053761",marginTop: "2%", marginBottom: "7%" }}/>
        </div>
          <Typography gutterBottom variant="h5" component="div" className='hcard-title'>
          
          {hotel.title} 

          </Typography>
          <Typography variant="body2" color="text.secondary">
           {hotel.description}
          </Typography>
          <div><span className='card-price'>{hotel.price} </span> DNT/ person</div>
        </CardContent>
      </CardActionArea>
    </Card>
    );


}
export default HotelCard;




