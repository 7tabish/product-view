import React , {useState} from 'react'
import { Carousel } from 'react-bootstrap'

function ControlledCarousel() {

    let [images] = useState([
        {id:"1" , imgSrc:"/jeep.jpg" , imgAlt:"productImage"},
        {id:"2" , imgSrc:"/jeep.jpg" , imgAlt:"productImage"},
        {id:"3" , imgSrc:"/jeep.jpg" , imgAlt:"productImage"},
        {id:"4" , imgSrc:"/jeep.jpg" , imgAlt:"productImage"},
    ])



    //slider  navigation
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="p-2">
          {
                images.map(item => {
                  return(
                    <Carousel.Item key={item.id}>
                    <img
                      className="d-block w-100"
                      src={item.imgSrc}
                      alt={item.imgAlt}
                    />
                  </Carousel.Item>
                  )
              })
          }
      </Carousel>
    );
}
  
export default ControlledCarousel