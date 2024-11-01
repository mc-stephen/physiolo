"use client";

import Image from "next/image";
import Styles from "./page.module.css";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import profilePic from "/public/image/page-header.jpg";
import fetchHygraphSingleData from "./api/single_blog_data";
import BodyHeader from "@/components/body-header/body-header";

export default function BlogRead() {
  const currentPath: string = usePathname();
  const [blogData, setBlogData]: any = useState({});
  useEffect(() => {
    cc();
    async function cc() {
      await fetchHygraphSingleData(currentPath.split("/")[2])
        .then((val) => {
          console.log(val);
          setBlogData(val.blogs[0]);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [currentPath]);
  return (
    <main className={Styles.singleBlogPost}>
      {/*  */}
      <BodyHeader
        pageTitle={blogData.title}
        imageAlt={"Sports therapy treatments Image"}
        pagePath={`HOME / Blogs / ${blogData.title}`}
        imageSource={profilePic}
      />

      {/*  */}
      <section className={Styles.sportTherapySection}>
        <ArticleSection blogData={blogData} />
        <Aside />
      </section>
    </main>
  );
}

//=================================================
// ARTICLE SECTION
//=================================================
function ArticleSection({ blogData }: { blogData: any }) {
  return (
    <div className={Styles.postSection}>
      {/*=================================================
            CONTENT
        =================================================*/}
      <Image
        width={500}
        height={100}
        alt={"post Thumbnail"}
        src={blogData.image?.url ?? ""}
        className={Styles.postThumbnail}
      />

      {/*=================================================
            CONTENT
        =================================================*/}
      <ul className={Styles.postListItems}>
        <li className={Styles.item}>
          <i
            className={`fa fa-calendar ${Styles.itemIcon}`}
            aria-hidden="true"
          />{" "}
          {blogData.createdAt}
        </li>
        <li className={Styles.item}>
          <i className={`fa fa-user-o ${Styles.itemIcon}`} aria-hidden="true" />{" "}
          {blogData.createdBy?.name}
        </li>
      </ul>

      {/*=================================================
            CONTENT
        =================================================*/}
      <article
        className={Styles.postContent}
        dangerouslySetInnerHTML={{
          __html: blogData.content?.html ?? "<br/>",
        }}
      />

      {/*=================================================
            TAGS
         =================================================*/}
      <div className={Styles.postTags}>
        Tags:{" "}
        {blogData.tags?.map((val: any, i: any) => {
          return (
            <a href="" key={i} className={Styles.postTag}>
              {val}
            </a>
          );
        })}
      </div>
    </div>
  );
}

//=================================================
// ASIDE
//=================================================
function Aside() {
  return (
    <aside className={Styles.postSidebar}>
      <div className={Styles.postAside}>
        <h2 className={Styles.widgetTitle}>Categories</h2>
        <ul className={Styles.widgetList}>
          <li className={Styles.widgetListItem}>
            <a href="">General</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Health</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Insights</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Life</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Psychology</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Therapy</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Treatments</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
          <li className={Styles.widgetListItem}>
            <a href="">Uncategories</a>
            <span className={Styles.listIcon}>
              <i className="fa fa-folder-o" aria-hidden="true"></i>
            </span>
          </li>
        </ul>
      </div>

      {/*=================================================
              CONTENT
            =================================================*/}
      <div className={Styles.postAside}>
        <h2 className={Styles.widgetTitle}>About us</h2>
        <p className={Styles.widgetContent}>
          Our theme will take your workflow to all-new levels of high
          productivity. We know you’ll find everything you need – and more!
        </p>
      </div>

      {/*=================================================
              CONTENT
            =================================================*/}
      <div className={Styles.postAside}>
        <h2 className={Styles.widgetTitle}>Recent post</h2>
        <ul className={Styles.widgetpostSection}>
          <li className={Styles.widgetpostSectionItem}>
            <div className={Styles.widgetPostImageBox}>
              <Image
                className={Styles.widgetPostImage}
                src={profilePic}
                alt={"Post Thumbnail"}
              />
            </div>
            <div className={Styles.widgetPostIntro}>
              <a href="" className={Styles.widgetPostTitle}>
                The Benefit Of Manual Therapy: Effective Pain Relief And
                Improved Mobility For an Active Life
              </a>
              <span className={Styles.widgetPostTime}>
                <i className="fa fa-calendar" aria-hidden="true"></i> JUNE 20
                2023
              </span>
            </div>
          </li>
          <li className={Styles.widgetpostSectionItem}>
            <div className={Styles.widgetPostImageBox}>
              <Image
                className={Styles.widgetPostImage}
                src={profilePic}
                alt={"Post Thumbnail"}
              />
            </div>
            <div className={Styles.widgetPostIntro}>
              <a href="" className={Styles.widgetPostTitle}>
                Sports Therapy Treatments
              </a>
              <span className={Styles.widgetPostTime}>
                <i className="fa fa-calendar" aria-hidden="true"></i> JUNE 13
                2023
              </span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
