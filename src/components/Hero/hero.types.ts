export interface IHeroProps {
  title: string;
  highlightTitle: string;
  subtitle: string;
  heroImage: {
    src: string;
    alt: string;
  }[];
  buttons: {
    _key: string;
    slug: string;
    variant: "primary" | "secondary";
    label: string;
  }[];
}
