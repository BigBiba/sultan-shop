'use client'

import { useEffect, useState } from 'react'; 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import Image from 'next/image';
import { sliderData } from './data.js';
import './style.css';

import { Button } from '../shared/Button';

export default function Slider() {
    const [isSwiperInitialized, setSwiperInitialized] = useState(false);

    useEffect(() => {
        setSwiperInitialized(true);
    }, []);

    if (!isSwiperInitialized) {
        return <div>Загрузка...</div>; // заглушкa
    }

    return (
        <div className="slider-container">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                spaceBetween={30}
                className="mySwiper"
            >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-content'>
                            <p>{slide.add_description}</p>
                            <Image 
                                src={slide.imageSrc} 
                                alt={slide.add_description} 
                                className="slide-image" 
                                width={500} // Укажите ширину изображения
                                height={300} // Укажите высоту изображения
                            />
                            <h3>{slide.title}</h3>
                            <p style={{ lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: slide.description.split('n').join('<br />') }}></p>
                            <Button text='Принять участие' text_size={16} icon_src={''} icon_alt='' width={200} height={45}></Button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
