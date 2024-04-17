import { ChevronLeftIcon, ChevronRightIcon } from "@/components/Icons";
import Image from "next/image";
import { FC, useEffect, useState } from "react";
import { IArcSlideImagesProps } from ".";

export const ArcSlideImages: FC<IArcSlideImagesProps> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextButton = () => {
    if (currentSlide === images.length) return;
    setCurrentSlide((prev) => prev + 1);
  };

  const handlePrevButton = () => {
    if (currentSlide === 0) return;
    setCurrentSlide((prev) => prev - 1);
  };

  useEffect(() => {
    const handleUpdateSlide = () => {
      setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    const interval = setInterval(handleUpdateSlide, 5000);
    return () => clearInterval(interval);
  }, [currentSlide, images.length]);

  return (
    <div className="flex items-end w-full max-w-80 lg:w-80">
      <div className="relative h-96 w-full rounded-t-full overflow-hidden group">
        <div className="h-max w-max grid grid-cols-12">
          {images &&
            images?.length > 0 &&
            images.map((image, index) => (
              <div
                key={index}
                className="max-w-80 w-full transition-all ease-out duration-700"
                style={{
                  transform: `translateX(-${currentSlide * 100}%)`,
                }}
              >
                <Image
                  className="object-cover w-full h-full"
                  src={image.src}
                  alt={image.alt}
                  width={300}
                  height={300}
                  priority
                />
              </div>
            ))}
        </div>
        <div className="absolute top-1/2 w-full justify-between px-4 drop-shadow-sm flex opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
          <button
            onClick={handlePrevButton}
            disabled={currentSlide === 0}
            className={`${
              currentSlide === 0 ? "opacity-0" : "bg-black/75 hover:bg-black/90"
            } w-8 h-8 rounded-full flex items-center justify-center`}
          >
            <ChevronLeftIcon />
          </button>
          <button
            onClick={handleNextButton}
            disabled={currentSlide === images.length - 1}
            className={`${
              currentSlide === images.length - 1
                ? "opacity-0"
                : "bg-black/75 hover:bg-black/90"
            } w-8 h-8 rounded-full flex items-center justify-center`}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
