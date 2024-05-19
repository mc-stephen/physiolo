"use client";

import Image from "next/image";
import ImageList from "./image_list";
import Styles from "./page.module.css";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Gallery() {
  return (
    <main className={Styles.gallery}>
      {/*  */}
      <BodyHeader
        pageTitle={"Photo Gallery"}
        imageAlt={"Photo Gallery Image"}
        pagePath={"HOME / Photo Gallery"}
        imageSource={profilePic}
      />

      {/*  */}
      <section className={Styles.gallerySection}>
        <h2 className={Styles.galleryHeading}>Our Photo Gallery</h2>
        <div className={Styles.galleryBox}>
          {ImageList.map((val, i) => {
            return (
              <div className={Styles.imgCont} key={i}>
                <Image
                  src={val}
                  fill={true}
                  alt={"imageAlt"}
                  className={Styles.galleryImg}
                />
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
