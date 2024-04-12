import { FC, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { MenuIcon } from "../Icons";
import { INavbarProps } from ".";

export const Navbar: FC<INavbarProps> = ({ navbar, slug }) => {
  const route = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.body.addEventListener("click", handleOutsideClick);

    return () => {
      document.body.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const handleToggleMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`w-full px-14 lg:px-4 flex flex-col items-center ${
        navbar?.color && `bg-secondary-beige`
      }`}
    >
      <header className="flex items-center justify-between gap-12 w-full w-full max-w-6xl border-b-[1px] border-primary-green py-4">
        <ul className=" flex-1 flex items-center justify-between relative">
          {navbar?.logo && (
            <button
              className="h-9 w-16 lg:h-12 lg:w-28"
              onClick={() => route.push("/")}
            >
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
              <li key={link?._key} className="relative hidden md:block">
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
          <div className="relative md:hidden">
            <button onClick={handleToggleMenu}>
              <MenuIcon />
            </button>

            {isMenuOpen && (
              <div
                className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg"
                ref={menuRef}
              >
                {navbar?.links?.map((link: any) => {
                  return (
                    <li
                      key={link?._key}
                      className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      <a href={link?.slug || link?.href}>{link?.label}</a>
                    </li>
                  );
                })}
              </div>
            )}
          </div>
        </ul>
      </header>
    </div>
  );
};
