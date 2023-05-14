<template>
    <v-text-field type="textarea" variant="outlined" :label="control.label" outlined @change="onChange" :model-value="control.data">
      <template v-slot:details v-if="control.data?.length && control.errors">
        {{ control.errors }}
      </template>
    </v-text-field>
  </template>
  
  <script lang="ts">
  import { ControlElement } from '@jsonforms/core';
  import { defineComponent } from 'vue';
  import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';
  
  const controlRenderer = defineComponent({
    name: "TextAreaControlRender",
    props: {
      ...rendererProps<ControlElement>()
    },
    setup(props) {
      return useJsonFormsControl(props);
    },
    methods: {
      onChange(event: Event) {
        this.handleChange(
          this.control.path,
          (event.target as HTMLInputElement).value
        );
      }
    }
  });
  
  export default controlRenderer;
  </script>