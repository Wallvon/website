import Layout from "../layout/layout";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Layout title="About me">
            <div className="flex flex-grow items-center">
                <div className="w-full">
                    <div className="container flex mx-auto justify-center">
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>
                            <h1 className="text-center md:text-6xl text-3xl font-bold">
                                About <span className="text-rose-500">me</span>
                            </h1>
                            <div className="container lg:w-3/5 w-11/12 mx-auto mt-4">
                                <div className="text-left md:text-justify space-y-6 text-lg font-medium text-gray-200">
                                    <p>
                                        Hey, I'm Robert - a full-stack developer from the Netherlands with approximately three years of back-end and five years of front-end development experience. Nowadays, I mainly use Next.js, TailwindCSS and Python for my projects, but I have used different tools and frameworks in the past. I also love the open-source community, <a className="text-gray-200 underline" href="https://github.com/Wallvon/website" target="_blank" rel="noopener noreferrer">and this website is open-source too :)</a>. My coding knowledge is mostly based on many years of experimenting and trying, and I am happy to have made it this far.
                                    </p>
                                    <div className="space-y-2">
                                        <p>
                                            I can use the following languages fluently:
                                        </p>
                                        <div className="flex">
                                            <img alt="Python" src="https://img.shields.io/badge/-Python-18181b?style=for-the-badge&logo=python&logoColor=F43F5E" />
                                            <img alt="SQL" src="https://img.shields.io/badge/-SQL-18181b?style=for-the-badge&logo=postgresql&logoColor=F43F5E" />
                                            <img alt="Javascript" src="https://img.shields.io/badge/-Javascript-18181b?style=for-the-badge&logo=javascript&logoColor=F43F5E" />
                                            <img alt="Typescript" src="https://img.shields.io/badge/-Typescript-18181b?style=for-the-badge&logo=typescript&logoColor=F43F5E" />
                                            <img alt="HTML5" src="https://img.shields.io/badge/-HTML5-18181b?style=for-the-badge&logo=html5&logoColor=F43F5E" />
                                            <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-18181b?style=for-the-badge&logo=css3&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            I can use the following frameworks and libraries fluently:
                                        </p>
                                        <div className="flex">
                                            <img alt="Tailwind CSS" src="https://img.shields.io/badge/-Tailwind CSS-18181b?style=for-the-badge&logo=tailwindcss&logoColor=F43F5E" />
                                            <img alt="Bootstrap" src="https://img.shields.io/badge/-Bootstrap-18181b?style=for-the-badge&logo=bootstrap&logoColor=F43F5E" />
                                            <img alt="UIkit" src="https://img.shields.io/badge/-UIkit-18181b?style=for-the-badge&logo=uikit&logoColor=F43F5E" />
                                            <img alt="Flask" src="https://img.shields.io/badge/-Flask-18181b?style=for-the-badge&logo=flask&logoColor=F43F5E" />
                                            <img alt="Falcon" src="https://img.shields.io/badge/-Falcon-18181b?style=for-the-badge&logo=falcon&logoColor=F43F5E" />
                                            <img alt="React" src="https://img.shields.io/badge/-React-18181b?style=for-the-badge&logo=react&logoColor=F43F5E" />
                                            <img alt="Next.js" src="https://img.shields.io/badge/-Next.js-18181b?style=for-the-badge&logo=next.js&logoColor=F43F5E" />
                                            <img alt="Alpine.js" src="https://img.shields.io/badge/-Alpine.js-18181b?style=for-the-badge&logo=alpine.js&logoColor=F43F5E" />
                                            <img alt="Prisma" src="https://img.shields.io/badge/-Prisma-18181b?style=for-the-badge&logo=prisma&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            Miscellaneous tools that I use:
                                        </p>
                                        <div className="flex">
                                            <img alt="Linux" src="https://img.shields.io/badge/-Linux-18181b?style=for-the-badge&logo=linux&logoColor=F43F5E" />
                                            <img alt="Git" src="https://img.shields.io/badge/-Git-18181b?style=for-the-badge&logo=git&logoColor=F43F5E" />
                                            <img alt="NGINX" src="https://img.shields.io/badge/-NGINX-18181b?style=for-the-badge&logo=nginx&logoColor=F43F5E" />
                                            <img alt="Travis CI" src="https://img.shields.io/badge/-Travis CI-18181b?style=for-the-badge&logo=travisci&logoColor=F43F5E" />
                                        </div>
                                        <p>
                                            Currently learning:
                                        </p>
                                        <div className="flex">
                                            <img alt="Go" src="https://img.shields.io/badge/-Go-18181b?style=for-the-badge&logo=go&logoColor=F43F5E" />
                                            <img alt="Rust" src="https://img.shields.io/badge/-Rust-18181b?style=for-the-badge&logo=rust&logoColor=F43F5E" />
                                            <img alt="Docker" src="https://img.shields.io/badge/-Docker-18181b?style=for-the-badge&logo=docker&logoColor=F43F5E" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
