import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";

export default function Current() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Search"}
        imageAlt={"Search Image"}
        pagePath={"Home / Search"}
        imageSource={profilePic}
      />
      <section>Search</section>
    </main>
  );
}
