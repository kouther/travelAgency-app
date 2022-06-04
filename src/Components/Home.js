import Slider from './Slider/Slider';
import Intro from './Intro';
import Hotels from './HotelsList/Hotels';
import Footer from './Footer/Footer';
import Tours from './Tours/Tours';
import AboutTravel from './AboutTravel';


function Home() {
 
  return (
    <div>
        
     <Slider></Slider>
     <Intro></Intro>
     <Hotels></Hotels>
     <AboutTravel></AboutTravel>
     <Tours></Tours>
     <Footer></Footer>
    </div>
  );
}

export default Home;
