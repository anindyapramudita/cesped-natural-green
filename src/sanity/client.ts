import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.CMS_PROJECT_ID,
  dataset: "production",
  apiVersion: "2024-04-06",
  // unless you have caching for your front end, `useCdn` should be `true` for most production environments
  useCdn: false,
});
