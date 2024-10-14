import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function EMS() {
    return (
      <Carousel className="carousel-img">
        <div>
          <img src="./icons/event.png" alt="Event Management Service" />
        </div>
      </Carousel>
    );
  }
  
  export default EMS;
  