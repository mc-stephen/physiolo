"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useContext } from "react";
import Style from "./page.module.css";
import GoogleMapLocation from "@/widget/map/map";
import { Swiper, SwiperSlide } from "swiper/react";
import Image, { StaticImageData } from "next/image";
import sliderImage3 from "/public/image/image3.jpg";
import sliderImage from "/public/image/home_slider_img.png";
import homeIcon1 from "/public/image/home/target.png";
import homeIcon2 from "/public/image/home/massage.png";
import homeIcon3 from "/public/image/home/reflexology.png";
import { Navigation, Autoplay, A11y } from "swiper/modules";
import appointmentImg from "../../public/image/home-Image.jpg";
import { LocaleContext } from "@/contexts/translation-context";

export default function Home() {
  const { locale } = useContext(LocaleContext);
  const sliderImages = [sliderImage, sliderImage3];
  const service: Services[] = [
    {
      icon: homeIcon1,
      path: "/bobath",
      title: locale.bobath,
      message: locale.bobath_msg,
    },
    {
      icon: homeIcon2,
      path: "/physiotherapy",
      title: locale.physiotherapy,
      message: locale.physiotherapy_msg,
    },
    {
      icon: homeIcon3,
      path: "/drainage",
      title: locale.drainage,
      message: locale.drainage_msg,
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
              <SwiperSlide className={Style.imgSwiperCont} key={i}>
                  <Image
                    src={val}
                    // fill={true}
                    quality={100}
                    alt={i.toString()}
                    className={Style.swiperImage}
                  />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>

      {/*  */}
      <section className={Style.servicesContainer}>
        <b className={Style.title}>{locale.our_services}</b>
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
                    value={locale.read_more}
                    className={Style.btn}
                  />
                </Link>
              </div>
            );
          })}
        </div>
        <Link href="/services" className={Style.link}>
          <button type="button" className={Style.btn}>
            {locale.show_more}
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
          <b className={Style.heading}>{locale.outstanding_team}</b>
          <Link href="/book-appointment" className={Style.link}>
            <button className={Style.btn}>{locale.make_an_appointment}</button>
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
