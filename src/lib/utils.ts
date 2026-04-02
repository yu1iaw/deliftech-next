import z from "zod";

export const FormSchema = z.object({
    name: z.string().trim().min(3),
    email: z.email(),
    phone: z.string().trim().min(10),
    address: z.string().trim().min(8).max(255)
})


export const sleep = (ms = 500) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

