import data from "./data.json";
import "./Carousel.scss"

const Carousel = (props) => {
    console.log(props.img);
    const imgs = props.img;
  return <div className="carousel">
      { 
          
          imgs.map((image, index) => {
              return <img id="poster" key={index} src={image} alt="affiche_de_film" />
          })
       }
  </div>;
};

export default Carousel;
