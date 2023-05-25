import { type AppType } from "next/dist/shared/lib/utils";
import Header from "~/components/header";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <header className=" absolute">
        <Header />
      </header>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
