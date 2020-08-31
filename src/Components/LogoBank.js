import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import '../styles/Swiper.css';
import '../styles/LogoBank.css';
import Logo1 from '../LogoBank1.png';
import Logo2 from '../LogoBank2.png';
import Logo3 from '../LogoBank3.png';
import Logo4 from '../LogoBank4.png';

function LogoBank() {
    return (
        <div className="main" id="LogoBank">
            <div className="section-header">
                <h2>Logo Bank</h2>
            </div>
            <Swiper>
                <SwiperSlide><img src={Logo1} alt="Logo1" /></SwiperSlide>
                <SwiperSlide><img src={Logo2} alt="Logo2" /></SwiperSlide>
                <SwiperSlide><img src={Logo3} alt="Logo3" /></SwiperSlide>
                <SwiperSlide><img src={Logo4} alt="Logo4" /></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default LogoBank;