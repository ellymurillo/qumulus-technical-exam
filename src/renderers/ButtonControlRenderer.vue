<template>
  <div class="text-right">
    <v-btn :disabled="!control.enabled" color="primary">Submit</v-btn>
  </div>
</template>

<script lang="ts">
import { ControlElement } from '@jsonforms/core';
import { defineComponent } from 'vue';
import { rendererProps, useJsonFormsControl } from '@jsonforms/vue';

const controlRenderer = defineComponent({
  name: "ButtonControlRenderer",
  props: {
    ...rendererProps<ControlElement>()
  },
  setup(props) {
    return useJsonFormsControl(props);
  },
});

export default controlRenderer;
</script>