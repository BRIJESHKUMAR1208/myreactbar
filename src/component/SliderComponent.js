import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from '../Images/istockphoto-1360547127-1024x1024.jpg';
import '../component/slider.css';
const SliderComponent = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
            
            <Slider {...settings}>
                <div>
                    <img src={image1} alt="Image 1" className="slider-image" />
                </div>
                <div>
                    <img src="../src/Images/pexels-assedrani-official-20246374.jpg" alt="Image 2"className="slider-image" />
                </div>
                {/* <div>
                    <img src="image3.jpg" alt="Image 3" />
                </div> */}
            </Slider>
        </div>
    );
};

export default SliderComponent;
