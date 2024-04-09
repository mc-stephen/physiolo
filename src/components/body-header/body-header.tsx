"use client";

import Styles from "./body-header.module.css";
import Image, { StaticImageData } from "next/image";

export default function BodyHeader({
  imageAlt,
  pagePath,
  pageTitle,
  imageSource,
}: {
  imageAlt: string;
  pagePath: string;
  pageTitle: string;
  imageSource: StaticImageData;
}) {
  return (
    <section className={Styles.bodyHeader}>
      <Image
        alt={imageAlt}
        src={imageSource}
        className={Styles.bgImg}
      />
      <div className={Styles.frontView}>
        <b className={Styles.pageTitle}>{pageTitle}</b>
        <span className={Styles.pagePath}>{pagePath}</span>
      </div>
    </section>
  );
}
