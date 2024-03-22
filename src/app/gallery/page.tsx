import BodyHeader from "@/components/body_header/body-header";
import Styles from "./gallery.module.css";
import profilePic from "/public/image/gallery-header.jpg";
import Image from "next/image";
import imageList from "./image_list";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export default function Gallery() {
  return (
    <main className={Styles.gallery}>
      {/*  */}
      <BodyHeader
        pageTitle={"PHOTOGALLERY"}
        imageAlt={"Gallery Image"}
        pagePath={"HOME / PHOTOGALLERY"}
        imageSource={profilePic}
      />

      {/*  */}
      <section className={Styles.gallerySection}>
        <h2 className={Styles.galleryHeading}>Our Photo Gallery</h2>
        <div className={Styles.gallerybox}>
          {imageList.map((val, i) => {
            return <ImageComponent imageSource={val} key={i} />;
          })}
        </div>
      </section>
    </main>
  );
}

function ImageComponent({ imageSource }: { imageSource: StaticImport }) {
  return (
    <div className={Styles.imgCont}>
      <Image
        fill={true}
        alt={"imageAlt"}
        src={imageSource}
        className={Styles.galleryImg}
      />
    </div>
  );
}
