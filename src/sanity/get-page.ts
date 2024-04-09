import { groq } from "next-sanity";
import { client } from "./client";

export const getPage = async () => {
  return client.fetch(groq`*[_type == "pages" && slug.current=="/" ]{
    _id,
    _createdAt,
    sections,
      slug,
      hero,
      navbar->{
        defaultNavbar{
        logo->{
        "src": src.asset->url,
        alt
        },
        links
        }
      }
  }`);
};
