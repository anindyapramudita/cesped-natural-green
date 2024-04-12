export type TPageData = {
  _id: string;
  title: string;
  slug: string;
  hero: {
    buttons: {
      _key: string;
      slug: string;
      label: string;
      variant: "primary" | "secondary";
    }[];
    title: string;
    subtitle: string;
    highlightTitle: string;
    heroImage: {
      src: string;
      alt: string;
    }[];
  };
  navbar: {
    color: boolean;
    logo: {
      src: string;
      alt: string;
    };
    links: {
      _key: string;
      label: string;
      href?: string;
      slug?: string;
    }[];
  };
  sections: any;
  footer: any;
};
