"use server";

import axios from "axios";
const fetchHygraphData = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    };
    const requestBody = {
      query: `query MyQuery {
        blogs {
          description
          slug
          title
          tags
          image {
            url
          }
          createdAt
          createdBy {
            name
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

export default fetchHygraphData;