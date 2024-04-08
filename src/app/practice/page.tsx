import BodyHeader from "@/components/body-header/body-header";
import img from "/public/image/page-header.jpg";

export default function Practice() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Practice"}
        imageAlt={"Practice Image"}
        pagePath={"Home / Practice"}
        imageSource={img}
      />
      <section>Practice</section>
    </main>
  );
}
