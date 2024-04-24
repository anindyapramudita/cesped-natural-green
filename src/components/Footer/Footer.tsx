import {
  TFooter,
  TFooterContact,
  TFooterSocialMedia,
} from "@/shared/types/data.types";
import { FC } from "react";
import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  PhoneIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
  YoutubeIcon,
} from "../Icons";
import { useRouter } from "next/router";

const socialMediaIconClass = "h-7 w-7 lg:h-12 lg:w-12";

const SocialMediaIcon = {
  facebook: <FacebookIcon className={socialMediaIconClass} />,
  instagram: <InstagramIcon className={socialMediaIconClass} />,
  twitter: <TwitterIcon className={socialMediaIconClass} />,
  pinterest: <PinterestIcon className={socialMediaIconClass} />,
  youtube: <YoutubeIcon className={socialMediaIconClass} />,
};
const ContactsIcon = {
  email: <EmailIcon />,
  phone: <PhoneIcon />,
  whatsapp: <WhatsappIcon />,
};

export const Footer: FC<TFooter> = ({
  companyName,
  socialMedia,
  categories,
  contacts,
}) => {
  const router = useRouter();
  const handleClickSocMed = (url: string) => {
    const newTab = window.open(url, "_blank");
    if (newTab) {
      newTab.focus();
    } else {
      router.push(url);
    }
  };
  const renderSocialMedia = (content: TFooterSocialMedia) => {
    return (
      <button
        onClick={() => handleClickSocMed(content.value)}
        key={content._key}
      >
        {SocialMediaIcon[content.type]}
      </button>
    );
  };

  const renderContact = (contact: TFooterContact) => {
    return (
      <div key={contact._key} className="flex gap-2 items-center">
        <div>{ContactsIcon[contact.type]}</div>
        <p className="text-primary-green text-wrap">{contact.value}</p>
      </div>
    );
  };

  return (
    <div className="w-full px-8 xl:px-4 flex flex-col items-center bg-light-green">
      <footer
        className={`grid grid-cols-2  gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-12 w-full max-w-6xl py-4`}
      >
        <div className="flex flex-col h-full justify-start gap-4 order-3 col-span-2 xl:col-span-1 xl:order-1">
          <p className="font-serif text-black font-semibold">{companyName}</p>
          <div className="flex gap-5">
            {socialMedia &&
              socialMedia.length > 0 &&
              socialMedia.map((content) => renderSocialMedia(content))}
          </div>
        </div>
        {categories &&
          categories?.length > 0 &&
          categories.map((category) => (
            <div
              key={category._key}
              className="flex flex-col gap-2 order-1 xl:order-2"
            >
              <p className="font-semibold">{category.title}</p>
              {category.links &&
                category.links.length > 0 &&
                category.links.map((link) => (
                  <a
                    key={link._key}
                    href={link.slug}
                    className="text-primary-green"
                  >
                    {link.name}
                  </a>
                ))}
            </div>
          ))}
        <div className=" order-2 col-span-2 lg:col-span-1 xl:order-3">
          {contacts && contacts.length > 0 && (
            <div className="flex flex-col gap-2">
              <p className="font-semibold">Contacto</p>
              {contacts.map((contact) => renderContact(contact))}
            </div>
          )}
        </div>
      </footer>
    </div>
  );
};
