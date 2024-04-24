import { TComponent, TSection } from "@/shared/types/data.types";
import { FC } from "react";
import { Button, Content, Heading } from "..";
import { ImageRenderer } from "../Image";

export const SectionLayout: FC<TSection> = ({
  _key,
  _type,
  primary,
  left,
  right,
  main,
}) => {
  const renderContent = (content: TComponent) => {
    switch (content._type) {
      case "button":
        return <Button {...content} key={content._key} />;
      case "heading":
        return <Heading {...content} key={content._key} />;
      case "images":
        return <ImageRenderer {...content} key={content._key} />;
      case "content":
        return <Content {...content} key={content._key} />;
      default:
        return null;
    }
  };

  if (_type === "oneColumn") {
    return (
      <div>
        {main &&
          main?.length > 0 &&
          main.map((content) => renderContent(content))}
      </div>
    );
  }

  if (_type === "twoColumn") {
    return (
      <div className="w-full flex flex-col items-center px-8 py-6 lg:p-12">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 py-12">
          <div
            className={`${
              primary === "left" && "order-first"
            }  flex flex-col gap-4 w-full items-center md:items-start`}
          >
            {left &&
              left?.length > 0 &&
              left.map((content) => renderContent(content))}
          </div>
          <div
            className={`${
              primary === "right" && "order-first"
            } flex flex-col gap-4`}
          >
            {right &&
              right?.length > 0 &&
              right.map((content) => renderContent(content))}
          </div>
        </div>
      </div>
    );
  }

  return null;
};
