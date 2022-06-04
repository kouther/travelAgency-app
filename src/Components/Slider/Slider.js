import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';
import travel1 from "./travel1.png";
import travel2 from "./travel2.png";
import travel3 from "./travel3.png";
import '../Style.css';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider=()=>{
  return(


    <AutoplaySlider 
    play={true}
    cancelOnInteraction={true} // should stop playing on user interaction
    interval={6000}
  >
    <div data-src={travel3} />
    <div data-src={travel1} />
    <div data-src={travel2} />
  </AutoplaySlider>
);
}
export default Slider;