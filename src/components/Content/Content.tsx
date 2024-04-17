import { TContent } from "@/shared/types/data.types";
import { PortableText } from "next-sanity";
import { FC } from "react";

export const Content: FC<TContent> = ({ content }) => {
  const myPortableTextComponents = {
    block: {
      h1: ({ children }: any) => {
        return <h1 className="font-serif text-5xl mb-4">{children}</h1>;
      },
      h2: ({ children }: any) => {
        return <h2 className="font-serif text-4xl mb-4">{children}</h2>;
      },
      h3: ({ children }: any) => {
        return <h3 className="font-serif text-3xl mb-4">{children}</h3>;
      },
      p: ({ children }: any) => {
        return <p>{children}</p>;
      },
    },
    marks: {
      strong: ({ children }: any) => (
        <span className="font-bold text-primary-green">{children}</span>
      ),
    },
  };

  return (
    <div>
      <PortableText
        value={[...content]}
        components={myPortableTextComponents}
      />
    </div>
  );
};
