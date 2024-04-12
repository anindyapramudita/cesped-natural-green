import { FC } from "react";
import { Button } from "..";
import { ArcSlideImages } from "../Image/ArcSlideImages";
import { IHeroProps } from ".";

export const Hero: FC<IHeroProps> = ({
  title,
  highlightTitle,
  subtitle,
  heroImage,
  buttons,
}) => {
  return (
    <div className="bg-secondary-beige flex flex-col items-center px-14 py-6 lg:p-12">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        <h1 className="font-serif order-first text-center text-3xl sm:hidden">
          {title}{" "}
          <span className="inline-block break-all text-primary-green text-5xl lg:text-[85px]">
            {`\n${highlightTitle}`}
          </span>
        </h1>
        <div className="flex flex-col h-full items-center justify-around sm:items-start lg:col-span-2">
          <h1 className="font-serif hidden sm:block text-3xl lg:text-5xl">
            {title}{" "}
            <span className="inline-block break-all text-primary-green text-5xl lg:text-[85px]">
              {highlightTitle}
            </span>
          </h1>
          <p className="text-center sm:text-start">{subtitle}</p>
          <div className="mt-4 flex gap-4">
            {buttons &&
              buttons?.length > 0 &&
              buttons?.map((button) => (
                <Button key={button?._key} {...button} />
              ))}
          </div>
        </div>
        <div className="flex h-full justify-center sm:justify-end order-first sm:order-last">
          <ArcSlideImages images={heroImage} />
        </div>
      </div>
    </div>
  );
};
