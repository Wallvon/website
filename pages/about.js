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
                                            I can use the following technologies/frameworks mostly fluently:
                                        </p>
                                        <ul className="list-disc pl-4">
                                            <li>HTML, CSS & JS</li>
                                            <li>TailwindCSS, Bootstrap, UIkit & Cirrus UI</li>
                                            <li>Python</li>
                                            <li>Flask & similar frameworks (like Sanic)</li>
                                            <li>MySQL, PostgreSQL, MongoDB, Redis</li>
                                        </ul>
                                        <p>
                                            And I am currently learning the following technologies/frameworks:
                                        </p>
                                        <ul className="list-disc pl-4">
                                            <li>Go</li>
                                            <li>Rust</li>
                                            <li>React/Next.js</li>
                                            <li>Docker</li>
                                        </ul>
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
