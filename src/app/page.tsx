"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/autoplay";
import Image from "next/image";
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
        {/* <div className={Style.slideWrapper}>
          <div className={Style.slider}>
            <Image 
              src={sliderImage1}
              alt={"slider Image"}
              className={Style.sliderImg}
            />
            <Image 
              src={sliderImage2}
              alt={"slider Image"}
              className={Style.sliderImg}
              />
            <Image 
              src={sliderImage3}
              alt={"slider Image"}
              className={Style.sliderImg}
            />
            <Image 
              src={sliderImage4}
              alt={"slider Image"}
              className={Style.sliderImg}
            />
          </div>
          <div className={Style.slideNav}>
            <span className={Style.slideArrow}><i className="fa fa-angle-left" aria-hidden="true"></i></span>
            <span className={Style.slideArrow}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
          <div className={Style.slideButtons}>
            <button type="button" className={Style.slideButton} id={Style.slideButton1}>CONTINUE READING</button>
            <button type="button" className={Style.slideButton} id={Style.slideButton2}>CONTACT</button>
          </div>
        </div> */}
      </section>

      {/*  */}
      <section>
        <div className={Style.servicesContainer}>
          <h6 className={Style.servicesHeading}>OUR SERVICES</h6>
          <div className={Style.servicesBoxContainer}>
            <div className={Style.servicesBox}>
              <span className={Style.servicesIcon}>
                <Image
                  src={homeIcon1}
                  alt={"home Icon"}
                  className={Style.homeIcon}
                />
              </span>
              <h5 className={Style.servicesTitle}>KG-KNS-PNF/BOBATH</h5>
              <p className={Style.servicesContent}>
                Multiple sclerosis, {"Parkinson's"} disease, paraplegia,
                traumatic brain injury, stroke, joint surgery, sports accidents,
                facial, oral and swallowing problems (including jaw problems),
                back pain
              </p>
              <button type="button" className={Style.servicesButton}>
                Learn more
              </button>
            </div>
            <div className={Style.servicesBox}>
              <span className={Style.servicesIcon}>
                <Image
                  src={homeIcon2}
                  alt={"home Icon"}
                  className={Style.homeIcon}
                />
              </span>
              <h5 className={Style.servicesTitle}>PHYSIOTHERAPY</h5>
              <p className={Style.servicesContent}>
                Fractures, use of artificial joints, amputations, muscle and
                tendon tears, strengthening and stabilization of patients,
                treatment after accidents or long-term illnesses, reintegration
                into work, osteoarthritis, spinal diseases
              </p>
              <button type="button" className={Style.servicesButton}>
                Learn more
              </button>
            </div>
            <div className={Style.servicesBox}>
              <span className={Style.servicesIcon}>
                <Image
                  src={homeIcon3}
                  alt={"home Icon"}
                  className={Style.homeIcon}
                />
              </span>
              <h5 className={Style.servicesTitle}>Manual lymph drainage</h5>
              <p className={Style.servicesContent}>
                Chronic, lymphedema, chronic venous insufficiency, postoperative
                swelling, torn muscle fibers, chronic polyarthritis, CRPS
                (complex regional pain syndrome), post-stroke hemiplegia
                swelling, headache
              </p>
              <button type="button" className={Style.servicesButton}>
                Learn More
              </button>
            </div>
          </div>
          <div className={Style.buttonBox}>
            <button type="button" className={Style.moreServicesButton}>
              View More Services
            </button>
          </div>
        </div>
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
