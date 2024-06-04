"use client";

import Image from "next/image";
import { useContext } from "react";
import Styles from "./contact.module.css";
import { FormEvent, useState } from "react";
import GoogleMapLocation from "@/widget/map/map";
import contactPic from "/public/image/Contact.jpg";
import { sendEmailHelper } from "@/helper/send_email";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";
import userMsgTemplate from "@/template/email_template/user_message";

export default function Contact() {
  const { locale } = useContext(LocaleContext);
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
      subject: "New user message",
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
      .catch((err) => console.log(err.message))
      .finally(() => setIsSendingMail(false));
  }

  //====================================
  //
  //====================================
  return (
    <main className={Styles.contact}>
      {/*  */}
      <BodyHeader
        imageAlt={"Jobs Image"}
        imageSource={profilePic}
        pageTitle={locale.contact_page_title}
        pagePath={"Home / " + locale.contact_page_title}
      />

      {/*  */}
      <section className={Styles.contactSection}>
        <Image src={contactPic} alt="contact image" className={Styles.img} />
        <form className={Styles.contactForm} onSubmit={sendEmail}>
          <b className={Styles.contactFormHeading}>
            {locale.contact_get_in_contact}
          </b>
          {mailIsSent && (
            <div className={Styles.successBox}>
              {locale.contact_message_sent_success}
            </div>
          )}
          <div className={Styles.contactFormInputFieldBox}>
            <select
              name="location"
              onChange={selectLocation}
              className={Styles.contactFormSelect}
              required
            >
              <option hidden>{locale.contact_select_local}</option>
              {locations.map((location) => (
                <option key={location.label} value={location.label}>
                  {location.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              placeholder={locale.contact_your_name}
              className={Styles.contactFormInput}
              required
            />
            <input
              type="email"
              name="email"
              placeholder={locale.contact_email_address}
              className={Styles.contactFormInput}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder={locale.contact_tel}
              className={Styles.contactFormInput}
            />
            <textarea
              rows={5}
              cols={50}
              name="message"
              placeholder={locale.contact_msg}
              className={Styles.contactFormTextarea}
              required
            />
            <button type="submit" className={Styles.contactFormButton}>
              {isSendingMail ? locale.contact_sending : locale.contact_send}
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
