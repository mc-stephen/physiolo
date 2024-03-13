import PublicRoundedSwitch from "@/widget/switch/switch";
import Style from "./cookie.module.css";

//============================================
//
//============================================
export default function Policy() {
  return (
    <section className={Style.cookieCont}>
      <b>Manage cookie consent</b>
      <span>
        To provide you with the best possible experience, we use technologies
        such as cookies to store and/or access device information. If you agree
        to these technologies, we may process data such as browsing behavior or
        unique IDs on this website. If you do not give or withdraw your consent,
        certain features and functionality may be affected.
      </span>
      <CookieSetting />
      <div className={Style.actionBtn}>
        <button>Accept</button>
        <button>Refuse</button>
        <button>View settings</button>
      </div>
      <div className={Style.links}>
        <span>Cookie policy</span>
        <span>Data protection</span>
      </div>
    </section>
  );
}

//============================================
//
//============================================
function CookieSetting() {
  return (
    <div className={Style.dropdownCont}>
      {/*  */}
      <div className={Style.dropdown}>
        <div className={Style.dropdownHeader}>
          <b>Function</b>
          <aside>
            <span>Always active</span>
            <i className="fa fa-angle-down" />
          </aside>
        </div>
        <span className={Style.dropdownContent}>
          Technical storage or access is strictly necessary for the legitimate
          purpose of enabling the use of a specific service expressly requested
          by the subscriber or user or for the sole purpose of carrying out the
          transmission of a message over an electronic communications network.
        </span>
      </div>
      {/*  */}
      <div className={Style.dropdown}>
        <div className={Style.dropdownHeader}>
          <b>Marketing</b>
          <aside>
            <PublicRoundedSwitch />
            <i className="fa fa-angle-down" />
          </aside>
        </div>
        <span className={Style.dropdownContent}>
          Technical storage or access is necessary to create user profiles, to
          send advertising or to track the user on a website or across multiple
          websites for similar marketing purposes.
        </span>
      </div>
    </div>
  );
}
