import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


// Real Estate Service
export function RE() {
  return (
    <Carousel className="carousel-img">
      <div>
        <img className="car" src="./icons/house.png" alt="Real Estate Service" />
      </div>
    </Carousel> 
  );
}




// Main export for all services
export default RE;
