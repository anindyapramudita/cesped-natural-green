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

export type TSection = {
  _key: string;
  _type: "twoColumn" | "oneColumn";
  primary?: "left" | "right";
  left?: TComponent[];
  right?: TComponent[];
  main?: TComponent[];
};

export type TComponent = TButton | TImageComponent | THeading | TContent;

export type TButton = {
  _type: "button";
  _key: string;
  slug: string;
  href: string;
  variant: "primary" | "secondary";
  label: string;
};

export type TImage = {
  _id?: string;
  src: string;
  alt: string;
};

export type TImageComponent = {
  _type: "images";
  _key: string;
  shape: "normal" | "arc";
  type: "single" | "multiple" | "group";
  images: TImage[];
};

export type THeading = {
  _type: "heading";
  _key: string;
  heading: string;
};

export type TContent = {
  _type: "content";
  _key: string;
  content: {
    _key: string;
    _type: string;
    style: string;
    children: {
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }[];
  }[];
};

export type TFooterSocialMedia = {
  _key: string;
  type: "facebook" | "instagram" | "pinterest" | "twitter" | "youtube";
  value: string;
};

export type TFooterLink = {
  _key: string;
  name: string;
  slug: string;
};

export type TFooterCategory = {
  _key: string;
  title: string;
  links: TFooterLink[];
};

export type TFooterContact = {
  _key: string;
  type: "whatsapp" | "phone" | "email";
  value: string;
};

export type TFooter = {
  _type: "footer";
  companyName: string;
  socialMedia: TFooterSocialMedia[];
  categories: TFooterCategory[];
  contacts: TFooterContact[];
};
