"use client";

import Image from "next/image";
import Styles from "./contact.module.css";
import { FormEvent, useState } from "react";
import GoogleMapLocation from "@/widget/map/map";
import contactPic from "/public/image/Contact.jpg";
import { sendEmailHelper } from "@/helper/send_email";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import userMsgTemplate from "@/template/email_template/user_message";

export default function Contact() {
  //====================================
  //
  //====================================
  const [mailIsSent, setMailIsSent] = useState<boolean>(false);
  const [selectedEmail, setSelectedEmail] = useState<string>("");
  const copyEmail = ["info@physiolo.de", "stephenugo939@gmail.com"];
  const [isSendingMail, setIsSendingMail] = useState<boolean>(false);
  const locations: SupportEmail[] = [
    { label: "Neuss", email: "neuss@physiolo.de" },
    { label: "Duisburg", email: "duisburg@physiolo.de" },
    { label: "Duesseldorf", email: "duesseldorf@physiolo.de" },
  ];

  //====================================
  //
  //====================================
  const selectLocation = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = event.target.value;
    const location = locations.find((loc) => loc.label === selectedLocation);
    if (location) setSelectedEmail(location.email);
  };

  //====================================
  //
  //====================================
  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    if (isSendingMail) return;
    setIsSendingMail(true);
    await sendEmailHelper({
      cc: copyEmail,
      to: selectedEmail,
      from: (form.elements.namedItem("email") as HTMLInputElement).value,
      replyTo: (form.elements.namedItem("email") as HTMLInputElement).value,
      html: userMsgTemplate({
        name: (form.elements.namedItem("name") as HTMLInputElement).value,
        email: (form.elements.namedItem("email") as HTMLInputElement).value,
        phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
        message: (form.elements.namedItem("message") as HTMLInputElement).value,
      }),
    })
      .then((val) => {
        setMailIsSent(true);
        (form.elements.namedItem("name") as HTMLInputElement).value = "";
        (form.elements.namedItem("email") as HTMLInputElement).value = "";
        (form.elements.namedItem("phone") as HTMLInputElement).value = "";
        (form.elements.namedItem("message") as HTMLInputElement).value = "";
      })
      .catch((err) => {})
      .finally(() => setIsSendingMail(false));
  }

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
        <form className={Styles.contactForm} onSubmit={sendEmail}>
          <b className={Styles.contactFormHeading}>GET IN CONTACT</b>
          {mailIsSent && (
            <div className={Styles.successBox}>
              Message sent successfully. You will receive a feedback soon.
            </div>
          )}
          <div className={Styles.contactFormInputFieldBox}>
            <select
              name="location"
              onChange={selectLocation}
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
              type="text"
              name="name"
              placeholder="Your name*"
              className={Styles.contactFormInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address*"
              className={Styles.contactFormInput}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Telephone number"
              className={Styles.contactFormInput}
            />
            <textarea
              rows={5}
              cols={50}
              name="message"
              placeholder="Message*"
              className={Styles.contactFormTextarea}
              required
            />
            <button type="submit" className={Styles.contactFormButton}>
              {isSendingMail ? "Sending Message..." : "SEND MESSAGE"}
            </button>
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
