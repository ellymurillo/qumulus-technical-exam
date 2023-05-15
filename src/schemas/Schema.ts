import { parse } from "../composables";
import SchemaInterface from "../interfaces/Schema";

export default parse(<SchemaInterface>{
  type: "object",
  properties: {
    firstName: {
      type: "string",
    },
    lastName: {
      type: "string",
    },
    birthdate: {
      type: "string",
      format: "date",
      ageRange: {
        min: 18,
        max: 110
      },
      isNotFutureDate: true,
      errorMessage: {
        format: "Invalid date format.",
        ageRange: "Invalid birth date. Minimum age is 18."
      }
    },
    age: {
      type: "number",
    },
    email: {
      type: "string",
      pattern: "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
      errorMessage: {
        pattern: "Invalid email format.",
      }
    },
    submit: {
      type: "object",
    }
  },
  required: ["firstName", "lastName", "email", "birthDate"],
  additionalProperties: false
});