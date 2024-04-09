"use client";

import Styles from "./map.module.css";

export default function GoogleMapLocation() {
  return (
    <iframe
      className={Styles.map}
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.1262069325944!2d6.691629900000001!3d51.198326099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b5aaaf70973b%3A0x6805a7f9edd646e3!2sB%C3%BCchel%2012-14%2C%2041460%20Neuss%2C%20Germany!5e0!3m2!1sen!2sch!4v1712218914371!5m2!1sen!2sch"
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
