import Navi from "../components/Navi";
// import Footer from "./Footer";
import Head from "next/head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/metadata/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/metadata/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/metadata/favicon-16x16.png'
        />
        <link rel='manifest' href='/metadata/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/metadata/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
      </Head>
      <Navi />
      {children}
      <Footer />
    </>
  );
}
