import TourCard from './TourCard';
import react, { useState,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import "react-multi-carousel/lib/styles.css";
import '../Style.css';


const Tours=()=>{
    
    const [ToursList, setToursList] = useState([
        {
          id:uuidv4(),
          title: "Hurawalhi Island",
          Date: "7 Days Tour",
          price: 4300,
          Location:"Maldive",
          img:"http://zwin.io/react/viaje/assets/img/destination-list/4.png",
        },
        {
          id:uuidv4(),
          title: "Bali Province",
          Date: " 8 Days Tour",
          price: 3500,
          Location:"Indonesia",
          img:"http://zwin.io/react/viaje/assets/img/destination-list/5.png",
        },
        {
          id:uuidv4(),
          title: "Cox's bazar Sea Beach",
          Date: " 8 Days Tour",
          price: 2790,
          Location:"Bangladesh",
          img:"http://zwin.io/react/viaje/assets/img/destination-list/6.png",
        },
        {
          id:uuidv4(),
          title: "Barcelona city beach",
          Date: " 8 Days Tour",
          price: 3200,
          Location:"spain",
          img:"http://zwin.io/react/viaje/assets/img/destination-list/7.png",
        },
      ]);

    return(
      <div style={{marginTop:'2%'}} id='tours'>

      <h2 className='title'>Perfect Holiday Plan </h2>
      <p style={{textAlign:'center',marginBottom:'4%'}}>Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem Ipsum has <br/>been the industry's standard dummy text ever since the 1500s,</p>
      <div style={{ display: "flex", gap: "25px", flexWrap: "wrap", padding:"2%" }}>

             {ToursList.map((el) => (
                <div> <TourCard tour={el} />
               </div>
           ))}
        </div>

        
       </div> 

    );


}
export default Tours;