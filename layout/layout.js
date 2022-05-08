import Head from 'next/head';
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Layout({
  children,
  title = '',
                               }) {
  return (
      <>
          <Head>
              <meta charSet="UTF-8"/>
              <title>Robert S. {title && `- ${title}`}</title>
              <meta name="description" content="A developer and tech enthusiast from the Netherlands." />
              <meta name="keywords" content="HTML,CSS,JavaScript,Python,SQL,MySQL,PostgreSQL,MongoDB,Redis,Flask,Falcon,Tailwind,TailwindCSS,Bootstrap" />
              <meta name="author" content="Robert Stokreef" />
              <link rel="icon" href="/favicon.ico" />
              <meta property="og:title" content={`Robert S.${title && ` - ${title}`}`} />
              <meta property="og:description" content="A developer and tech enthusiast from the Netherlands." />
              <meta property="og:image" content="https://robert-s.dev/logo.webp" />
              <meta name="theme-color" content="#F43F5E" />
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@ThatGuy5275" />
              <meta name="twitter:title" content={`Robert S.${title && ` - ${title}`}`} />
              <meta name="twitter:description" content="A developer and tech enthusiast from the Netherlands."/>
              <meta name="twitter:image" content="https://robert-s.dev/logo.webp"/>
          </Head>
          <div className="flex flex-col min-h-screen">
              <Navbar />
              {children}
              <Footer />
          </div>
      </>
  )
}