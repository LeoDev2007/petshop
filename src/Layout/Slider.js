import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../img/Banner.png'



function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img style={{height: '50vh'}} className="d-block w-100" alt='Dog' src={img1} />
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height: '50vh'}} className="d-block w-100" alt='Dog' src={img1} />
        
      </Carousel.Item>
      <Carousel.Item>
      <img style={{height: '50vh'}} className="d-block w-100" alt='Dog' src={img1} />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;