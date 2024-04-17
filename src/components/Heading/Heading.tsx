import { THeading } from "@/shared/types/data.types";
import { FC } from "react";

export const Heading: FC<THeading> = ({ heading }) => {
  return <h2 className="font-serif text-4xl">{heading}</h2>;
};
