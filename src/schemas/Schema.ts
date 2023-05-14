import { parse } from "../composables";
import SchemaInterface from "../interfaces/Schema";

export default parse(<SchemaInterface>{
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 2,
    },
    lastName: {
      type: "string",
      minLength: 3
    },
    birthdate: {
      type: "string",
      format: "date",
    },
    age: {
      type: "number",
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      errorMessage: {
        pattern: "Invalid email format."
      }
    },
    submit: {
      type: "object",
    }
  },
  required: ["firstName", "lastName", "email", "birthDate"],
  additionalProperties: false
});