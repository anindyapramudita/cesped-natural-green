import { FC } from "react";
import { Hero, Navbar } from "..";

interface IPageLayoutProps {
  content: any;
  slug?: string;
}

export const PageLayout: FC<IPageLayoutProps> = ({ content, slug }) => {
  const { navbar, hero } = content;
  return (
    <div className="min-h-screen w-screen">
      <div className="z-10 w-screen fixed">
        {navbar && <Navbar navbar={navbar} slug={slug} />}
      </div>
      <div className="pt-[68px] lg:pt-20">{hero && <Hero {...hero} />}</div>
    </div>
  );
};
