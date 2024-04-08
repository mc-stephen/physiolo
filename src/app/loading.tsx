import Image from "next/image";
import Style from "./loading.module.css";
import animationImg from "../../public/image/loading-animation.svg";

export default function Loading() {
  return (
    <div className={Style.loadingCont}>
      <Image
        src={animationImg}
        alt="Loading animation"
        width={100}
        height={100}
      />
    </div>
  );
}
