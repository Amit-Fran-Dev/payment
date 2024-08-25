import AppShell from "@/components/AppShell";
import "@/styles/globals.css";
import "@/styles/root.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
       <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Glegoo:wght@400;700&family=Manrope:wght@200..800&family=Mukta:wght@200;300;400;500;600;700;800&family=PT+Serif:ital,wght@0,400;0,700;1,400;1,700&family=Red+Hat+Display:ital,wght@0,300..900;1,300..900&family=Urbanist:ital,wght@0,100..900;1,100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>

      </Head>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
