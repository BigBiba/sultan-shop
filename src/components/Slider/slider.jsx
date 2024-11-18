'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import Image from 'next/image';
import {sliderData} from './data.js'
import './style.css';

export default function Slider() {
    return (
    <div className="slider-container">
        <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween = {30}
        className="mySwiper"
        >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-content'>
                            <p>{slide.add_description}</p>
                            <Image src={slide.imageSrc} alt = {slide.add_description} className="slide-image" />
                            <h3>{slide.title}</h3>
                            <p style={{ lineHeight: '1.5' }} dangerouslySetInnerHTML={{ __html: slide.description.split('\n').join('<br />') }}></p>
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
    )
}