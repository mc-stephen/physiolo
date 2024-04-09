"use client";

import Styles from "./switch.module.css";

export default function PublicRoundedSwitch() {
  return (
    <label className={Styles.switch}>
      <input type="checkbox" className={Styles.checkbox} />
      <span className={Styles.slider}></span>
    </label>
  );
}
