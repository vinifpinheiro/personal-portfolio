import { type NextPage } from "next";
import Head from "next/head";
import Introdution from "~/components/pages-components/main/introdution";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vinicius | Portfolio</title>
      </Head>
      <main className="mt-40 w-full max-w-[1200px] mx-auto">
        <div className="flex flex-col items-start justify-center ">
          <Introdution />
        </div>
      </main>
    </>
  );
};

export default Home;
