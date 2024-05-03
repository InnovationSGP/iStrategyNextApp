'use client'
import {Autoplay} from "swiper/modules"
import {Swiper, SwiperSlide} from "swiper/react"
import kdads from "/public/assets/logo21.png"
import brand1 from "/public/assets/logo22.png"
import brand2 from "/public/assets/logo23.png"
import brand3 from "/public/assets/logo24.png"
import {motion} from "framer-motion"

import Image from "next/image";

const swiperOptions = {
    modules: [Autoplay],
    slidesPerView: 5,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 5,
            spaceBetween: 30,
        },
    }
}

export default function LogoSlider() {
    return (
        <>
            {/*<Swiper {...swiperOptions} className="logos logos2 owl-carousel">*/}
            {/*    <SwiperSlide className="single-logo">*/}
            {/*        <Image src={kdads} alt=""/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide className="single-logo">*/}
            {/*        <Image src={brand1} alt=""/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide className="single-logo">*/}
            {/*        <Image src={brand2} alt=""/>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide className="single-logo">*/}
            {/*        <Image src={brand3} alt=""/>*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}

            {/*<motion.img*/}
            {/*    initial={{x: - 100}}*/}
            {/*    animate={{x: 0}}*/}
            {/*>*/}
            {/*    <Image src={kdads} alt=""/>*/}
            {/*</motion.img>*/}
        </>
    )
}
