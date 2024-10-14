import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export function CCTVS() {
    return (
      <Carousel className="carousel-img">
        <div>
          <img src="./icons/CCTV.png" alt="CCTV Camera Service" />
        </div>
      </Carousel>
    );
  }
  
  export default CCTVS;
  