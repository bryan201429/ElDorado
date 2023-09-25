import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import './Slider.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import parque from '../../assets/parque.png'
import parque2 from '../../assets/parque2.jpg'

export default function Slider(){
    return(
        <div id='slider'>

            <Swiper className='swiperContainer'

                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
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
                // style={{
                //     "--swiper-pagination-bullet-size": "20px",
                // }}
                >
                <SwiperSlide><img src={parque} className='sliderImg' ></img></SwiperSlide>
                <SwiperSlide><img src={parque2} className='sliderImg'></img></SwiperSlide>
                <SwiperSlide><img src={parque} className='sliderImg'></img></SwiperSlide>
                <SwiperSlide><img src={parque2} className='sliderImg'></img></SwiperSlide>
                
            </Swiper>
        </div>
    )
}