<template>
  <v-text-field 
    type="date" 
    variant="outlined" 
    :label="control.label" 
    outlined 
    @change="onChange" 
    :model-value="control.data"
  />
</template>

<script lang="ts">
import { ControlElement } from '@jsonforms/core';
import { defineComponent } from 'vue';
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';

const controlRenderer = defineComponent({
  name: "DateControlRenderer",
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