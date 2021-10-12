import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Work() {
    return (
        <div>
            <Head>
                <title>Robert S. - My work</title>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:title" content="Robert S. - My work" />
                <meta property="og:description" content="A developer and tech enthusiast from the Netherlands." />
                <meta property="og:url" content="https://robert-s.dev/work" />
                <meta property="og:image" content="https://robert-s.dev/logo.jpg" />
                <meta name="theme-color" content="#F43F5E" />
            </Head>

            <div>
                <Navbar />
                <motion.div className="py-24 container mx-auto space-y-8" initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                    <div className="text-center">
                        <h1 className="md:text-6xl text-3xl font-bold">
                            My <span className="text-rose-500">work</span>
                        </h1>
                        <p className="text-gray-200 text-lg font-medium px-4">
                            Featured & recent projects
                        </p>
                    </div>
                    <div className="relative w-11/12 mx-auto overflow-auto">
                        <div className="absolute h-full w-full p-20 z-20">
                            <div className="flex items-center justify-center h-full w-full p-4">
                                <h1 className="md:text-6xl text-3xl font-bold text-center">
                                    Coming soon
                                </h1>
                            </div>
                        </div>
                        <div className="w-full grid gap-20 grid-cols-1 md:grid-cols-2 blur md:p-16 p-4">
                            <div className="flex-grow space-y-2">
                                <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
                                <p className="text-gray-400 py- text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                </p>
                                <div className="flex space-x-2">
                                    <a className="rounded-full" href="#" target="_blank">
                                        <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>GitHub</title>
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                        </svg>
                                    </a>
                                    <a className="rounded-full" href="#" target="_blank">
                                        <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>Link</title>
                                            <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                            <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="flex-grow space-y-2">
                                <h1 className="text-3xl font-bold">Lorem Ipsum</h1>
                                <p className="text-gray-400 py- text-justify">
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                                </p>
                                <div className="flex space-x-2">
                                    <a className="rounded-full" href="#" target="_blank">
                                        <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>GitHub</title>
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                                        </svg>
                                    </a>
                                    <a className="rounded-full" href="#" target="_blank">
                                        <svg className="h-8 w-8" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <title>Link</title>
                                            <path d="M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z" />
                                            <path d="M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z" />
                                            <path d="M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <Footer />
        </div>
    )
}
