import Head from "next/head";

export default function Article({ children, title }) {
  const t = `${title} - GSAP`;
  return (
    <>
      {title && (
        <Head>
          <title>{t}</title>
          <meta name="twitter:title" content={t} />
          <meta property="og:title" content={t} />
        </Head>
      )}
      {children}
    </>
  );
}
