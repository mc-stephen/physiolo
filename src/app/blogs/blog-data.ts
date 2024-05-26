import { StaticImageData } from "next/image";
import blogImage from "/public/image/blog-image.jpg";

const blogData: BlogData[] = [
  {
    author: "ADMIN",
    image: blogImage,
    url: "/blogs/slug?id=0",
    dateCreated: "JUNE 20, 2023",
    title: "Sports therapy treatments",
    description: `Our sports therapy treatments are designed to help 
    you optimize your athletic performance and 
    prevent injuries. No matter whether you...`,
    tags: [
      "General",
      "Health",
      "Insights",
      "Life",
      "Psychology",
      "Therapy",
      "Treatments",
      "Un-categories",
    ],
  },
  {
    author: "ADMIN",
    image: blogImage,
    url: "/blogs/slug?id=0",
    dateCreated: "JUNE 20, 2023",
    title: `The benefits of manual therapy: Effective 
      pain relief and improved mobility for an active life`,
    description: `Manual therapy is a proven treatment method that 
      aims to relieve pain and restore mobility. In this article...`,
    tags: [
      "Health",
      "Life",
      "Psychology",
      "Therapy",
      "Treatments",
      "Un-categories",
    ],
  },
];

export default blogData;

//============================
//
//============================
interface BlogData {
  url: string;
  title: string;
  author: string;
  tags: string[];
  description: string;
  dateCreated: string;
  image: StaticImageData;
}
