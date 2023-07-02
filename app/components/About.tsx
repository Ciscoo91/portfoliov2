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
                        <h1 className="text-2xl mb-4 tracking-wide text-slate-800">My name is Francisco, I&apos;m a Web Developper with a strong sens of Humor and creative expertise!</h1>
                        <p className="leading-9 text-md mb-4 text-slate-800">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eligendi obcaecati iure deleniti maiores magni rem excepturi ut, dignissimos deserunt hic harum eum. Ea, exercitationem? Ea modi omnis deserunt porro.</p>
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