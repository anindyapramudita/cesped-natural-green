import { groq } from "next-sanity";
import { client } from "./client";

type TGetPageProps = {
  slug?: string;
};

export const getPage = async ({ slug }: TGetPageProps) => {
  const currentSlug = slug ? slug : "/";
  return client.fetch(groq`*[_type == "pages" && slug.current=="${currentSlug}" ][0]{
    _id,
      title,
    sections,
      "slug": slug.current,
      hero{
        buttons[]{
          _key,
          "slug": slug.current,
          variant,
          label
        },
        title,
        subtitle
      },
      navbar->{
        "color": navbarComponent.color,
        "logo": navbarComponent.logo->{
          "src": src.asset->url,
          alt
        },
        "links": navbarComponent.links[]{
          _key,
          label,
          "slug": slug.current
        }
      },
      footer
  }`);
};
