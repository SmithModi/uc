import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function ATBS() {
    return (
      <Carousel className="carousel-img"> 
        <div>
          <img src="./icons/Travel.png" alt="All Travel Booking Service" />
        </div>
      </Carousel>
    );
  }
  
  export default ATBS;
  