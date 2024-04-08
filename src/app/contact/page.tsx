import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";
import contactPic from "/public/image/Contact.jpg";
import Styles from "./contact.module.css";
import Image from "next/image";
import GoogleMapLocation from "@/widget/map/map";

export default function Contact() {
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
      <section>
        <div className={Styles.contactSection}>
          <div className={Styles.contactImageBox}>
            <Image
              className={Styles.contactImage}
              src={contactPic}
              alt="contact image"
            />
          </div>
          <div className={Styles.contactBox}>
            <form className={Styles.contactForm}>
              <h4 className={Styles.contactFormHeading}>GET IN CONTACT</h4>
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
                  <option
                    className={Styles.contactFormOptionField}
                    value="Select service"
                  >
                    Select service
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="KG-KNS-PNF/BOBATH"
                  >
                    KG-KNS-PNF/BOBATH
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="PHYSIOTHERAPY"
                  >
                    PHYSIOTHERAPY
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="Manual lymph Drainage"
                  >
                    Manual lymph Drainage
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="MASSAGES"
                  >
                    MASSAGES
                  </option>
                  <option className={Styles.contactFormOptionField} value="CMD">
                    CMD
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="Development and training of athletes"
                  >
                    Development and training of athletes
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="Warm therapy"
                  >
                    Warm therapy
                  </option>
                  <option
                    className={Styles.contactFormOptionField}
                    value="Cold/cryotherapy"
                  >
                    Cold/cryotherapy
                  </option>
                </select>
                <textarea
                  className={Styles.contactFormTextarea}
                  placeholder="News"
                  rows={5}
                  cols={50}
                  required
                />
                <button className={Styles.contactFormButton} type="submit">
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/*  */}
      <GoogleMapLocation />
    </main>
  );
}
