import BodyHeader from "@/components/body-header/body-header";
import img from "/public/image/page-header.jpg";

export default function Teams() {
  return (
    <main>
      <BodyHeader
        pageTitle={"Teams"}
        imageAlt={"Teams Image"}
        pagePath={"Home / Teams"}
        imageSource={img}
      />
      <section>Teams</section>
    </main>
  );
}
