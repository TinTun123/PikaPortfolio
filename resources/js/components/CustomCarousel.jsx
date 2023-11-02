import React, {useEffect, useState} from 'react';
import CarouselArrows from "./CarouselArrows.jsx";
import CarouselDots from "./CarouselDots.jsx";
import Glide from "@glidejs/glide";
import '@glidejs/glide/src/assets/sass/glide.core.scss';
// eslint-disable-next-line react/prop-types
const CustomCarousel = ({children, id,items, perView = 2, autoplay = 2000}) => {

    const [slider, setSlider] = useState(null);

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
        type: "carousel"
    };

    useEffect(() => {
        setSlider(new Glide(`.${id}`, sliderConfiguration));
    }, []);


    useEffect(() => {
        if (slider) {
            slider.mount();
        }
        return () => {
            console.log('unmounting');
            if (slider) {
                setSlider(null);
            }
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
