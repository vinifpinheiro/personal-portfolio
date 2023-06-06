import { type NextPage } from "next";
import Head from "next/head";
import ImageSocials from "~/components/pages-components/main/image-socials";
import Introdution from "~/components/pages-components/main/introdution";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Vinicius | Portfolio</title>
      </Head>
      <main className="mx-auto mt-40 w-full max-w-[950px]">
        <div className="flex flex-col items-start justify-center ">
          <div className="flex">
            <Introdution />
            <ImageSocials />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
