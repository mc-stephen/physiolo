"use server";

import axios from "axios";
const fetchHygraphSingleData = async (slug: string) => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    };
    const requestBody = {
      query: `query MyQuery {
        blogs(where: {slug: "${slug}"}) {
          title
          tags
          image {
            url
          }
          createdAt
          createdBy {
            name
          }
          content {
            html
          }
        }
      }`,
    };
    const options = {
      headers,
      method: "POST",
      data: requestBody,
      url: process.env.HYGRAPH_URL,
    };
    const response = await axios(options);
    console.info("RESPONSE FROM AXIOS REQUEST", response.data.data);
    return response.data.data;
  } catch (err) {
    console.log("ERROR DURING AXIOS REQUEST", err);
    throw err;
  }
};

export default fetchHygraphSingleData;
