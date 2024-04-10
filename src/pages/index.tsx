import { getPage } from "@/sanity/get-page";
import { Navbar } from "@/components";

export default function Home({ data }: { data: any }) {
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
