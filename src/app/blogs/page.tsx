"use client";

import Link from "next/link";
import Image from "next/image";
import blogData from "./blog-data";
import { useContext } from "react";
import Styles from "./blog.module.css";
import blogImage from "/public/image/blog-image.jpg";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Blog() {
  const { locale } = useContext(LocaleContext);
  return (
    <main className={Styles.blog}>
      <BodyHeader
        pageTitle={locale.blog_page_title}
        imageAlt={"Blog Image"}
        pagePath={"HOME / " + locale.blog_page_title}
        imageSource={profilePic}
      />
      <section className={Styles.bodyCont}>
        {blogData.map((val, i) => {
          return (
            <div key={i} className={Styles.blogPost}>
              <Image
                className={Styles.blogImage}
                src={blogImage}
                alt={"Blog Images"}
              />
              <div className={Styles.blogInfo}>
                <li className={Styles.blogListItem}>
                  {val.tags.map((val, i) => {
                    return (
                      <Link key={i} className={Styles.blogListLink} href="#">
                        {val}
                      </Link>
                    );
                  })}
                </li>
                <b className={Styles.blogTitle}>{val.title}</b>
                <span className={Styles.blogMeta}>
                  {val.author} / {val.dateCreated}
                </span>
                <p className={Styles.blogContentIntro}>{val.description}</p>
                <Link href={val.url} className={Styles.blogButton}>
                  <button className={Styles.blogButton}>Read More</button>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
