import React from 'react';
import {GoDotFill} from "react-icons/go";

const CarouselDots = ({items = []}) => {

    return (
        <div className="glide__bullets mt-3 flex gap-2 justify-center" data-glide-el="controls[nav]">
            {
                items.map((i, index) => (
                    <button key={index.toString()} className="glide__bullet" data-glide-dir={`=${index}`}>
                        <GoDotFill id={'dot'}/>
                    </button>
                ))
            }
        </div>
    );
};

export default CarouselDots;
