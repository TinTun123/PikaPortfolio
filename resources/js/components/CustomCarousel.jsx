import React, {useEffect} from 'react';
import CarouselArrows from "./CarouselArrows.jsx";
import CarouselDots from "./CarouselDots.jsx";
import Glide from "@glidejs/glide";
import '@glidejs/glide/src/assets/sass/glide.core.scss';
// eslint-disable-next-line react/prop-types
const CustomCarousel = ({children, items, perView = 2, autoplay = 2000}) => {


    const sliderConfiguration = {
        gap: 20,
        perView: perView,
        startAt: 0,
        autoplay: autoplay,
        breakpoints: {
            600: {
                perView: 1
            },
        },
        hoverpause: true,
        type: "carousel"
    };

    const slider = new Glide('.glide', sliderConfiguration);

    useEffect(() => {
        if(slider){
            slider.mount();
        }
    }, [slider])

    return (
        <div>
            <div className='glide__track z-0 relative' data-glide-el='track'>
                <ul className='glide__slides'>
                    {children}
                </ul>
                <CarouselArrows/>
            </div>
            <CarouselDots items={items}/>
        </div>
    );
};

export default CustomCarousel;
