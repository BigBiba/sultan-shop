'use client'

import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import Image from 'next/image';
import { sliderData } from './data.js';
import './style.css';

export default function Slider() {
    const [isSwiperInitialized, setSwiperInitialized] = useState(false);

    useEffect(() => {
        setSwiperInitialized(true);
    }, []);

    if (!isSwiperInitialized) {
        return <div>Загрузка...</div>; // заглушкa
    }

    return (
        <div>
            <strong>
                <h2 style={{ textAlign: 'left', fontSize: '30px' }}>
                    <span style={{ color: '#FFBF00' }}>ЛУЧШИЕ</span> ТОВАРЫ
                </h2>
            </strong>
            <div style={{ color: 'gray' }}>От ведущих мировых брендов</div>
            <div className="slider-container-sec">
                <Swiper
                    slidesPerView={7}
                    cssMode={true}
                    pagination={true}
                    mousewheel={true}
                    keyboard={true}
                    modules={[Pagination, Mousewheel, Keyboard]}
                    spaceBetween={30}
                    className="mySwiper2"
                >
                    {sliderData.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className='slide-content-sec'>
                                <Image src={slide.imageSrc} alt={slide.title} className="slide-image-sec" width={200} height={200} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}
