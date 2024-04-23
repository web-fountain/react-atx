import z from 'zod';

import type { Format, JSONSchemaType } from 'ajv';
import { fullFormats } from 'ajv-formats/dist/formats';



const joinFormSchema = z.object({
  email: z.string().email().min(6).max(254)
}).required({ email: true });

type JoinFormSchema = z.infer<typeof joinFormSchema>;


export { type JoinFormSchema}
export default joinFormSchema
