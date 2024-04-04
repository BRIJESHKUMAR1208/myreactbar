import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
            <h2>Image Slider</h2>
            <Slider {...settings}>
                <div>
                    <img src="../src/Images/istockphoto-1360547127-1024x1024.jpg" alt="Image 1" />
                </div>
                <div>
                    <img src="../src/Images/pexels-assedrani-official-20246374.jpg" alt="Image 2" />
                </div>
                {/* <div>
                    <img src="image3.jpg" alt="Image 3" />
                </div> */}
            </Slider>
        </div>
    );
};

export default SliderComponent;
