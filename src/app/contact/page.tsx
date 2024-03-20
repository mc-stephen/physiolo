import BodyHeader from "@/components/body_header/body-header";
import Styles from "./contact.module.css";
import profilePic from "/public/image/image_1.jpg";

export default function Contact() {
  return (
    <main className={Styles.contact}>
      {/*  */}
      <BodyHeader
        pageTitle={"Jobs"}
        imageAlt={"Jobs Image"}
        pagePath={"Home / Jobs"}
        imageSource={profilePic}
      />

      {/*  */}
      <section></section>

      {/*  */}
      <section></section>
    </main>
  );
}
