import prisma from "./prisma"

export async function getAllContent() {
    try {
        const content = await prisma.content.findMany()
        return {content}
    }catch(error){
        return {error}
    }
}

export async function getWorkById(id: number){
    try {
        const content = await prisma.content.findUnique({
            where: {
                id
            }
        })

        return {content}
    }catch(error){
        return {error}
    }
}