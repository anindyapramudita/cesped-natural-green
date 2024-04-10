import { getPage } from "@/sanity/get-page";
import { Navbar } from "@/components";
import { TPageData } from "@/shared/types/data.type";

export default function Home({ data }: { data: TPageData }) {
  const { navbar } = data;

  return (
    <main className="min-h-screen w-screen">
      {navbar && <Navbar navbar={navbar} />}
    </main>
  );
}

export async function getServerSideProps() {
  const data = await getPage({});

  return {
    props: {
      data,
    },
  };
}
