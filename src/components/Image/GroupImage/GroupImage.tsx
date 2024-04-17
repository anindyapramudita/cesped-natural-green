import { FC } from "react";
import { IGroupImageProps } from "./groupImage.types";
import Image from "next/image";

export const GroupImage: FC<IGroupImageProps> = ({ images }) => {
  if (!images || images?.length === 0) {
    return null;
  }

  return (
    <div className={`w-full flex gap-8 lg:gap-14`}>
      {images &&
        images?.length > 0 &&
        images.map((image) => (
          <div className="w-full overflow-hidden grow" key={image._id}>
            <Image
              className="object-contain w-full h-full"
              src={image.src}
              alt={image.alt}
              width={300}
              height={300}
            />
          </div>
        ))}
    </div>
  );
};
