import { Navigation, Pagination, Scrollbar, A11y, Autoplay, Mousewheel } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import './Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/mousewheel'

import parque from '../../assets/parque.png'
import parque2 from '../../assets/parque2.jpg'
import sachaca from '../../assets/sachaca.jpeg'

export default function Slider(){

    return(
        <div id='slider'>

            <Swiper className={`swiperContainer`} 
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay,Mousewheel]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                //   onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                loop={true}
                // mousewheel={{                
                //     invert:false
                // }}
                // style={{
                //     "--swiper-pagination-bullet-size": "20px",
                // }}
                >
                <SwiperSlide><img src={parque} className='sliderImg' ></img></SwiperSlide>
                <SwiperSlide><img src={parque2} className='sliderImg'></img></SwiperSlide>
                <SwiperSlide><img src={sachaca} className='sliderImg'></img></SwiperSlide>
                <SwiperSlide><img src={parque2} className='sliderImg'></img></SwiperSlide>
                
            </Swiper>
        </div>
    )
}