import { FC } from "react";
import { TImage } from "@/shared/types/data.types";
import Image from "next/image";

export const RegularImage: FC<TImage> = ({ src, alt }) => {
  return (
    <div className="flex items-end w-full">
      <div className="h-96 w-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={src}
          alt={alt}
          width={300}
          height={300}
          priority
        />
      </div>
    </div>
  );
};
