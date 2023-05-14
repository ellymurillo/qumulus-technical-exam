import { parse } from "../composables";
import UISchemaInterface from "../interfaces/UISchema";

export default parse(<UISchemaInterface>{
  type: "VerticalLayout",
  elements: [
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/firstName"
        },
        {
          type: "Control",
          scope: "#/properties/birthdate"
        },
        {
          type: "Control",
          scope: "#/properties/age"
        }
      ]
    },
    {
      type: "HorizontalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/lastName"
        },
        {
          type: "Control",
          scope: "#/properties/email"
        },
      ]
    },
    {
      type: "VerticalLayout",
      elements: [
        {
          type: "Control",
          scope: "#/properties/submit",
          rule: {
            effect: "ENABLE",
            condition: {
              scope: "#/properties/age",
              schema: {
                minimum: 18,
              },
            }
          },
        }
      ]
    }
  ]
});