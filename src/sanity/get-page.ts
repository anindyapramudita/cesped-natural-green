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
    sections[]{
      ...,
      right[]{
        ...,
        images[]->{
          _id,
          "src": src.asset->url,
          alt
      },
        "slug": slug.current
      },
      left[]{
        ...,
        images[]->{
        _id,
        "src": src.asset->url,
        alt
      },
        "slug": slug.current
      },
      main[]{
        ...,
        images[]->{
        _id,
        "src": src.asset->url,
        alt
      },
        "slug": slug.current
      }
    },
      "slug": slug.current,
      hero{
        buttons[]{
          _key,
          "slug": slug.current,
          variant,
          label
        },
        title,
          highlightTitle,
        subtitle,
        heroImage[]->{
          "src": src.asset->url,
          alt
        }
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
        footer->{
          "_type": footerComponent._type, 
          "companyName": footerComponent.companyName,
          "socialMedia": footerComponent.socialMedia,
          "categories": footerComponent.categories[]{
            ...,
            links[]{
              ...,
              "slug": slug.current 
            }
          },
          "contacts": footerComponent.contacts,
        }
  }`);
};
