import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
        <Head>
            <meta charSet="UTF-8"/>
            <title>Robert S.</title>
            <meta name="description" content="A developer and tech enthusiast from the Netherlands." />
            <meta name="keywords" content="HTML,CSS,JavaScript,Python,SQL,MySQL,PostgreSQL,MongoDB,Redis,Flask,Tailwind,TailwindCSS,Bootstrap" />
            <meta name="author" content="Robert Stokreef" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Robert S." />
            <meta property="og:description" content="A developer and tech enthusiast from the Netherlands." />
            <meta property="og:url" content="https://robert-s.dev/" />
            <meta property="og:image" content="https://robert-s.dev/logo.jpg" />
            <meta name="theme-color" content="#F43F5E" />
            <meta name="twitter:title" content="Robert S." />
            <meta name="twitter:description" content="A developer and tech enthusiast from the Netherlands."/>
            <meta name="twitter:site" content="@ThatGuy5275" />
            <meta name="twitter:image" content="https://robert-s.dev/logo.jpg"/>
        </Head>

        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="md:text-6xl text-3xl font-bold">
                              Hi there, I'm <span className="text-rose-500">Robert S.</span>
                            </h1>
                            <p className="text-gray-200 text-lg font-medium">
                                Developer & Tech enthusiast
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  )
}