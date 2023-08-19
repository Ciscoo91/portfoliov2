import Container from "@/components/Container";
import Footer from "@/components/Footer"
import { getWorkById } from "../../../lib/content";


const WorkDetails = async ({
    params
}:{ params: {id: string}}) => {

    const {content} = await getWorkById(parseInt(params.id))
    console.log(content)
    return (
        <main className="bg-orange-50 dark:bg-slate-400 flex min-h-screen flex-col items-center justify-between">
            <Container extraClasses="flex flex-col items-center">
                <section className="flex flex-col items-center my-24">
                    <h1 className="text-2xl mb-4">{content?.title}</h1>
                    <a href={`${content?.link}`} className="py-4 px-8 font-semibold border-2 border-slate-800 text-white rounded-sm bg-slate-800">View Project</a>
                    <img src={`${content?.imageUrl}`} alt="illustration for the application" className="w-11/12 rounded-lg mt-4" width={350} height={241} />
                </section>
                <p className="dark:text-slate-800">{content?.description}</p>
                <Footer></Footer>
            </Container>
        </main>
    );
}
 
export default WorkDetails;