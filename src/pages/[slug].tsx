import { getPage } from "@/sanity/get-page";
import { PageLayout } from "@/components";
import { GetServerSidePropsContext } from "next";
import { TPageData } from "@/shared/types/data.types";

export default function Home({
  data,
  slug,
}: {
  data: TPageData;
  slug: string;
}) {
  return <PageLayout content={data} slug={slug} />;
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { params } = context;
  const data = await getPage({ slug: params?.slug as string });

  return {
    props: {
      data,
      slug: params?.slug,
    },
  };
}
