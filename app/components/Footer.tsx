import Container from "@/components/Container"
import {motion} from "framer-motion"

const data = [
    {
        title: "Email me at",
        text: "franciscomambo91@gmail.com"
    },
    {
        title: "Call me at",
        text: "+33 650521891"
    },
    {
        title: "Where can you find me",
        text: "Rennes (France)"
    }
]


const Footer = () => {
    return (
        <footer className="w-full dark:bg-slate-400 py-14">
            <Container extraClasses="grid grid-cols-1 md:grid-cols-3 gap-y-8 md:gap-4 md:flex-row ">
                { data.map((item, index) => (
                    <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        key={index}
                    >
                        <h4 className="text-3xl mb-4">{item.title}</h4>
                        <p>{item.text}</p>
                    </motion.div>
                ))}
            </Container>
        </footer>
    );
}
 
export default Footer;