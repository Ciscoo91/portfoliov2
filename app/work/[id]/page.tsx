// import Image from "next/image"
import Container from "@/components/Container";
// import { useEffect } from "react";
// import {data} from "@/content"
// import { createClient } from "@supabase/supabase-js";
// import {supabase} from "lib/posts"
import { GetStaticProps } from "next";

type params = {
    params?: string,
}

// type Content = {
//     id: number,
//     title: string,
//     description: string,
//     link: string,
//     imageUrl: string,
//     text: string,
//     features: string[],
//     benefits : string[]
// }

type Content = {
    id: number,
    title: string,
    description: string,
    link: string,
    imageUrl: string,
}


async function getData(id: string) {

    const api_key = process.env.STRAPI_API_KEY
    try {
        const res = await fetch(`http://127.0.0.1:1337/api/works/${id}`,{
            headers: {
                Authorization: `Bearer ${api_key}`
            }
        })
    
        return res.json()
        // The return value is *not* serialized
    }catch(error){
        console.error(error)
    }
 
}


const WorkDetails = async ({
    params
}:{ params: {id: string}}) => {

    // const work = await getData(params.id)
    const {data} = await getData(params.id)
    // console.log(work)
    return (
        <main className="bg-orange-50 dark:bg-slate-400 flex min-h-screen flex-col items-center justify-between">
            <Container>
                <section className="flex flex-col items-center my-24">
                    <h1 className="text-2xl mb-4">{data.attributes.title}</h1>
                    <a href={`${data.attributes.link}`} className="py-4 px-8 font-semibold border-2 border-slate-800 text-white rounded-sm bg-slate-800">View Project</a>
                    <img src={`${data.attributes.image}`} alt="illustration for the application" className="w-11/12 rounded-lg mt-4" width={350} height={241} />
                </section>
                <p className="dark:text-slate-800">{data.attributes.description}</p>
                hello
            </Container>
        </main>
    );
}
 
export default WorkDetails;