export interface INavbarProps {
  navbar: {
    logo: {
      src: string;
      alt: string;
    };
    links: {
      _key: string;
      label: string;
      slug?: string;
      href?: string;
    }[];
    color: boolean;
  };
  slug?: string;
}
