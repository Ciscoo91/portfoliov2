"use client"
import Image from "next/image"
import PortfolioPic from "@/assets/portfolio-pic.png"
import Container from "@/components/Container"
import {motion} from "framer-motion"
import {Link} from "react-scroll"

const About = () => {
    return ( 
        <section className="w-full h-auto md:min-h-screen bg-orange-50 dark:bg-slate-500 pb-12 pt-24">
            <Container>
                <motion.div 
                    className="max-w-screen-xl flex flex-col md:grid  md:grid-cols-2 md:gap-x-10 items-center justify-between mx-auto p-4 h-full"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    id="about"
                >
                    <div className="h-full py-8 flex flex-col items-center justify-between">
                        <p className=" my-4 text-slate-800 self-start">Hello There 👋🏾</p>
                        <h1 className="text-2xl mb-4 tracking-wide text-slate-800 text-justify">
Je m&apos;appelle Francisco, développeur web avec une expertise créative. Je crée des expériences en ligne uniques en repoussant les limites de la conception. Laissez-moi donner vie à votre projet avec originalité.</h1>
                        <p className="leading-9 text-md mb-4 text-slate-800 text-justify mt-6">Avec plus de 3 ans d&apos;expérience en développement web, je me concentre sur JavaScript, React et Vue pour des interfaces utilisateur contemporaines. Mon expertise s&apos;étend au développement back-end, où j&apos;utilise des technologies comme PHP (Symfony), Python (Flask, FastAPI) et Java (Spring Boot) pour des solutions solides et évolutives. Fort d&apos;une expérience diversifiée, je crée des applications web de haute qualité, répondant précisément aux besoins de mes clients.</p>
                        <div className="md:self-start md:mt-8">
                            <button className="py-4 px-8 font-semibold border-2 border-slate-800  rounded-sm bg-slate-800 "><Link to="work" smooth={true} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 text-white hover:cursor-pointer md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">See Work</Link> </button>
                        </div>
                    </div>
                    <div className="h-full sm:w-full sm:mt-8 grid gri-d-cols-1 place-items-center">
                        <Image src={PortfolioPic} className="w-full md:w-4/5 rounded-md" alt="francisco mambo" />
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
 
export default About;