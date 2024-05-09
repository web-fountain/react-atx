import z from 'zod';


const joinFormSchema = z.object({
  email: z.string().email().min(6).max(254)
}).required({ email: true });

type JoinFormSchema = z.infer<typeof joinFormSchema>;


export type { JoinFormSchema };
export default joinFormSchema
