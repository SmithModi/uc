import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export function AES() {
  return (
    <Carousel className="carousel-img">
      <div>
        <img src="./icons/electronics.png" alt="All Electronics Service" />
      </div>
      <div>
        <img src="./icons/electronics.png" alt="All Electronics Service" />
      </div>
      <div>
        <img src="./icons/electronics.png" alt="All Electronics Service" />
      </div>
    </Carousel>
  );
}

export default AES;
