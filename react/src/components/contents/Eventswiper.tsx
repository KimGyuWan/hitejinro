import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { ChevronRight, ChevronLeft } from 'react-bootstrap-icons';
import module from '../../css/eventswiper.module.scss'

import 'swiper/css';


interface Props { }

function Eventswiper(props: Props) {
  const { } = props

  const eventswiperRef = useRef<SwiperCore | null>(null);

  const navigateNext = () => {
    if (eventswiperRef.current?.slideNext) {
      eventswiperRef.current.slideNext();
    }
  }

  const navigatePrev = () => {
    if (eventswiperRef.current?.slidePrev) {
      eventswiperRef.current.slidePrev();
    }
  }

  return (
    <div className={`${module.back} d-flex justify-content-center`}>
      <section id='eventswiper' className={`${module.eventswiper} mycontainer`}>
        <Swiper
          spaceBetween={70}
          slidesPerView={6}
          loop={true}
          centeredSlides={true}
          loopAdditionalSlides={2}
          onSwiper={(swiper: SwiperCore) => (eventswiperRef.current = swiper)}
          className={module.swiper}
        >
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg1.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg2.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg3.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg4.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg5.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg1.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg2.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg3.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg4.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
          <SwiperSlide className={`${module.slide}`}><div><img src="./img/bg/eventswiperimg5.png" alt="맥주사진" className={module.swiperbeer} /></div></SwiperSlide>
        </Swiper>
        <ChevronLeft onClick={navigatePrev} />
        <ChevronRight onClick={navigateNext} />
        <img src="./img/bg/eventswiperimg6.png" alt="참이슬" className={module.cham} />
      </section>
      <img src="./img/bg/eventswiperback1.png" alt="소주일러스트" className={module.aisoju} />
      <img src="./img/bg/eventswiperback2.png" alt="맥주일러스트" className={module.aibeer} />
    </div>
  )
}

export default Eventswiper