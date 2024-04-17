import { FC } from "react";
import { Hero, Navbar } from "..";
import { SectionLayout } from ".";
import { TSection } from "@/shared/types/data.types";

interface IPageLayoutProps {
  content: any;
  slug?: string;
}

export const PageLayout: FC<IPageLayoutProps> = ({ content, slug }) => {
  const { navbar, hero, sections } = content;
  return (
    <div className="min-h-screen w-screen">
      <div className="z-10 w-screen fixed">
        {navbar && <Navbar navbar={navbar} slug={slug} />}
      </div>
      <div className="pt-[68px] lg:pt-20">
        {hero && <Hero {...hero} />}
        {sections &&
          sections.length > 0 &&
          sections.map((section: TSection) => (
            <SectionLayout {...section} key={section._key} />
          ))}
      </div>
    </div>
  );
};
