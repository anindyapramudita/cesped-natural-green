import { TImageComponent } from "@/shared/types/data.types";
import { FC } from "react";
import { ArcImage, ArcSlideImages, GroupImage, RegularImage } from ".";

export const ImageRenderer: FC<TImageComponent> = ({ type, shape, images }) => {
  const renderImage = () => {
    switch (type) {
      case "single":
        switch (shape) {
          case "arc":
            return <ArcImage {...images[0]} />;
          case "normal":
            return <RegularImage {...images[0]} />;
          default:
            return <RegularImage {...images[0]} />;
        }
      case "group":
        return <GroupImage images={images} />;
      case "multiple":
        return <ArcSlideImages images={images} />;
      default:
        return <div>single</div>;
    }
  };

  return <>{renderImage()}</>;
};
