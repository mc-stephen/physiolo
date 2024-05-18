"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/autoplay";
import Image, { StaticImageData } from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Style from "./page.module.css";
import GoogleMapLocation from "@/widget/map/map";
import { Swiper, SwiperSlide } from "swiper/react";
import sliderImage3 from "/public/image/image2.jpg";
import sliderImage2 from "/public/image/Contact.jpg";
import homeIcon1 from "/public/image/home/target.png";
import homeIcon2 from "/public/image/home/massage.png";
import sliderImage4 from "/public/image/cookie-policy.jpg";
import homeIcon3 from "/public/image/home/reflexology.png";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import appointmentImg from "../../public/image/home-Image.jpg";
import sliderImage1 from "/public/image/sport-therapy-header.jpg";

export default function Home() {
  const sliderImages = [sliderImage1, sliderImage2, sliderImage3, sliderImage4];
  const service: Services[] = [
    {
      icon: homeIcon1,
      path: "/bobath",
      title: "KG-ZNS / PNF/BOBATH",
      message: `Multiple sclerosis, Parkinson's disease, paraplegia, traumatic 
        brain injury, stroke, joint surgery, sports accidents, facial, oral and 
        swallowing problems (including jaw problems), back pain`,
    },
    {
      icon: homeIcon2,
      path: "/physiotherapy",
      title: "PHYSIOTHERAPY",
      message: `Fractures, use of artificial joints, amputations, muscle and 
        tendon tears, strengthening and stabilization of patients, treatment 
        after accidents or long-term illnesses, reintegration into work, 
        osteoarthritis, spinal diseases`,
    },
    {
      icon: homeIcon3,
      path: "/drainage",
      title: "Manual lymph drainage",
      message: `Chronic, lymphedema, chronic venous insufficiency, postoperative 
        swelling, torn muscle fibers, chronic polyarthritis, CRPS (complex regional 
        pain syndrome), post-stroke hemiplegia swelling, headache`,
    },
  ];
  return (
    <main className={Style.main}>
      {/*  */}

      <section className={Style.container}>
        <Swiper
          navigation
          spaceBetween={50}
          className={Style.swiper}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, A11y]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliderImages.map((val, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  className={Style.swiperImage}
                  src={val}
                  fill={false}
                  alt={i.toString()}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/*  */}
      <section className={Style.servicesContainer}>
        <b className={Style.title}>OUR SERVICES</b>
        <div className={Style.grid}>
          {service.map((val, i) => {
            return (
              <div className={Style.servicesCont} key={i}>
                <Image
                  src={val.icon}
                  alt={val.title}
                  className={Style.homeIcon}
                />
                <h5 className={Style.title}>{val.title}</h5>
                <p className={Style.msg}>{val.message}</p>
                <Link href={`/services${val.path}`} className={Style.link}>
                  <input
                    type="button"
                    value="Read More"
                    className={Style.btn}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <Link href="/services" className={Style.link}>
          <button type="button" className={Style.btn}>
            View More Services
          </button>
        </Link>
      </section>

      {/*  */}
      <section className={Style.section}>
        <Image
          className={Style.appointmentImg}
          src={appointmentImg}
          alt="message image"
        />
        <div className={Style.frontCont}>
          <b className={Style.heading}>
            An outstanding team is available to help you with your health
            concerns
          </b>
          <Link href="/book-appointment" className={Style.link}>
            <button className={Style.btn}>MAKE AN APPOINTMENT</button>
          </Link>
        </div>
      </section>

      {/*  */}
      <GoogleMapLocation />
    </main>
  );
}

//==========================
// SERVICES
//==========================
interface Services {
  path: string;
  title: string;
  message: string;
  icon: StaticImageData;
}
