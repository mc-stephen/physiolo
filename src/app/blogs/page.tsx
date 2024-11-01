"use client";

import Link from "next/link";
import Image from "next/image";
import Styles from "./blog.module.css";
import fetchHygraphData from "./api/blog_api";
import profilePic from "/public/image/page-header.jpg";
import { useContext, useEffect, useState } from "react";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Blog() {
  const { locale } = useContext(LocaleContext);
  const [blogData, setBlogData] = useState([]);
  useEffect(() => {
    cc();
    async function cc() {
      await fetchHygraphData()
        .then((val) => {
          console.log(val);
          setBlogData(val.blogs);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, []);
  return (
    <main className={Styles.blog}>
      <BodyHeader
        pageTitle={locale.blog_page_title}
        imageAlt={"Blog Image"}
        pagePath={"HOME / " + locale.blog_page_title}
        imageSource={profilePic}
      />
      <section className={Styles.bodyCont}>
        {blogData.map((val: any, i) => {
          return (
            <div key={i} className={Styles.blogPost}>
              <Image
                className={Styles.blogImage}
                src={val.image.url}
                width={200}
                height={200}
                alt={"Blog Images"}
              />
              <div className={Styles.blogInfo}>
                <li className={Styles.blogListItem}>
                  {val.tags.map((val: any, i: number) => {
                    return (
                      <Link key={i} className={Styles.blogListLink} href="#">
                        {val}
                      </Link>
                    );
                  })}
                </li>
                <b className={Styles.blogTitle}>{val.title}</b>
                <span className={Styles.blogMeta}>
                  {val.createdBy.name} / {val.createdAt}
                </span>
                <p className={Styles.blogContentIntro}>{val.description}</p>
                <Link href={`/blogs/${val.slug}`} className={Styles.blogButton}>
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
