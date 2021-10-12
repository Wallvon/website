import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
        <Head>
            <title>Robert S.</title>
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Robert S." />
            <meta property="og:description" content="A developer and tech enthusiast from the Netherlands." />
            <meta property="og:url" content="https://robert-s.dev/" />
            <meta property="og:image" content="https://robert-s.dev/logo.jpg" />
            <meta name="theme-color" content="#F43F5E" />
        </Head>

        <div className="h-screen">
            <Navbar />
            <div className="h-1/2 m-auto absolute inset-0">
                <div className="container flex mx-auto items-center justify-center absolute inset-0">
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
  )
}
