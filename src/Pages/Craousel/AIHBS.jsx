import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function AIHBS() {
    return (
      <Carousel className="carousel-img">
        <div>
          <img src="./icons/booking.png" alt="All India Hotel Booking Service" />
        </div>
      </Carousel>
    );
  }
  
  export default AIHBS;
  