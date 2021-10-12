import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {motion} from "framer-motion";

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Robert S. - Contact me</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Robert S. - Contact me" />
                <meta property="og:description" content="A developer and tech enthusiast from the Netherlands." />
                <meta property="og:url" content="https://robert-s.dev/contact" />
                <meta property="og:image" content="https://robert-s.dev/logo.jpg" />
                <meta name="theme-color" content="#F43F5E" />
            </Head>

            <div>
                <Navbar />
                <motion.div className="py-24 container mx-auto space-y-8" initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    <div className="text-center">
                        <h1 className="md:text-6xl text-3xl font-bold">
                            Contact <span className="text-rose-500">me</span>
                        </h1>
                        <p className="text-gray-200 text-lg font-medium px-4">
                            Want to get in touch, or just want to have a chat? Well, here's your chance! :)
                        </p>
                    </div>
                    <div className="lg:w-2/3 w-4/5 mx-auto overflow-auto">
                        <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                            <a href="mailto:admin@robert-s.dev" className="bg-gray-800 text-white p-4 text-center rounded gap-3">
                                <svg fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto max-h-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Email</title>
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                                </svg>
                                <p className="text-white text-xl overflow-ellipsis">admin@robert-s.dev</p>
                            </a>
                            <a href="https://github.com/Wallvon" className="bg-gray-800 text-white p-4 text-center rounded gap-3" target="_blank" rel="noopener noreferrer">
                                <svg fill="currentColor" className="mx-auto max-h-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>GitHub</title>
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                                <p className="text-white text-xl overflow-ellipsis">Wallvon</p>
                            </a>
                            <a onClick={() => {navigator.clipboard.writeText("That Guy#5275")}} className="bg-gray-800 text-white p-4 text-center rounded gap-3 cursor-pointer has-tooltip">
                                <svg fill="currentColor" className="mx-auto max-h-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Discord</title>
                                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/>
                                </svg>
                                <span className='tooltip bg-gray-800 text-white rounded shadow-lg'>Click to copy</span>
                                <p className="text-white text-xl overflow-ellipsis">That Guy#5275</p>
                            </a>
                            <a href="https://www.linkedin.com/in/robert-stokreef/" className="bg-gray-800 text-white p-4 text-center rounded gap-3" target="_blank" rel="noopener noreferrer">
                                <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0"
                                     className="mx-auto max-h-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>LinkedIn</title>
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                                    <circle cx="4" cy="4" r="2" stroke="none"/>
                                </svg>
                                <p className="text-white text-xl overflow-ellipsis">Robert Stokreef</p>
                            </a>
                            <a href="https://twitter.com/ThatGuy5275" className="bg-gray-800 text-white p-4 text-center rounded gap-3" target="_blank" rel="noopener noreferrer">
                                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="mx-auto max-h-24"
                                     viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Twitter</title>
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                                </svg>
                                <p className="text-white text-xl overflow-ellipsis">ThatGuy5275</p>
                            </a>
                            <a href="https://instagram.com/robert.__.s" className="bg-gray-800 text-white p-4 text-center rounded gap-3" target="_blank" rel="noopener noreferrer">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                     className="mx-auto max-h-24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <title>Instagram</title>
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                                </svg>
                                <p className="text-white text-xl overflow-ellipsis">robert.__.s</p>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
