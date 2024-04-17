import Image from "next/image";
import { FC } from "react";
import { IArcImageProps } from ".";

export const ArcImage: FC<IArcImageProps> = ({ src, alt }) => {
  return (
    <div className="flex items-end justify-center md:justify-start">
      <div className="h-96 w-full max-w-80 rounded-t-full overflow-hidden">
        <Image
          className="object-cover w-full h-full"
          src={src}
          alt={alt}
          width={300}
          height={300}
        />
      </div>
    </div>
  );
};
