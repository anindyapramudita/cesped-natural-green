import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { INavbarProps } from "./navbar.types";

export const Navbar: FC<INavbarProps> = ({ navbar, slug }) => {
  const route = useRouter();
  return (
    <div
      className={`w-full px-4 flex flex-col items-center ${
        navbar?.color && `bg-secondary-beige`
      }`}
    >
      <header className="flex items-center justify-between gap-12 w-full w-full max-w-6xl border-b-[1px] border-primary-green py-4">
        <ul className=" flex-1 flex items-center justify-between relative">
          {navbar?.logo && (
            <button className="h-12 w-28" onClick={() => route.push("/")}>
              <Image
                className="object-contain w-full h-full"
                src={navbar?.logo?.src}
                alt={navbar?.logo?.alt}
                width={300}
                height={300}
              />
            </button>
          )}
          {navbar?.links?.map((link: any) => {
            return (
              <li key={link?._key} className="relative">
                <a
                  href={link?.slug || link?.href}
                  className={`${
                    slug !== link?.slug ? "cursor-pointer" : "cursor-default"
                  }`}
                >
                  {link?.label}
                </a>
                {slug === link?.slug && (
                  <div
                    className="absolute bottom-[-10px] h-1 w-9 bg-primary-green rounded"
                    style={{
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  />
                )}
              </li>
            );
          })}
        </ul>
      </header>
    </div>
  );
};
