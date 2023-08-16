import { PrismaClient } from "@prisma/client";
import { data } from "../content";

const prisma = new PrismaClient();

async function main(){
    console.log("Start seeding ...")
    for(const c of data){
        const cnt = await prisma.content.create({
            data: c
        })
        console.log(`Created content with id: ${cnt.id}`)
    }
    console.log("Seeding finished.")
}

main().then(async ()=>{
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1);
})