import z from 'zod';


const speakersFormSchema = z.object({
  email: z.string().email().min(6).max(254)
}).required({ email: true });

type SpeakersFormSchema = z.infer<typeof speakersFormSchema>;


export type { SpeakersFormSchema };
export default speakersFormSchema
