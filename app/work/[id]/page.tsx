import Image from "next/image"
import Container from "@/components/Container";

type params = {
    params?: string,
}

const WorkDetails = ({
    params
}:{ params: {id: string}}) => {
    return (
        <main className="bg-orange-50 dark:bg-slate-400 flex min-h-screen flex-col items-center justify-between">
            <Container>
                <section className="flex flex-col items-center my-24">
                    <h1 className="text-2xl mb-4">Big Title</h1>
                    <a href={`/work/`} className="py-4 px-8 font-semibold border-2 border-slate-800 text-white rounded-sm bg-slate-800">View Project</a>
                    <Image src="https://framerusercontent.com/images/uyAShAoSXIDGViuomgdl9mM3QIs.jpg?scale-down-to=2048" alt="illustration for the application" className="w-11/12 rounded-lg mt-4" width={350} height={241}></Image>
                </section>
                <p className="dark:text-slate-800">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facilis ducimus quam, magni provident consequuntur ab fugit doloremque maiores nam error laboriosam nesciunt quo odit perspiciatis, laborum assumenda suscipit voluptates id! Quidem rerum, consequatur eligendi suscipit quas cupiditate est id libero repudiandae unde ipsam dolorum sequi alias magni iusto! Animi quis minus rem provident ab mollitia pariatur illum veniam. Suscipit, consequuntur. Consequuntur iusto, nam nesciunt neque facilis recusandae aliquid. Perferendis deleniti molestias hic libero animi optio perspiciatis dolores qui, quidem repudiandae mollitia, possimus consectetur, dolorum ducimus. Eaque vitae omnis ad autem? Perspiciatis delectus dolores officia quam cupiditate reiciendis perferendis libero.
                </p>
            </Container>
        </main>
    );
}
 
export default WorkDetails;