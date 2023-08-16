"use client"
import Link from "next/link"
import {motion} from "framer-motion"
// import arrowIcon from "@/assets/arrow_forward_icon.svg"

type WorkCardProps = {
    id: number,
    title: string,
    image: string,
    description: string | null,
    link: string
}

const WorkCard = ({title, image, id, description, link}: WorkCardProps) => {
    return (
        <motion.div 
            className="p-6 bg-orange-50 dark:bg-slate-500 my-4 flex flex-col justify-between rounded-lg"
            initial={{opacity: 0, y: 50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
        >
            <div className=" h-1/2 w-full">
                <img src={image} alt="picture that illustrate the project" className=" h-full w-full object-cover rounded-lg"/>
            </div>
            <h4 className=" dark:text-black my-4 text-slate-800 dark:text-white">{title}</h4>
            <p className="text-slate-800 my-4 dark:text-white">{description}</p>
            <Link href={{pathname: `/work/${id}`}} className="py-4 px-8 font-semibold border-2 border-slate-800 text-white rounded-sm bg-slate-800 self-start">View Project</Link>
        </motion.div>
    );
}
 
export default WorkCard;