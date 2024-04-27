"use client";

import { useState } from "react";
import Styles from "./map.module.css";

export default function GoogleMapLocation() {
  //====================================
  //
  //====================================
  const [selectedMapUrl, setSelectedMapUrl] = useState<string>("");
  const locations: Location[] = [
    {
      label: "Neuss",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2500.1262069325944!2d6.691629900000001!3d51.198326099999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b5aaaf70973b%3A0x6805a7f9edd646e3!2sB%C3%BCchel%2012-14%2C%2041460%20Neuss%2C%20Germany!5e0!3m2!1sen!2sch!4v1712218914371!5m2!1sen!2sch",
    },
    {
      label: "Duesseldorf",
      url: "https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d23259.38513538915!2d6.761347020509255!3d51.20922986886039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47b8ca4117d95e45%3A0xe3020c45dc0cacd7!2sBilker%20Allee%20183%2C%2040217%20D%C3%BCsseldorf%2C%20Germany!3m2!1d51.2104856!2d6.778008!5e0!3m2!1sen!2sng!4v1714240323451!5m2!1sen!2sng",
    },
    {
      label: "Duisburg",
      url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2494.3888274925075!2d6.758973634777564!3d51.383389149926415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8b8c0297842ed%3A0x12321b93314eb823!2sD%C3%BCsseldorfer%20Landstra%C3%9Fe%2087-89%2C%2047249%20Duisburg%2C%20Germany!5e0!3m2!1sen!2sng!4v1714240443026!5m2!1sen!2sng",
    },
  ];

  //====================================
  //
  //====================================
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLocation = event.target.value;
    const location = locations.find((loc) => loc.label === selectedLocation);
    if (location) setSelectedMapUrl(location.url);
  };

  //====================================
  //
  //====================================
  return (
    <section className={Styles.mapCont}>
      {selectedMapUrl.length === 0 ? (
        <div className={Styles.map}>
          <i className={`fa fa-map-marker ${Styles.i}`}></i>
          <span> Select a location to show it direction on the map.</span>
        </div>
      ) : (
        <iframe
          loading="lazy"
          src={selectedMapUrl}
          className={Styles.map}
          allowFullScreen={true}
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      )}
      <select
        defaultValue={0}
        onChange={handleSelectChange}
        className={Styles.select}
      >
        <option hidden>Select a location</option>
        {locations.map((location) => (
          <option key={location.label} value={location.label}>
            {location.label}
          </option>
        ))}
      </select>
    </section>
  );
}

//====================================
//
//====================================
interface Location {
  label: string;
  url: string;
}
