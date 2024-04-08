"use client";

import "swiper/css";
import Link from "next/link";
import "swiper/css/autoplay";
import Image from "next/image";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./page.module.css";
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
    <main className={styles.main}>
      {/*  */}

      <section className={styles.container}>
        <Swiper
          navigation
          spaceBetween={50}
          className={styles.swiper}
          pagination={{ clickable: true }}
          modules={[Navigation, Autoplay, A11y]}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {sliderImages.map((val, i) => {
            return (
              <SwiperSlide key={i}>
                <Image
                  className={styles.swiperImage}
                  src={val}
                  fill={false}
                  alt={i.toString()}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
        {/* <div className={styles.slideWrapper}>
          <div className={styles.slider}>
            <Image 
              src={sliderImage1}
              alt={"slider Image"}
              className={styles.sliderImg}
            />
            <Image 
              src={sliderImage2}
              alt={"slider Image"}
              className={styles.sliderImg}
              />
            <Image 
              src={sliderImage3}
              alt={"slider Image"}
              className={styles.sliderImg}
            />
            <Image 
              src={sliderImage4}
              alt={"slider Image"}
              className={styles.sliderImg}
            />
          </div>
          <div className={styles.slideNav}>
            <span className={styles.slideArrow}><i className="fa fa-angle-left" aria-hidden="true"></i></span>
            <span className={styles.slideArrow}><i className="fa fa-angle-right" aria-hidden="true"></i></span>
          </div>
          <div className={styles.slideButtons}>
            <button type="button" className={styles.slideButton} id={styles.slideButton1}>CONTINUE READING</button>
            <button type="button" className={styles.slideButton} id={styles.slideButton2}>CONTACT</button>
          </div>
        </div> */}
      </section>

      {/*  */}
      <section>
        <div className={styles.servicesContainer}>
          <h6 className={styles.servicesHeading}>OUR SERVICES</h6>
          <div className={styles.servicesBoxContainer}>
            <div className={styles.servicesBox}>
              <span className={styles.servicesIcon}>
                <Image
                  src={homeIcon1}
                  alt={"home Icon"}
                  className={styles.homeIcon}
                />
              </span>
              <h5 className={styles.servicesTitle}>KG-KNS-PNF/BOBATH</h5>
              <p className={styles.servicesContent}>
                Multiple sclerosis, {"Parkinson's"} disease, paraplegia,
                traumatic brain injury, stroke, joint surgery, sports accidents,
                facial, oral and swallowing problems (including jaw problems),
                back pain
              </p>
              <button type="button" className={styles.servicesButton}>
                Learn more
              </button>
            </div>
            <div className={styles.servicesBox}>
              <span className={styles.servicesIcon}>
                <Image
                  src={homeIcon2}
                  alt={"home Icon"}
                  className={styles.homeIcon}
                />
              </span>
              <h5 className={styles.servicesTitle}>PHYSIOTHERAPY</h5>
              <p className={styles.servicesContent}>
                Fractures, use of artificial joints, amputations, muscle and
                tendon tears, strengthening and stabilization of patients,
                treatment after accidents or long-term illnesses, reintegration
                into work, osteoarthritis, spinal diseases
              </p>
              <button type="button" className={styles.servicesButton}>
                Learn more
              </button>
            </div>
            <div className={styles.servicesBox}>
              <span className={styles.servicesIcon}>
                <Image
                  src={homeIcon3}
                  alt={"home Icon"}
                  className={styles.homeIcon}
                />
              </span>
              <h5 className={styles.servicesTitle}>Manual lymph drainage</h5>
              <p className={styles.servicesContent}>
                Chronic, lymphedema, chronic venous insufficiency, postoperative
                swelling, torn muscle fibers, chronic polyarthritis, CRPS
                (complex regional pain syndrome), post-stroke hemiplegia
                swelling, headache
              </p>
              <button type="button" className={styles.servicesButton}>
                Learn More
              </button>
            </div>
          </div>
          <div className={styles.buttonBox}>
            <button type="button" className={styles.moreServicesButton}>
              View More Services
            </button>
          </div>
        </div>
      </section>

      {/*  */}
      <section className={styles.section}>
        <Image
          className={styles.appointmentImg}
          src={appointmentImg}
          alt="message image"
        />
        <div className={styles.frontCont}>
          <b className={styles.heading}>
            An outstanding team is available to help you with your health
            concerns
          </b>
          <Link href="/book-appointment" className={styles.link}>
            <button className={styles.btn}>MAKE AN APPOINTMENT</button>
          </Link>
        </div>
      </section>

      {/*  */}
      <GoogleMapLocation />
    </main>
  );
}
