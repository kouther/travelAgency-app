import HotelCard from './HotelCard';
import react, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import '../Style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Description from './Description';


const Hotels=()=>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    const [hotelsList, setHotelsList] = useState([
        {
          id:uuidv4(),
          title: "Splashworld Venus Beach",
          rate: 3,
          price: 80,
          Location:"Sousse",
          description:"La résidence Magic Life est un hôtel de charme et de prestige gratifié de 4 étoiles...",
          img:"https://image.resabooking.com/images/image_panoramique/magic_hotel_venus_beach_aqua_splash_2.jpg",
        },
        {
          id:uuidv4(),
          title: "Jaz Tour Khalef",
          rate: 4,
          price: 90,
          Location:"Sousse",
          description:"l'hôtel Jaz Tour Khalef Thalasso et Spa de Sousse en a attiré plus d'un depuis des années...",
          img:"https://image.resabooking.com/images/hotel/Jaz_Tour_Khalef__13.jpg",
        },
        {
          id:uuidv4(),
          title: "Chich Khan",
          rate: 4,
          price: 79,
          Location:"Hammamet",
          description:"L’un des meilleurs hôtels qui se trouve à quelques minutes d'Yasmin Hammamet...",
          img:"https://image.resabooking.com/images/hotel/Chich_Khan_4.jpg",
        },
        {
          id:uuidv4(),
          title: "Blue Marine Hotel & Thalasso",
          rate: 5,
          price: 2021,
          Location:"Hammamet",
          description:"Cet hotel nous apporte ce lieu d’exception avec son architecture atypique...",
          img:"https://image.resabooking.com/images/hotel/Blue_Marine_Hotel_&_Thalasso_(Ex:Laico)_7.jpg",
        },
        {
          id:uuidv4(),
          title: "Le Sultan Hammamet",
          rate: 4,
          price: 89,
          Location:"Hammamet",
          description:"Dans la ville d'Hammamet que se trouve Le Sultan, un hôtel de luxe à quatre étoiles...",
          img:
            "https://image.resabooking.com/images/hotel/sentido_le_sultan_5.jpg",
        },
        {
          id:uuidv4(),
          title: "Royal Garden Palace Djerba",
          rate: 5,
          price: 120,
          Location:"Djerba",
          description:"Le Royal Garden Palace Djerba est un lieu magique à l'île de rêve Djerba...",
          img:"https://image.resabooking.com/images/hotel/Royal_Garden_Palace_15.jpg",
        },
        {
          id:uuidv4(),
          title: "Sidi Mansour Resort & Spa Djerba   ",
          rate: 5,
          price: 130,
          Location:"Djerba",
          description:"Cet hotel possède un design à la fois moderne et traditionnel...",
          img:"https://image.resabooking.com/images/image_panoramique/Sidi_Mansour_Resort_&_Spa_2.jpg",
        },
        {
          id:uuidv4(),
          title: "Caribbean World Djerba Djerba",
          rate: 4,
          price: 70,
          Location:"Djerba",
          description:"Un passage en Tunisie se prépare dans les moindres détails...",
          img:"https://image.resabooking.com/images/hotel/caribbean_world_djerba_4.jpg",
        },
      ]);

    return(
      <div style={{marginTop:'2%'}} id='hotels'>
      <h2 className='title'>Most Populair Hotels </h2>
      <p style={{textAlign:'center',marginBottom:'4%'}}>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has been <br/> the industry's standard dummy text ever since the 1500s,</p>
        <Carousel responsive={responsive}>

             {hotelsList.map((el) => (
                <div> <HotelCard hotel={el} />
               </div>
           ))}
       </Carousel>

        
       </div> 

    );


}
export default Hotels;