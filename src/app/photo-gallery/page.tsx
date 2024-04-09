"use client";

import BodyHeader from "@/components/body-header/body-header";
import Styles from "./page.module.css";
import profilePic from "/public/image/page-header.jpg";
import Image from "next/image";
import imageList from "./image_list";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
        <div className={Styles.gallerybox}>
          {imageList.map((val, i) => {
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
