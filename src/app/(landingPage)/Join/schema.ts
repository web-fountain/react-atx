import type { Format, JSONSchemaType } from 'ajv';
import { fullFormats } from 'ajv-formats/dist/formats';


type SchemaFormats = { email: Format };
const schemaFormats: SchemaFormats = {
  // email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i
  email: fullFormats.email
};

const schema: JSONSchemaType<SchemaFormats> = {
  $async: true,
  type: 'object',
  properties: {
    email: {
      type: 'string',
      format: 'email',
      maxLength: 254,
      errorMessage: 'Invalid email'
    }
  },
  required: ['email'],
  additionalProperties: false
};


export { schemaFormats };
export default schema;

// asdfasdf.asdasdff@asdg.com
// aas@ag.com
