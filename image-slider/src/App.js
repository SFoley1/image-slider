import logo from './logo.svg';
import './App.css';
import ImageSlider from './ImageComponents/ImageSlider';
import { SliderData } from './ImageComponents/SliderData';


function App() {
  return <ImageSlider slides={SliderData} /> ;
}

export default App;
