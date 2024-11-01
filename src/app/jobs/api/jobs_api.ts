"use server";

import axios from "axios";
const fetchHygraphJobData = async () => {
  try {
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
    };
    const requestBody = {
      query: `query MyQuery {
        jobs {
          title
          slug
          createdAt
          image {
            url
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

export default fetchHygraphJobData;
