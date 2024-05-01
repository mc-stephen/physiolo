"use client";

import Image from "next/image";
import { useState } from "react";
import Styles from "./contact.module.css";
import GoogleMapLocation from "@/widget/map/map";
import contactPic from "/public/image/Contact.jpg";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Contact() {
  //====================================
  //
  //====================================
  const copyEmail = "info@physiolo.de";
  const [selectedEmail, setSelectedEmail] = useState<string>("");
  const locations: SupportEmail[] = [
    { label: "Neuss", email: "Neuss@physiolo.de" },
    { label: "Duesseldorf", email: "Duesseldorf@physiolo.de" },
    { label: "Duisburg", email: "Duisburg@physiolo.de" },
  ];

  //====================================
  //
  //====================================
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = event.target.value;
    const location = locations.find((loc) => loc.label === selectedLocation);
    if (location) setSelectedEmail(location.email);
  };

  //====================================
  //
  //====================================
  function sendEmail() {}

  //====================================
  //
  //====================================
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
            <select
              onChange={handleSelectChange}
              className={Styles.contactFormSelect}
              required
            >
              <option hidden>Select a support location</option>
              {locations.map((location) => (
                <option key={location.label} value={location.label}>
                  {location.label}
                </option>
              ))}
            </select>
            <input
              className={Styles.contactFormInput}
              type="text"
              placeholder="Your full-name"
              required
            />
            <input
              className={Styles.contactFormInput}
              type="email"
              placeholder="Email address"
              required
            />
            <input
              className={Styles.contactFormInput}
              type="tel"
              placeholder="Telephone number"
            />
            <textarea
              className={Styles.contactFormTextarea}
              placeholder="Message"
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

//====================================
//
//====================================
interface SupportEmail {
  label: string;
  email: string;
}
