<template>
   <div class="form-wrapper">
    <json-forms
      :data="data"
      :renderers="renderers"
      :schema="schema"
      :uischema="uiSchema"
      @change="onChange"
      :ajv="ajv"
    />
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { JsonForms, JsonFormsChangeEvent } from "@jsonforms/vue";
import { createAjv } from "@jsonforms/core";
import { vanillaRenderers } from "@jsonforms/vue-vanilla";
import ajvErrors from "ajv-errors"; 
import moment from "moment";

import ControlRenderers from "../renderers";

import { testRenderer } from "../composables";

import PersonInterface from "../interfaces/Person";

import schema from "../schemas/Schema";
import uiSchema from "../schemas/UISchema";

const renderers = [
  ...vanillaRenderers, 
  ...ControlRenderers.map(item => {

    const { renderer, type, rank } = item;

    return testRenderer(renderer, type, rank || 0)
  })
];

let data = reactive(<PersonInterface>{
  firstName: "",
  lastName: "",
  email: "",
  birthdate: "",
  age: 0
});

const ajv = createAjv({allErrors: true, verbose: true, strict: false});
ajvErrors(ajv);

function onChange(event: JsonFormsChangeEvent) {
  data = event.data;
  
  const age = data.birthdate.length ? calculateAge(data.birthdate) : 0;
  data.age = age;
};

function calculateAge(birthDate: string) {
  const theDate = new moment();
  const theBirthDate = new moment(new Date(birthDate));
  return theDate.diff(theBirthDate, "years");
}

const emit = defineEmits(["customChange"]);
</script>