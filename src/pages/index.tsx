import { getPage } from "@/sanity/get-page";
import { PageLayout } from "@/components";
import { TPageData } from "@/shared/types/data.types";

export default function Home({ data }: { data: TPageData }) {
  return <PageLayout content={data} />;
}

export async function getServerSideProps() {
  const data = await getPage({});

  return {
    props: {
      data,
    },
  };
}
