import {data} from "@/content"
import WorkCard from "./WorkCard";
import Container from "@/components/Container";

const Work = () => {
    return (
        <section className="w-full py-12 bg-white dark:bg-slate-400">
            <Container>
            <div className=" flex flex-col items-start justify-between mx-auto mb-12 p-4 h-full" id="work">
                <h4 className="text-4xl text-slate-800 dark:text-white">My Work</h4>
                <p className="text-slate-800 dark:text-white">I&apos;ve been busy past few years, working on some of the best projects. Here&apos;s a Glimpse!</p>
            </div>
            <div className="max-w-screen-xl flex flex-col md:grid gap-8 md:grid-cols-3 grid-rows-auto">
                {data.map( ({id, title, imageUrl, link, description}) => (
                    <WorkCard id={id} title={title} description={description} image={imageUrl} link={link} key={id}/>
                ))}
            </div>
            </Container>
        </section>
    );
}
 
export default Work;