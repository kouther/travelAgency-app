import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Rating from '@mui/material/Rating';
import '../Style.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const TourCard=({tour})=>{
    return(
<Card sx={{ maxWidth: 345 }} style={{borderBottom:"3px solid #053779"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image={tour.img}
          alt={tour.title}
        />
        <CardContent>
        <div>          
            <span style={{fontSize: 18, color: '#02b5ff',paddingRight:'7%'}}><LocationOnIcon/> {tour.Location} </span>
        </div>
          <Typography gutterBottom variant="h5" component="div" className='hcard-title'>
          
          {tour.title} 

          </Typography>
          <Typography variant="body2" color="text.secondary">
           {tour.Date}
          </Typography>
          <div><span className='card-price'>{tour.price} </span> DNT/ person</div>
        </CardContent>
      </CardActionArea>
    </Card>
    );


}
export default TourCard;




