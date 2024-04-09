import { groq } from "next-sanity";
import { client } from "./client";

type TGetPageProps = {
  slug?: string;
};

export const getPage = async ({ slug }: TGetPageProps) => {
  const currentSlug = slug ? slug : "/";
  return client.fetch(groq`*[_type == "pages" && slug.current=="${currentSlug}" ]{
    _id,
    _createdAt,
    title,
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
