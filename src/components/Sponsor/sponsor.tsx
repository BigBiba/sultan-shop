// 'use client';

import { Swiper, SwiperSlide } from 'swiper/react';

// import dynamic from 'next/dynamic';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';

// const Swiper = dynamic(() => import('swiper/react').then(mod => mod.Swiper), { ssr: false });
// const SwiperSlide = dynamic(() => import('swiper/react').then(mod => mod.SwiperSlide), { ssr: false });

import Image from 'next/image';
import {sliderData} from './data.js'
import './style.css';

export default function Slider() {
    return (
    <div>
      <strong><h2 style={{ textAlign: 'left' }}><span style={{ color: '#FFBF00' }}>ЛУЧШИЕ</span> ТОВАРЫ</h2></strong>
      <div style={{ color: 'gray' }}>От ведущих мировых брендов</div>
    <div className="slider-container-sec">
        <Swiper
        slidesPerView={7}
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        spaceBetween = {30}
        className="mySwiper2"
        >
                {sliderData.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className='slide-content-sec'>
                            <Image src={slide.imageSrc} alt = {slide.title} className="slide-image-sec" />
                        </div>
                    </SwiperSlide>
                ))}
        </Swiper>
    </div>
    </div>
    )
}