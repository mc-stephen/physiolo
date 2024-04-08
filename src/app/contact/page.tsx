import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";
import contactPic from "/public/image/Contact.jpg";
import Styles from "./contact.module.css";
import Image from "next/image";
import GoogleMapLocation from "@/widget/map/map";

export default function Contact() {
  const servicesOptions = [
    "KG-KNS-PNF/BOBATH",
    "PHYSIOTHERAPY",
    "Manual lymph Drainage",
    "MASSAGES",
    "CMD",
    "Development and training of athletes",
    "Warm therapy",
    "Cold/cryotherapy",
  ];
  return (
    <main className={Styles.contact}>
      {/*  */}
      <BodyHeader
        pageTitle={"Contact"}
        imageAlt={"Jobs Image"}
        pagePath={"Home / Contact"}
        imageSource={profilePic}
      />

      {/*  */}
      <section className={Styles.contactSection}>
        <Image src={contactPic} alt="contact image" className={Styles.img} />
        <form className={Styles.contactForm}>
          <b className={Styles.contactFormHeading}>GET IN CONTACT</b>
          <div className={Styles.contactFormInputFieldBox}>
            <input
              className={Styles.contactFormInput}
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              className={Styles.contactFormInput}
              type="email"
              placeholder="Email-Address"
              required
            />
            <input
              className={Styles.contactFormInput}
              type="tel"
              placeholder="Telephone number"
            />
            <select className={Styles.contactFormSelect} required>
              {servicesOptions.map((val, i) => {
                return (
                  <option className={Styles.option} value={val} key={i}>
                    {val}
                  </option>
                );
              })}
            </select>
            <textarea
              className={Styles.contactFormTextarea}
              placeholder="News"
              rows={5}
              cols={50}
              required
            />
            <input
              type="submit"
              value=" SEND MESSAGE"
              className={Styles.contactFormButton}
            />
          </div>
        </form>
      </section>

      {/*  */}
      <GoogleMapLocation />
    </main>
  );
}
