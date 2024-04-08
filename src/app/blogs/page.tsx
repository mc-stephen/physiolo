import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";
import Styles from "./blog.module.css";
import Image from "next/image";
import blogImage from "/public/image/blog-image.jpg";


export default function Blog() {
    return (
      <main className={Styles.blog}>
        <BodyHeader
          pageTitle={"BLOG"}
          imageAlt={"Blog Image"}
          pagePath={"HOME / BLOG"}
          imageSource={profilePic}
        />
        
        <section>
            <div className={Styles.blogPost}>
                <div className={Styles.imageBox}>
                    <Image 
                    className={Styles.blogImage} 
                    src= {blogImage}
                    alt={"Blog Images"}
                    />
                </div>
                <div className={Styles.blogInfo}> 
                    <ul className={Styles.blogList}>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">General</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Health</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Insights</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink}href="">Life</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink}href="">Psychology</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink}href="">Therapy</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink}href="">Treatments</a></li>
                            <li className={Styles.blogListItem}><a className={Styles.blogListLink}href="">Uncategories</a></li>
                    </ul>
                    <h2 className={Styles.blogTitle}>Sports therapy treatments</h2>
                    <p className={Styles.blogMeta}><i>ADMIN / JUNE 20, 2023</i></p>
                    <p className={Styles.blogContentIntro}>Our sports therapy treatments are designed to help you optimize your athletic performance and prevent injuries. No matter whether you...</p>
                    <button className={Styles.blogButton}>Read More</button>
                </div>
            </div>
            <div className={Styles.blogPost}>
                <div className={Styles.imageBox}>
                    <Image 
                    className={Styles.blogImage} 
                    src= {blogImage}
                    alt={"Blog Images"}
                    />
                </div>
                <div className={Styles.blogInfo}>
                    <ul className={Styles.blogList}>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Health</a></li>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Life</a></li>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Psychology</a></li>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Therapy</a></li>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Treatments</a></li>
                        <li className={Styles.blogListItem}><a className={Styles.blogListLink} href="">Uncategories</a></li>
                    </ul>
                    <h2 className={Styles.blogTitle}>The benefits of manual therapy: Effective pain relief and improved mobility for an active life</h2>
                    <p className={Styles.blogMeta}><i>ADMIN / JUNE 20, 2023</i></p>
                    <p className={Styles.blogContentIntro}>Manual therapy is a proven treatment method that aims to relieve pain and restore mobility. In this article...</p>
                    <button className={Styles.blogButton}>Read More</button>
                </div>
            </div>
        </section>
        </main>

    );
}