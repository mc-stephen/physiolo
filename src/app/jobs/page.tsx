import BodyHeader from "@/components/body_header/body-header";
import profilePic from "/public/image/img.jpg";

export default function Jobs() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Jobs"}
        imageAlt={"Jobs Image"}
        pagePath={"Home / Jobs"}
        imageSource={profilePic}
      />
    </main>
  );
}
