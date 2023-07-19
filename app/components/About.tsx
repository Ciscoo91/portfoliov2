import Image from "next/image"
import PortfolioPic from "@/assets/portfolio-pic.png"
import arrowIcon from "@/assets/arrow_forward_icon.svg"
import Container from "@/components/Container"
import {motion} from "framer-motion"

const About = () => {
    return ( 
        <section className="w-full h-auto md:max-h-screen bg-orange-50 dark:bg-slate-500 pb-12 pt-24">
            <Container>
                <motion.div 
                    className="max-w-screen-xl flex flex-col md:grid  md:grid-cols-2 md:gap-x-10 items-center justify-between mx-auto p-4 h-full"
                    initial={{opacity: 0, y: 50}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                >
                    <div className="h-full py-8 flex flex-col justify-between">
                        <p className=" my-4 text-slate-800">Hello There 👋🏾</p>
                        <h1 className="text-2xl mb-4 tracking-wide text-slate-800">
Je m&apos;appelle Francisco, développeur web avec une expertise créative. Je crée des expériences en ligne uniques en repoussant les limites de la conception. Laissez-moi donner vie à votre projet avec originalité.</h1>
                        <p className="leading-9 text-md mb-4 text-slate-800">Avec plus de 3 ans d&apos;expérience en tant que développeur web, je suis spécialisé dans JavaScript, React et Vue pour créer des interfaces utilisateur modernes. J&apos;ai également une solide expertise en développement back-end, utilisant des technologies telles que PHP (Symfony), Python (Flask, FastAPI) et Java (Spring Boot) pour des solutions robustes et évolutives. Grâce à mon expérience variée dans différents secteurs, je suis en mesure de concevoir et de développer des applications web de haute qualité qui répondent précisément aux besoins de mes clients.</p>
                        <div className="">
                            <button className="py-4 px-8 font-semibold border-2 border-slate-800 text-white rounded-sm bg-slate-800 ">My Story </button>
                            <button className="py-4 px-8 ml-4 font-semibold border-2 border-slate-800 dark:border-white rounded-sm">See Work</button>
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