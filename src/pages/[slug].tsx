import { getPage } from "@/sanity/get-page";
import { Navbar } from "@/components";
import { GetServerSidePropsContext } from "next";
import { TPageData } from "@/shared/types/data.type";

export default function Home({
  data,
  slug,
}: {
  data: TPageData;
  slug: string;
}) {
  const { navbar } = data;

  return (
    <main className="min-h-screen w-screen">
      {navbar && <Navbar navbar={navbar} slug={slug} />}
    </main>
  );
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
